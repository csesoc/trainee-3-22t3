import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface ButtonStates {
  timer: boolean;
  todolist: boolean;
  notes: boolean;
  youtube: boolean;
  settings: boolean;
  user: boolean;
}

export type NavbarButtonProps = FontAwesomeIconProps & {
  name: keyof ButtonStates;
};
