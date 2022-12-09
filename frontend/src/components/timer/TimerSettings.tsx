import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTimeState } from "../../recoil_state";
import { TimerMode } from "./TimerStyled";

const TimerSettings = () => {
  const [currState, setCurrState] = useRecoilState(currentTimeState);

  const getDuration = (mode?: TimerMode) => {
    let duration;
    if (mode !== undefined) {
      duration =
        mode === TimerMode.Study ? currState.pomodoro : currState.break;
    } else {
      duration =
        currState.mode === TimerMode.Study
          ? currState.pomodoro
          : currState.break;
    }
    const minutes = Math.floor(duration);
    const seconds = Math.floor((duration - Math.floor(duration)) * 60);
    return [minutes, seconds];
  };

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

  useEffect(() => {
    const duration = getDuration();
    console.log("update");
    updateStates({ minutes: duration[0], seconds: duration[1] });
  }, [currState.pomodoro, currState.break]);

  return (
    <div className="timer-settings">
      <div className="timer-settings-subheading">Time (In Minutes)</div>
      <form>
        <div>
          <label>Study </label>
          <input
            className="timer-settings-textbox"
            type="number"
            value={currState.pomodoro}
            min="0"
            max="9999"
            onKeyDown={() => event?.preventDefault()}
            onChange={(e) => {
              localStorage.setItem("pomodoro-duration", e.target.value);
              const existingState = { ...currState };
              existingState.pomodoro = parseInt(e.target.value);
              setCurrState(existingState);
            }}
          />
        </div>

        <div>
          <label>Break </label>
          <input
            className="timer-settings-textbox"
            type="number"
            value={currState.break}
            min="0"
            max="9999"
            onKeyDown={() => event?.preventDefault()}
            onChange={(e) => {
              localStorage.setItem("break-duration", e.target.value);
              const existingState = { ...currState };
              existingState.break = parseInt(e.target.value);
              setCurrState(existingState);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default TimerSettings;
