import React from "react";
import Navbar from "./components/navbar/Navbar";
import PomodoroTimer from "./components/timer/Timer";
import MinimisedTimer from "./components/timer/MinimisedTimer";
import { useRecoilValue } from "recoil";
import { navbarButtonState } from "./recoil_state";

function App() {
  const navbarButtonStates = useRecoilValue(navbarButtonState);

  return (
    <>
      <Navbar />
      {navbarButtonStates.timer ? <PomodoroTimer /> : <MinimisedTimer />}
    </>
  );
}

export default App;
