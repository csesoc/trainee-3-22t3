import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";
import { TimerMode, TimerStates } from "./components/timer/TimerStyled";
import { YoutubeWidgetState } from "./components/youtube/YoutubeValues";

const defaultBackground = "https://www.lofi.cafe/gifs/NKEt9elQ5cR68.gif";

const initialButtonStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
};

const initialYTState: YoutubeWidgetState = {
  videoId: "",
};

const YTstate = atom({
  key: "YTstate",
  default: initialYTState,
});

const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialButtonStates,
});

const pomodoroDuration = localStorage.getItem("pomodoro-duration");
const breakDuration = localStorage.getItem("break-duration");

const timeDefaults: TimerStates = {
  minutes: 1,
  seconds: 0,
  pomodoro: parseInt(pomodoroDuration !== null ? pomodoroDuration : "25"),
  break: parseInt(breakDuration !== null ? breakDuration : "15"),
  mode: TimerMode.Study,
  started: false,
  autoTransition: false,
};

export const currentTimeState = atom({
  key: "currentTimeState",
  default: timeDefaults,
});

interface initialStyleInterface {
  fontFamily: string;
  backgroundImage: string;
  theme: string;
}

const initialStyles: initialStyleInterface = {
  fontFamily: "Arial",
  backgroundImage: `url(${defaultBackground})`,
  theme: "light",
};

const globalStyles = atom({
  key: "globalStyles",
  default: initialStyles,
});

const zIndexValue = atom({
  key: "zIndexValue",
  default: 0,
});

export { navbarButtonState, globalStyles, YTstate, zIndexValue };
