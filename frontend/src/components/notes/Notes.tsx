import { navbarButtonState } from "../../recoil_state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState, useRef } from "react";
import { NotesComponent, Note } from "./NotesStyled";
import { ButtonStates } from "../navbar/NavbarStyled";
import Header from "../header/Header";

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
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote', 'code'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image']
          ]
        }}
        formats={[
          'header',
          'bold', 'italic', 'underline', 'strike', 'blockquote', 'code',
          'list', 'bullet', 'indent',
          'link', 'image'
        ]}
      />
    </NotesComponent>
  ) : <></>;
}

export default Notes;