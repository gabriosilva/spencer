import { Dispatch, RefObject, SetStateAction } from "react";
import styled from "styled-components";

export interface ISearchBox {
  name: string;
  placeholder: string;
  setEvent: Dispatch<SetStateAction<string>>;
  onKeyDownEvent: (event: any) => void;
  refItem: RefObject<HTMLInputElement>;
  className?: any;
}

export default function SearchBox({
  name,
  placeholder,
  setEvent,
  onKeyDownEvent,
  refItem,
  className,
}: ISearchBox) {
  return (
    <StyledInput
      className={className}
      type="text"
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
  border-style: none;
  line-height: 131.19%;
  border-radius: 4px;
  color: black;
  background: #fff;
  font-weight: 400;
`;
