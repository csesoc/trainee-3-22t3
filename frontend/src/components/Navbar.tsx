import "./Navbar.css";
import Clock from "../assets/clock-regular.svg";
import Checkbox from "../assets/square-check-regular.svg";
import Notes from "../assets/note-sticky-regular.svg";
import Play from "../assets/circle-play-regular.svg";
import Settings from "../assets/gear-solid.svg";
import User from "../assets/user-regular.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="pomo-btn">
          <img src={Clock} height={20} />
        </button>
        <button className="todo-btn">
          <img src={Checkbox} height={20} />
        </button>
        <button className="notes-btn">
          <img src={Notes} height={20} />
        </button>
        <button className="yt-btn">
          <img src={Play} height={20} />
        </button>
      </div>

      <div className="navbar-right">
        <button className="settings-btn">
          <img src={Settings} height={20} />
        </button>
        <button className="user-btn">
          <img src={User} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
