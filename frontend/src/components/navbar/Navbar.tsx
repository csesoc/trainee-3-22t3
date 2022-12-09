import "./Navbar.css";
import {
  faCirclePlay,
  faClock,
  faSquareCheck,
  faStickyNote,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavbarButton icon={faClock} name="timer" />
        <NavbarButton icon={faSquareCheck} name="todolist" />
        <NavbarButton icon={faStickyNote} name="notes" />
        <NavbarButton icon={faCirclePlay} name="youtube" />
      </div>

      <div className="navbar-right">
        <NavbarButton icon={faSun} name="settings" />
      </div>
    </div>
  );
};

export default Navbar;

