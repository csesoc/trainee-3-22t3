import { useState } from "react";
import "./Timer.css";
import { Timer, TimerMode } from "./TimerStyled";
import { useRecoilState } from "recoil";
import { currentTimeState } from "../../recoil_state";
import TimerSettings from "./TimerSettings";
import { getDuration } from "./TimerHelpers";

const PomodoroTimer = () => {
  const [currState, setCurrState] = useRecoilState(currentTimeState);

  const [openSettings, setOpenSettings] = useState(false);

  const updateStates = (props: {
    minutes?: number;
    seconds?: number;
    pomodoro?: number;
    break?: number;
    mode?: TimerMode;
    started?: boolean;
  }) => {
    const currStates = { ...currState };
    if (props.minutes !== undefined) currStates.minutes = props.minutes;
    if (props.seconds !== undefined) currStates.seconds = props.seconds;
    if (props.pomodoro !== undefined) currStates.pomodoro = props.pomodoro;
    if (props.break !== undefined) currStates.break = props.break;
    if (props.mode !== undefined) currStates.mode = props.mode;
    if (props.started !== undefined) currStates.started = props.started;

    setCurrState(currStates);
  };

  return (
    <>
      <Timer>
        {/* name + minimise button thing */}
        <div className="timer-heading">
          <div className="timer-title">Pomodoro Timer</div>
          <button>minimise</button>
        </div>
        {/* study OR break */}
        <div className="timer-modes">
          <button
            className={`${
              currState.mode === TimerMode.Study ? "timer-mode-selected" : ""
            }`}
            onClick={() => {
              updateStates({
                mode: TimerMode.Study,
                started: false,
              });
            }}
          >
            Study
          </button>
          <button
            className={`${
              currState.mode === TimerMode.Break ? "timer-mode-selected" : ""
            }`}
            onClick={() => {
              updateStates({
                mode: TimerMode.Break,
                started: false,
              });
            }}
          >
            Break
          </button>
        </div>
        {/* the actual timer */}
        <div className="time">
          <span>
            {currState.minutes > 10
              ? currState.minutes
              : "0" + currState.minutes}
          </span>
          :
          <span>
            {currState.seconds % 60 > 10
              ? currState.seconds % 60
              : "0" + (currState.seconds % 60)}
          </span>
        </div>
        {/* start/stop/resume + reset buttons */}
        <div className="timer-buttons">
          <button onClick={() => updateStates({ started: !currState.started })}>
            {!currState.started ? "START" : "STOP"}
          </button>
          <button
            onClick={() =>
              updateStates({
                minutes: getDuration()[0],
                seconds: getDuration()[1],
                started: false,
              })
            }
          >
            RESET
          </button>
        </div>
        {/* auto transition between study/breaks */}
        <div className="timer-transition-button">
          <div>Auto-Transition</div>
          <button onClick={() => setOpenSettings(!openSettings)}>
            Settings
          </button>
        </div>
      </Timer>
      {openSettings ? <TimerSettings /> : <></>}
    </>
  );
};

export default PomodoroTimer;
