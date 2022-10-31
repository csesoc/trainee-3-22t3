import { TimerMode } from "./TimerStyled";
import { useRecoilValue } from "recoil";
import { currentTimeState } from "../../recoil_state";

export const getDuration = (mode?: TimerMode) => {
  const currState = useRecoilValue(currentTimeState);
  let duration;
  if (mode !== undefined) {
    duration = mode === TimerMode.Study ? currState.pomodoro : currState.break;
  } else {
    duration =
      currState.mode === TimerMode.Study ? currState.pomodoro : currState.break;
  }
  const minutes = Math.floor(duration);
  const seconds = Math.floor((duration - Math.floor(duration)) * 60);
  return [minutes, seconds];
};
