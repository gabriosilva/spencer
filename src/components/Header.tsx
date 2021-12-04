import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  pageTitle: string;
  iconClickHandler: () => void;
}

export default function Header({ pageTitle, iconClickHandler }: IProps) {
  return (
    <Container>
      <span>
        <Icon icon={faArrowCircleUp} onClick={iconClickHandler} />
      </span>
      <Title>{pageTitle}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  //   width: 100vw;
`;

const Title = styled.span`
  color: white;
  font-weight: 600;
  font-size 1.2rem;
  padding:1rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: white;
  transition: 0.2s all;
  cursor: pointer;
  :hover {
    font-size: 2rem;
    color: #52006A;
  }
`;
