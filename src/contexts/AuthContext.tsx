import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
  ILogin,
  IRegister,
  login,
  register,
  verifyToken,
} from "../services/auth";

export interface IUser {
  userId: string;
  username: string;
  email: string;
}

export interface IProviderValue {
  token: string;
  isAuth: boolean;
  loading: boolean;
  success: boolean;
  error: { message: string };
  user: IUser;
  loginUser: ({ username, password }: ILogin) => Promise<void>;
  registerUser: (requestData: IRegister) => Promise<boolean>;
  logOut: () => void;
  verifyAuth: () => Promise<void>;
}

export interface IChildren {
  children?: React.ReactNode;
}

export interface IAuthorized {
  token?: string;
  user?: {
    id: string;
    iat: number;
  };
  message?: string;
}
export const AuthContext = createContext({} as IProviderValue);

export function AuthProvider({ children }: IChildren) {
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const [token, setToken] = useState("");
  const [error, setError] = useState({ message: "" });

  function logOut() {
    localStorage.clear();
    sessionStorage.clear();
    setIsAuth(false);
    setToken("");
  }

  function setTokenHeader(headerToken: string) {
    axios.interceptors.request.use(
      (config) => {
        config.headers = { authorization: `Bearer ${headerToken}` };
        return config;
      },
      (e) => {
        return Promise.reject(e);
      }
    );
  }

  async function verifyAuth() {
    setLoading(true);
    getUser();
    const authToken = token || localStorage.getItem("token") || "";
    if (authToken !== "") {
      setTokenHeader(authToken);
    }
    try {
      const isAuthorized: IAuthorized = await verifyToken();
      isAuthorized.token ? setIsAuth(true) : logOut();
    } catch (e: any) {
      console.log(e);
      logOut();
    } finally {
      setLoading(false);
    }
  }

  async function loginUser({ username, password }: ILogin) {
    try {
      setLoading(true);
      const response = await login({ username, password });
      if (response.token) {
        setToken(response.token);
        setIsAuth(true);
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("user", response.token);
        setUser(response.data.user);
        setTokenHeader(response.token);
        setError({ message: "" });
      } else {
        logOut();
        setSuccess(false);
        setError({ message: response.message });
      }
    } catch (e: any) {
      logOut();
      const errorMessage = e || e.message;
      setError(errorMessage);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  async function registerUser({ username, password, email }: IRegister) {
    setLoading(true);
    let registered = false;
    try {
      const response = await register({ username, password, email });
      if (response.user) {
        setSuccess(true);
        registered = true;
      } else {
        setSuccess(false);
        setError({ message: response.message });
      }
      return registered;
    } catch (e: any) {
      const errorMessage = e || e.message;
      setError(errorMessage);
      setSuccess(false);
      return registered;
    } finally {
      setLoading(false);
    }
  }

  function getUser() {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);
    return userData;
  }

  useEffect(() => {
    verifyAuth();
  }, []);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const memoedValue = useMemo(
    () => ({
      token,
      isAuth,
      error,
      loginUser,
      user,
      logOut,
      loading,
      success,
      verifyAuth,
      registerUser,
    }),
    [isAuth, loading, error, token, user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}
