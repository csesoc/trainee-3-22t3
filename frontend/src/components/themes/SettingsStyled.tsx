import styled from "styled-components";

export const SettingsDiv = styled.div`
  position: fixed;
  right: 1rem;
  top: 3.5rem;
  padding: 1.5rem;
  background-color: Canvas;
  h1 {
    font-size: 1.25rem;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const FontCatalogueDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const FontItemDiv = styled.div<{
  fontFamily: string;
}>`
  border-radius: 10px;
  padding: 1rem 0.5rem;
  font-family: ${(props) => props.fontFamily};
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.25s;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: normal;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
  }
`;

export const ThemeCatalogueDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
`;

export const ThemeItemDiv = styled.div`
  border-radius: 10px;
  padding: 1rem 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition: 0.25s;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
  }
`;

export const CustomBgForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  h2 {
    text-align: left;
    font-size: 0.75rem;
  }
  input[type="text"] {
    border-right: none !important;
    border-color: CanvasText;
    border-width: 1px;
    border-style: solid;
    padding: 10px;
    margin: 0;
    background-color: transparent;
    &:focus,
    &:active {
      outline: none;
    }
    &::placeholder {
      color: CanvasText;
    }
  }
  button {
    background-color: transparent;
    border-left: none !important;
    border-color: CanvasText;
    border-width: 1px;
    border-style: solid;
    padding: 10px;
    margin: 0;
    color: CanvasText;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
