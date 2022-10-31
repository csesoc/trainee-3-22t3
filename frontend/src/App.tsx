import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import PomodoroTimer from "./components/timer/Timer";
import MinimisedTimer from "./components/timer/MinimisedTimer";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentTimeState, navbarButtonState } from "./recoil_state";

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

          document.title = `${
            Math.floor(minutes) > 10
              ? Math.floor(minutes)
              : "0" + Math.floor(minutes)
          }:${
            seconds % 60 > 10 ? seconds % 60 : "0" + (seconds % 60)
          } - time to focus!`;
        } else {
          // message/noise
          const existingState = { ...timerState };
          existingState.started = false;

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
