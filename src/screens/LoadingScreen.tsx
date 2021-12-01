import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/loading-ball.json";

export default function LoadingScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} height={300} width={300} />
    </Container>
  );
}

const Container = styled.div`
  flex:1;
  background: #ff4c29;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.32s all;
`;