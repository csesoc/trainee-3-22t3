import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const NotesComponent = styled.div`
  position: absolute;
  background-color: Canvas;
`;

export const Note = styled(ReactQuill)`
  background-color: Canvas;
  width: 500px;
  .ql-editor {
    height: 250px;
  }
`;
  