import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";
import { TimerMode, TimerStates } from "./components/timer/TimerStyled";
import { YoutubeWidgetState } from "./components/youtube/YoutubeValues";
import defaultBackground from "./assets/sample_background.png";

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
  minutes: 25,
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

export { navbarButtonState, globalStyles, YTstate };
