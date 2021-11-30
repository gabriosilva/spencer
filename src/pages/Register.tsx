import styled from "styled-components";
import { Navigate } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";
import Quote from "../components/Quote";

import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";

import { IRegister } from "../services/auth";

const Container = styled.div`
  background: #ff4c29;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.32s all;
`;

const RegisterStyled = styled(RegisterForm)`
  @media screen and (max-width: 450px) {
    max-width: 40vh;
    > div {
      font-size: 2.7rem;
    }
    input {
      font-size: 1rem;
      width: 35vh;
    }
    button {
      font-size: 1.5rem;
      width: 35vh;
    }
  }
`;

const QuoteStyled = styled(Quote)`
  margin-right: 15vh;
  max-width: 37vh;
  @media screen and (max-width: 1000px) {
    display: none;
    margin: 0;
  }
`;

function Register(props: any) {
  const { registerUser, isAuth, loading, error } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  async function registerUserHandler({ username, password, email }: IRegister) {
    const register = await registerUser({ username, password, email });
    setSuccess(register);
  }
  return (
    <>
      {isAuth ? (
        <Navigate to="/home" />
      ) : (
        <Container>
          <QuoteStyled
            title="HELLO, MY DEAR FRIEND :)"
            text="Let's do something. Let's create something, build things."
            textHighlighted=""
          />
          <RegisterStyled
            clickHandler={registerUserHandler}
            errorMsg={error}
            loading={loading}
          />
          {success && <Navigate to="/login" />}
        </Container>
      )}
    </>
  );
}

export default Register;
