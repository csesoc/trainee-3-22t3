import styled from "styled-components";

// Background color styling will change in the next version of it.
const Timer = styled.div<{ isStudyMode: boolean }>`
  background-color: ${(props) => (props.isStudyMode ? "Canvas" : "Canvas")};
  min-height: 275px;
  width: 400px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`;

const MiniTimer = styled.div`
  background: transparent;
  position: fixed;
  bottom: .5rem;
  right: 2.5rem;
  color: white;
  filter: drop-shadow(1px 1px 1px rgba(black, .75));
  text-align: right;
  h1 {
    font-size: 96px;
    padding: 0;
    margin: 0;
  }
  .dots {
    display: flex;
    margin: 1rem 0;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
  }
  h2 {
    font-size: 24px;
  }
  .loader_dot { animation: 1s blink infinite }
  .loader_dot:nth-child(2) { animation-delay: 250ms }
  .loader_dot:nth-child(3) { animation-delay: 500ms }
  @keyframes blink { 50% { color: transparent } }
`;

export const TimerModesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModeButton = styled.button<{ isSelected: boolean }>`
  padding: 2px 12px;
  height: 28px;
  box-shadow: none;
  opacity: 1;
  font-weight: bold;
  border: none;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
  background: none;
  border-bottom: ${(props) => (props.isSelected ? "1px solid" : "none")};
`;

export const TransitionButton = styled.button<{ mode: TimerMode }>`
  cursor: pointer;
  border: none;
  margin: 20px 0px 0px;
  padding: 0px 12px;
  border-radius: 7px;
  font-size: 22px;
  height: 55px;
  color: ${(props) =>
    props.mode === TimerMode.Study ? "rgb(202, 86, 82);" : "rgb(56, 133, 138)"};
  font-weight: bold;
  background-color: white;
  transition: color 0.5s ease-in-out 0s;
`;

enum TimerMode {
  Study,
  Break,
}

export interface TimerStates {
  minutes: number;
  seconds: number;
  pomodoro: number;
  break: number;
  mode: TimerMode;
  started: boolean;
  autoTransition: boolean;
}

export { Timer, TimerMode, MiniTimer };
