import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";
import { YoutubeWidgetState } from "./components/youtube/YoutubeValues";
import defaultBackground from './assets/sample_background.png';

const initialStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
};

const initialYTState: YoutubeWidgetState = {
  videoId: ""
}

const YTstate = atom({
  key: "YTstate",
  default: initialYTState
})

const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialStates,
});

interface initialStyleInterface {
  fontFamily: string,
  backgroundImage: string,
  theme: string
}

const initialStyles: initialStyleInterface = {
  fontFamily: 'Arial',
  backgroundImage: `url(${defaultBackground})`,
  theme: 'light'
}

const globalStyles = atom({
  key: "globalStyles",
  default: initialStyles,
});

export { navbarButtonState, globalStyles, YTstate }
