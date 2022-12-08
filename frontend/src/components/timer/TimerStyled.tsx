import styled from "styled-components";

export const Timer = styled.div<{ isStudyMode: boolean }>`
  background-color: ${(props) =>
    props.isStudyMode ? "rgb(202, 86, 82)" : "rgb(56, 133, 138)"};
  border-radius: 12px;
  min-height: 300px;
  padding: 12px;
  width: 400px;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TimerHeading = styled.div`
  display: flex;
  justify-content: center;
  font-family: courier, monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;

export const MiniTimer = styled(Timer)`
  min-height: 50px;
  width: 5vw;
  display: flex;
  justify-content: center;
  font-size: 2vw;
`;

export const ModeButton = styled.button<{ isSelected: boolean }>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }

  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
`;

export enum TimerMode {
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
