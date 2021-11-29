import { useContext } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import Quote from "../components/Quote";

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

const LoginStyled = styled(LoginForm)`
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
  margin-left: 15vh;
  max-width: 37vh;
  @media screen and (max-width: 1000px) {
    display: none;
    margin: 0;
  }
`;

function Login(props: any) {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/dashboard" />
      ) : (
        <Container>
          <LoginStyled
            clickHandler={() => console.log(123)}
            errorMsg={{ message: "" }}
            loading={false}
          />
          <QuoteStyled
            title="HELLO, MY DEAR FRIEND :)"
            text="Let's do something. Let's create something, build things."
            textHighlighted=""
          />
        </Container>
      )}
    </>
  );
}

export default Login;
