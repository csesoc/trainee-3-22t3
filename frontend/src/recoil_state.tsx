import { atom } from "recoil";

const initialStates = {
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

export { navbarButtonState };
