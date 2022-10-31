import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTimeState } from "../../recoil_state";
import { TimerMode } from "./TimerStyled";
import { getDuration } from "./TimerHelpers";

const TimerSettings = () => {
  const [currState, setCurrState] = useRecoilState(currentTimeState);

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
    updateStates({ minutes: duration[0], seconds: duration[1] });
  }, [currState.pomodoro, currState.break]);

  return (
    <form style={{ backgroundColor: "white" }}>
      TIMER SETTINGS
      <div>Time (minutes)</div>
      <label>
        Pomodoro
        <input
          type="number"
          value={currState.pomodoro}
          min="0"
          onChange={(e) => {
            localStorage.setItem("pomodoro-duration", e.target.value);
            const existingState = { ...currState };
            existingState.pomodoro = parseInt(e.target.value);
            setCurrState(existingState);
          }}
        />
      </label>
      <label>
        Break
        <input
          type="number"
          value={currState.break}
          min="0"
          onChange={(e) => {
            localStorage.setItem("break-duration", e.target.value);
            const existingState = { ...currState };
            existingState.break = parseInt(e.target.value);
            setCurrState(existingState);
          }}
        />
      </label>
    </form>
  );
};

export default TimerSettings;
