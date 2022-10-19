import { atom } from "recoil"
import { ButtonStates } from "./components/navbar/NavbarStyled"

const initialStates: ButtonStates = {
  timer: false,
  todolist: false,
  notes: false,
  youtube: false,
  settings: false,
  user: false,
}

const navbarButtonState = atom({
  key: "navbarButtonState",
  default: initialStates,
})

export { navbarButtonState }
