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

  return (
    <MiniTimer
      ref={divRef}
      isStudyMode={currState.mode === TimerMode.Study ? true : false}
    >
      <Header name="timer" heading="Timer" ref={divRef} />
      <span className="mini-time">{`${
        minutes >= 10 ? minutes : "0" + minutes
      }:${seconds >= 10 ? seconds : "0" + seconds} `}</span>
    </MiniTimer>
  );
};

export default MinimisedTimer;
