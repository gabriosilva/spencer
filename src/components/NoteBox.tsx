import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  id: string;
  title: string;
  date: string;
  clickHandler: () => void;
}

export default function NoteBox({ id, title, date, clickHandler }: IProps) {
  return (
    <Container key={id}>
      <span>{title}</span>
      <span>{date}</span>
      <div onClick={clickHandler}>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  background: white;
  padding: 1.2rem 2.4rem;
  margin: 10px;
`;