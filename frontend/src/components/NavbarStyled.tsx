import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface buttonStates {
  timer: boolean;
  todolist: boolean;
  notes: boolean;
  youtube: boolean;
  settings: boolean;
  user: boolean;
}

export type NavbarButtonProps = FontAwesomeIconProps & {
  name: keyof buttonStates;
};
