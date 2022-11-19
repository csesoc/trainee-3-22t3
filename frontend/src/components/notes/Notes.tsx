import { navbarButtonState } from "../../recoil_state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState, useRef } from "react";
import { NotesComponent, Note } from "./NotesStyled";
import { ButtonStates } from "../navbar/NavbarStyled";
import Header from "../header/Header";
import Draggable from "react-draggable";

const Notes = () => {
  const [toggleBtn, setToggleBtn] = useRecoilState(navbarButtonState);
  const notesState = useRecoilValue(navbarButtonState)['notes'];
  const [value, setValue] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (key: keyof ButtonStates) => {
    const existingStates = { ...toggleBtn };
    existingStates[key] = !existingStates[key];
    setToggleBtn(existingStates);
  }

  return notesState ? (
    <NotesComponent ref={divRef}>
      <Header 
        heading="Notes"
        ref={divRef}
        name='notes'
        handleClose={handleOnClick}
      />
      <Note 
        theme="snow"
        value={value} 
        onChange={setValue}
        placeholder="Start typing to add a note..."
      />
    </NotesComponent>
  ) : <></>;
}

export default Notes;