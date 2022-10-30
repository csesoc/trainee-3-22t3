import { createGlobalStyle } from 'styled-components';
import { useRecoilValue } from "recoil";
import { globalStyles } from "./recoil_state";

const globalStylesObject = useRecoilValue(globalStyles);

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: ${globalStylesObject.fontFamily};
    background-image: ${globalStylesObject.backgroundImage};
    color-scheme: ${globalStylesObject.theme} !important
  }
`;

export default GlobalStyles;