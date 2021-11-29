import styled from "styled-components";

interface Props {
  text: string;
  onclick: () => void;
  enabled: boolean;
  className?: any;
}

const StyledButton = styled.button`
  color: white;
  background: #52006A;
  font-weight: 300;
  font-size:1.8rem;
  border-style: none;
  line-height: 131.19%;
  border-radius: 4px;
  letter-spacing: 0.14em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);

  transition: 0.4s ease all;
  
  :hover {
    transform: scale(1.1,1.1);
    cursor: pointer;
  }
`;

function SubmitButton({ text, onclick, enabled, className }: Props) {
  return (
    <>
      {enabled ? (
        <StyledButton className={className} onClick={onclick}>
          {text}
        </StyledButton>
      ) : (
        <button>{text}</button>
      )}
    </>
  );
}

export default SubmitButton;
