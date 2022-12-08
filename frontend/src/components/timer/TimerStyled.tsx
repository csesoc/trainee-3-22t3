import styled from "styled-components";

const Timer = styled.div<{ isStudyMode: boolean }>`
  background-color: ${(props) =>
    props.isStudyMode ? "Canvas" : "rgb(56, 133, 138)"};
  min-height: 275px;
  // padding: 12px;
  width: 400px;
  text-align: center;
  // display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MiniTimer = styled(Timer)`
  min-height: 10px;
  width: 5vw;
  display: flex;
  justify-content: center;
  font-size: 5vw;
`;

export const TimerModesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModeButton = styled.button<{ isSelected: boolean }>`
  border-radius: 4px;
  padding: 2px 12px;
  height: 28px;
  box-shadow: none;
  color: white;
  opacity: 1;
  font-weight: bold;
  color: inherit;
  border: none;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }

  background: ${(props) => (props.isSelected ? "rgba(0, 0, 0, 0.15)" : "none")};
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
