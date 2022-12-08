import { useEffect } from "react";
import PomodoroTimer from "./components/timer/Timer";
import MinimisedTimer from "./components/timer/MinimisedTimer";
import { currentTimeState, navbarButtonState, globalStyles } from "./recoil_state";
import { TimerMode } from "./components/timer/TimerStyled";
import Navbar from "./components/navbar/Navbar";
import { Fragment } from "react";
import Settings from "./components/themes/Settings";
import { createGlobalStyle } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Youtube from "./components/youtube/YoutubeEmbed";
import Notes from "./components/notes/Notes";
import ToDoList from "./components/todo/ToDoList";

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
  
  const currentGlobalStyles = useRecoilValue(globalStyles);
  const GlobalStyles = createGlobalStyle`
    :root {
      font-family: ${currentGlobalStyles.fontFamily};
      background-image: ${currentGlobalStyles.backgroundImage};
      color-scheme: ${currentGlobalStyles.theme} !important
    }
  `;
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="work-area">
        {navbarButtonStates.timer ? <PomodoroTimer /> : <MinimisedTimer />}
        <Settings />
        {navbarButtonStates.youtube && <Youtube />}
        <Notes />
        <ToDoList />
      </div>
    </Fragment>
  );
}

export default App;
