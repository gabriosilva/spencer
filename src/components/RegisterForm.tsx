import { useRef, useState } from "react";

import styled from "styled-components";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

interface Props {
  clickHandler: any;
  errorMsg: { message: string };
  loading: boolean;
  className?: any;
}

const Container = styled.div`
  width: 47vh;
  height: 79.881vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-itens: center;
  box-shadow: 0px 4px 8px 6px rgba(0, 0, 0, 0.08);
`;

const InputBoxStyled = styled(InputBox)`
  padding: 1vh;
  width: 37vh;
  height: 5vh;
  margin: 1.7vh;
  font-size: 1.2rem;
`;

const InputPassBoxStyled = styled(InputBoxStyled)`
  font-size: 1.2rem;
`;

const HeaderTitle = styled.div`
  font-size: 2.3rem;
  color: black;
  letter-spacing: 0.14em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
`;

const ButtonStyled = styled(SubmitButton)`
  padding: 1vh;
  width: 38vh;
  height: 6.8vh;
  margin: 1.7vh;
`;

const ErrorMessage = styled.span`
  font-size: 1.1rem;
  color: red;
`;

const RegisterLink = styled.a`
  color: grey;
`;

function RegisterForm({ clickHandler, errorMsg, loading, className }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const userInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);

  //handlers
  const handleKeyDownSubmit = (event: any) => {
    if (event.key === "Enter") {
      clickHandler({ username, password, email });
    }
  };
  const handleKeyDownNextFocus = (event: any) => {
    if (event.key === "Enter" && null !== passwordInput.current) {
      passwordInput.current.focus();
    }
  };

  return (
    <Container className={className}>
      <HeaderTitle>SPENCER</HeaderTitle>
      <ErrorMessage>{errorMsg.message}</ErrorMessage>
      <div>
        <InputBoxStyled
          name="usernameInput"
          type="text"
          placeholder="USERNAME"
          setEvent={setUsername}
          onKeyDownEvent={handleKeyDownNextFocus}
          refItem={userInput}
        />
        <InputBoxStyled
          name="emailInput"
          type="email"
          placeholder="EMAIL"
          setEvent={setEmail}
          onKeyDownEvent={handleKeyDownNextFocus}
          refItem={emailInput}
        />
        <InputPassBoxStyled
          name="passwordInput"
          type="password"
          placeholder="PASSWORD"
          setEvent={setPassword}
          onKeyDownEvent={handleKeyDownSubmit}
          refItem={passwordInput}
        />
        <InputPassBoxStyled
          name="confirmPasswordInput"
          type="password"
          placeholder="CONFIRM PASSWORD"
          setEvent={setPassword}
          onKeyDownEvent={handleKeyDownSubmit}
          refItem={confirmPasswordInput}
        />
      </div>
      <div>
        <ButtonStyled
          text="Register"
          onclick={() => {
            clickHandler({ username, email, password });
          }}
          enabled
        />
        <p>
          <RegisterLink href="/login">↩ Already have an account?</RegisterLink>
        </p>
      </div>
    </Container>
  );
}

export default RegisterForm;
