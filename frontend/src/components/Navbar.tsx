import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faClock, faSquareCheck, faStickyNote, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import React from "react";

interface buttonStates {
  clock: boolean,
  todo: boolean,
  notes: boolean,
  play: boolean,
  setting: boolean,
  user: boolean,
}

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState<buttonStates>({
    clock: false,
    todo: false,
    notes: false,
    play: false,
    setting: false,
    user: false,
  });

  function handleOnClick(key: keyof buttonStates) {
    const existingState = {...toggleBtn};
    existingState[key] = !existingState[key];
    setToggleBtn(existingState);
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.clock ? 1 : 0.7}} onClick={() => handleOnClick("clock")} icon={faClock} size="lg"/>
        </span>
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.todo ? 1 : 0.7}} onClick={() => handleOnClick("todo")} icon={faSquareCheck} size="lg"/>
        </span>
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.notes ? 1 : 0.7}} onClick={() => handleOnClick("notes")} icon={faStickyNote} size="lg"/>
        </span>
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.play ? 1 : 0.7}} onClick={() => handleOnClick("play")} icon={faCirclePlay} size="lg"/>
        </span>
      </div>

      <div className="navbar-right">
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.setting ? 1 : 0.7}} onClick={() => handleOnClick("setting")} icon={faSun} size="lg"/>
        </span>
        <span>
          <FontAwesomeIcon className="btn" style={{opacity: toggleBtn.user ? 1 : 0.7}} onClick={() => handleOnClick("user")} icon={faUser} size="lg"/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
