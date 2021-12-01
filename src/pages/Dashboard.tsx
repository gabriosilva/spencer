import { useRef } from "react";

import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/thinkingCircle.json";

// components
import SearchBox from "../components/SearchBox";

// screens
import LoadingScreen from "../screens/LoadingScreen";

export default function Dashboard() {
  const defaultBlock = useRef<any>();
  const viewBlock = useRef<any>();

  const onKeyDownHandler = (e: any) => {
    if (e.key === "Enter") {
      console.log("yayyy");
      scrollToViewBlock();
    }
  };
  const scrollToViewBlock = () => {
    viewBlock.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMainBlock = () => {
    defaultBlock.current.scrollIntoView({ behavior: "smooth" });
  };
  const searchInput = useRef<HTMLInputElement>(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const loading = false;
  return (
    <ContainerWrapper>
      {loading ? (
        <Container>
          <LoadingScreen />
        </Container>
      ) : (
        <>
          <Container ref={defaultBlock}>
            <Lottie options={defaultOptions} height={600} width={600} />
            <PaddingBlock>
              <SearchBoxStyled
                name="search-item"
                placeholder=""
                setEvent={(e) => console.log(e)}
                onKeyDownEvent={onKeyDownHandler}
                refItem={searchInput}
              />
            </PaddingBlock>
          </Container>
          <DisplacedContainer
            ref={viewBlock}
            onClick={(e) => scrollToMainBlock()}
          >
            new content here!
          </DisplacedContainer>
        </>
      )}
    </ContainerWrapper>
  );
}

const Container = styled.div`
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  background: #ff4c29;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.32s all;
`;

const DisplacedContainer = styled.div`
  left: 0;
  right: 0;
  height: 100vh;
  background: #ff4c29;
  display: flex;
  irection: column;
  align-items: center;
  justify-content: center;
  transition: 0.32s all;
`;

const SearchBoxStyled = styled(SearchBox)`
  width: 52vh;
  height: 4vh;
  font-size: 1.8em;
  background: transparent;
  color: white;
  border-radius: 0;
  border-bottom: 2px solid;
  text-align: center;
  :focus {
    outline: none;
  }
`;

const ContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const PaddingBlock = styled.div`
  padding: 2vh;
`;
