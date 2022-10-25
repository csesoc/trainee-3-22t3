import { atom } from "recoil";
import { ButtonStates } from "./components/navbar/NavbarStyled";

const initialButtonStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
};

const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialButtonStates,
});

const timerValue = localStorage.getItem("timer-value");
const currentTimeState = atom({
  key: "currentTimeState",
  default: parseInt(timerValue !== null ? timerValue : "0"),
});

export { navbarButtonState, currentTimeState };
