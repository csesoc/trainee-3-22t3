import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const NotesComponent = styled.div`
  position: absolute;
  background-color: Canvas;
  min-width: 250px;
  width: min-content;
  max-width: 100vw;
  min-height: 150px;
  height: min-content;
  max-height: 100vh;
`;
  
  export const Note = styled(ReactQuill)`
  background-color: Canvas;
  span {
    margin: 0;
  }
  .ql-container .ql-snow {
    width: auto;
    height: auto;
  }
  .ql-editor {
    resize: both;
    min-width: 250px;
    height: 100px;
    flex-grow: 0;
  }
`;
  