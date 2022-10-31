import { useRecoilValue } from "recoil";
import { currentTimeState } from "../../recoil_state";
import { MiniTimer, TimerMode } from "./TimerStyled";

const MinimisedTimer = () => {
  const currState = useRecoilValue(currentTimeState);

  // const duration =
  //   currState.mode === TimerMode.Study ? currState.pomodoro : currState.break;
  const minutes = currState.minutes;
  const seconds = currState.seconds;

  return (
    <MiniTimer>{`${minutes >= 10 ? minutes : "0" + minutes}:${
      seconds >= 10 ? seconds : "0" + seconds
    } `}</MiniTimer>
  );
};

export default MinimisedTimer;
