import { useRecoilValue } from "recoil";
import { currentTimeState } from "../../recoil_state";
import { MiniTimer, TimerMode } from "./TimerStyled";
import Header from "../header/Header";
import { useRef } from "react";

const MinimisedTimer = () => {
  const currState = useRecoilValue(currentTimeState);
  const divRef = useRef<HTMLDivElement>(null);
  // const duration =
  //   currState.mode === TimerMode.Study ? currState.pomodoro : currState.break;
  const minutes = currState.minutes;
  const seconds = currState.seconds;

  const str = `${minutes >= 10 ? minutes : "0" + minutes}:${seconds >= 10 ? seconds : "0" + seconds}`;

  return (
    <MiniTimer>
      <h1>{str}</h1>
      <div className="dots">
        <h2>{currState.mode === TimerMode.Study ? "Studying" : "Having a break"}</h2>
        <div className="loader_dot">
          .
        </div>
        <div className="loader_dot">
          .
        </div>
        <div className="loader_dot">
          .
        </div>
      </div>
    </MiniTimer>
  );
};

export default MinimisedTimer;
