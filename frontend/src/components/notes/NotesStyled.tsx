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
  .ql-editor.ql-blank::before{
    color: CanvasText;
    opacity: .75;
  }
  .ql-picker-options {
    background-color: Canvas;
    color: CanvasText;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-options {
    top: auto;
  }
  .ql-toolbar {
    border: none;
  }
  .ql-container.ql-snow {
    width: auto;
    height: auto;
    border: none;
  }
  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: CanvasText;
  }
  .ql-toolbar .ql-fill {
    fill: CanvasText;
    stroke: none;
  }
  .ql-toolbar .ql-picker {
    color: CanvasText;
  }
  .ql-editor {
    resize: both;
    min-width: 250px;
    min-height: 100px;
    height: 100px;
    &::placeholder {
      color: CanvasText;
    }
  }
`;
  