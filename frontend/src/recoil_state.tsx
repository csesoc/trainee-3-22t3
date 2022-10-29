import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";
import defaultBackground from './assets/sample_background.png';
import { initialStyleInterface } from "./components/themes/ThemesStyled";

const initialStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
};

const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialStates,
});

const initialStyles: initialStyleInterface = {
  fontFamily: 'Arial',
  backgroundImage: `url(${defaultBackground})`,
  theme: 'light'
}

const globalStyles = atom({
  key: "globalStyles",
  default: initialStyles,
});

export { navbarButtonState, globalStyles }
