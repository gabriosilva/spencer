import { useEffect, useState } from "react";
import styled from "styled-components";

import NoteBox from "../components/NoteBox";

interface INote {
  note?: {
    id: string;
    title: string;
    body: string;
    date: string;
  };
}

interface IProps {
  className?: any;
  notes: {
    id: string;
    title: string;
    date: string;
  }[];
}

export default function NoteScreen({ notes, className }: IProps) {
  const [openNote, setOpenNote] = useState<INote>({});
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    openNote.note ? setBlur(true) : setBlur(false);
  }, [openNote]);

  function clickHandler(noteId: string) {
    // const fullNoteObject = openNote(noteId);
    const note = {
      id: noteId,
      title: "this is the title",
      body: "this is the <p>body</p> of this page!!1<br/>" + noteId,
      date: "10/10/10",
    };
    setOpenNote({ note });
    console.log(note);
  }
  return (
    <Container className={className}>
      {openNote.note && (
        <PopupWrapper>
          <NotePopup>
            <span>{openNote.note.body}</span>
          </NotePopup>
        </PopupWrapper>
      )}
      <Wrapper
        style={{ filter: blur ? "blur(10px)" : "" }}
        onClick={() => {
          blur && setOpenNote({});
        }}
      >
        {notes.map((note) => (
          <NoteBox
            id={note.id}
            title={note.title}
            date={note.date}
            clickHandler={() => {
              clickHandler(note.id);
            }}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background: #ff4c29;
  transition: 0.32s all;
`;

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  transition: 0.1s ease all;
`;

const PopupWrapper = styled.div`
  position: absolute;
  z-index: 1;
  padding: 1rem;
`;

const NotePopup = styled.div`
  background: white;
  width: 22rem;
  height: 22rem;
  padding: 1.5rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;
