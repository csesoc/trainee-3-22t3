import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import PomodoroTimer from "./components/timer/Timer";
import MinimisedTimer from "./components/timer/MinimisedTimer";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentTimeState, navbarButtonState } from "./recoil_state";
import { TimerMode } from "./components/timer/TimerStyled";

function App() {
  const navbarButtonStates = useRecoilValue(navbarButtonState);
  const [timerState, setTimerState] = useRecoilState(currentTimeState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerState.started) {
        const timeLeft = timerState.minutes * 60 + timerState.seconds;
        if (timeLeft > 0) {
          const newTime = timeLeft - 1;
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;

          const existingState = { ...timerState };
          existingState.minutes = minutes;
          existingState.seconds = seconds;
          setTimerState(existingState);

          document.title = `${minutes > 10 ? minutes : "0" + minutes}:${
            seconds % 60 > 10 ? seconds % 60 : "0" + (seconds % 60)
          } - time to focus!`;
        } else {
          // message/noise

          // auto-transition
          const existingState = { ...timerState };
          if (timerState.autoTransition) {
            if (timerState.mode === TimerMode.Study) {
              existingState.minutes = existingState.break;
              existingState.seconds = 0;
              existingState.mode = TimerMode.Break;
            } else {
              existingState.minutes = existingState.pomodoro;
              existingState.seconds = 0;
              existingState.mode = TimerMode.Study;
            }
          } else existingState.started = false;

          setTimerState(existingState);

          clearInterval(interval);
          document.title = "CRAZY IDEA";
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      // document.title = "CRAZY IDEA";
    };
  }, [timerState]);

  return (
    <>
      <Navbar />
      {navbarButtonStates.timer ? <PomodoroTimer /> : <MinimisedTimer />}
    </>
  );
}

export default App;
