import { useState, useRef } from "react";
import "./Timer.css";
import { Timer, TimerMode } from "./TimerStyled";
import { useRecoilState } from "recoil";
import { currentTimeState } from "../../recoil_state";
import TimerSettings from "./TimerSettings";
import { ModeButton, TimerModesRow, TransitionButton } from "./TimerStyled";
// import TimerProgressBar from "./TimerProgressBar";
import Header from "../header/Header";

const PomodoroTimer = () => {
  const [currState, setCurrState] = useRecoilState(currentTimeState);
  const [openSettings, setOpenSettings] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const updateStates = (props: {
    minutes?: number;
    seconds?: number;
    pomodoro?: number;
    break?: number;
    mode?: TimerMode;
    started?: boolean;
    autoTransition?: boolean;
  }) => {
    const currStates = { ...currState };
    if (props.minutes !== undefined) currStates.minutes = props.minutes;
    if (props.seconds !== undefined) currStates.seconds = props.seconds;
    if (props.pomodoro !== undefined) currStates.pomodoro = props.pomodoro;
    if (props.break !== undefined) currStates.break = props.break;
    if (props.mode !== undefined) currStates.mode = props.mode;
    if (props.started !== undefined) currStates.started = props.started;
    if (props.autoTransition !== undefined)
      currStates.autoTransition = props.autoTransition;

    setCurrState(currStates);
  };

  return (
    <Timer ref={divRef} isStudyMode={currState.mode === TimerMode.Study}>
      <Header name="timer" heading="Timer" ref={divRef} />
      {/* study OR break */}
      <div className="timer-modes">
        <ModeButton
          isSelected={currState.mode === TimerMode.Study}
          onClick={() => {
            updateStates({
              mode: TimerMode.Study,
              started: false,
            });
          }}
        >
          Study
        </ModeButton>
        |
        <ModeButton
          isSelected={currState.mode === TimerMode.Break}
          onClick={() => {
            updateStates({
              mode: TimerMode.Break,
              started: false,
            });
          }}
        >
          Break
        </ModeButton>
      </div>
      {/* the actual timer */}
      <div className="time">
        <span>
          {currState.minutes > 10 ? currState.minutes : "0" + currState.minutes}
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
        <button
          className="timer-btn-stop-start"
          onClick={() => updateStates({ started: !currState.started })}
        >
          {!currState.started ? "Start" : "Stop"}
        </button>
        <button
          className="timer-btn-reset"
          onClick={() =>
            updateStates({
              minutes:
                currState.mode === TimerMode.Study
                  ? currState.pomodoro
                  : currState.break,
              seconds: 0,
              started: false,
            })
          }
        >
          Reset
        </button>
      </div>
      {/* auto transition between study/breaks */}
      <div className="timer-transition-button">
        <label>
          Auto-transition
          <input
            type="checkbox"
            style={{ float: "left", paddingTop: "5px" }}
            onChange={() =>
              updateStates({ autoTransition: !currState.autoTransition })
            }
          />
        </label>
        <button
          className="settings-btn"
          onClick={() => setOpenSettings(!openSettings)}
        >
          Settings
        </button>
      </div>
      {openSettings ? <TimerSettings /> : <></>}
    </Timer>
  );
};

export default PomodoroTimer;
