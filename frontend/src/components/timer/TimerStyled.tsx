import styled from "styled-components";

const Timer = styled.div`
  background: #eee;
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

const MiniTimer = styled(Timer)`
  min-height: 50px;
  width: 100px;
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
}

export { Timer, TimerMode, MiniTimer };
