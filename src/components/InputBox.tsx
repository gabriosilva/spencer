import { Dispatch, RefObject, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  setEvent: Dispatch<SetStateAction<string>>;
  onKeyDownEvent: (event: any) => void;
  refItem: RefObject<HTMLInputElement>;
  className?: any;
}

export default function InputBox({
  name,
  type,
  placeholder,
  setEvent,
  onKeyDownEvent,
  refItem,
  className,
}: Props) {
  return (
    <StyledInput
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => setEvent(e.target.value)}
      onKeyDown={onKeyDownEvent}
      ref={refItem}
      autoComplete="on"
    />
  );
}

const StyledInput = styled.input`
  color: white;
  background: #52006A;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.14em;
  border-style: none;
  line-height: 131.19%;
  border-radius: 4px;
  ::placeholder {
    color: #ffd;
  }
  :focus {
    outline: none;
  }
`;
