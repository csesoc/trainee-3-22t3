import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";
import { TimerMode, TimerStates } from "./components/timer/TimerStyled";

const initialButtonStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
};

export const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialButtonStates,
});

const pomodoroDuration = localStorage.getItem("pomodoro-duration");
const breakDuration = localStorage.getItem("break-duration");

const timeDefaults: TimerStates = {
  minutes: 25,
  seconds: 0,
  pomodoro: parseInt(pomodoroDuration !== null ? pomodoroDuration : "0"),
  break: parseInt(breakDuration !== null ? breakDuration : "0"),
  mode: TimerMode.Study,
  started: false,
};

export const currentTimeState = atom({
  key: "currentTimeState",
  default: timeDefaults,
});
