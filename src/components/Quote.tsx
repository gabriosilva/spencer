// import styles from "../styles/components/Button.module.css";

import styled from "styled-components";

interface Props {
  text: string;
  textHighlighted: string;
  title: string;
  titleSize?: number | string;
  textSize?: number | string;
  className?: any;
}

const TitleStyled = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  color: white;
  max-width: 29vw;
`;

const TextStyled = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.14em;
  margin-top: 1vh;
  max-width: 41vh;
  color: white;
`;

const TextHighlighted = styled(TextStyled)`
  color: white;
`;

const Container = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

function Quote({
  title,
  titleSize,
  text,
  textHighlighted,
  textSize,
  className,
}: Props) {
  title = title.toUpperCase();
  return (
    <Container className={className}>
      <TitleStyled>{title}</TitleStyled>
      <TextStyled style={{ fontSize: textSize || 24 }}>
        {text}
        {textHighlighted && (
          <TextHighlighted> {textHighlighted}</TextHighlighted>
        )}
      </TextStyled>
    </Container>
  );
}

export default Quote;
