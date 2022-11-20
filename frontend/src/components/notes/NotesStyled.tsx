import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const NotesComponent = styled.div`
  position: absolute;
  background-color: Canvas;
  width: min-content;
  height: min-content;
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
    min-height: 100px;
    height: 100px;
  }
`;
  