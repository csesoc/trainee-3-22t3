import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Timer = styled.div`
  background: #eee;
  border-radius: 12px;
  min-height: 300px;
  padding: 12px;
  width: 400px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
enum TimerState {
  Initial,
  Running,
  Paused,
}

enum TimerMode {
  Study,
  Break,
}

// const TimerMode = styled.button<{ isSelected: string }>`
//   transform: ${(props) => (props.isSelected ? "scale(1.1)" : "scale(1.0)")};
// `
export { Timer, TimerState, TimerMode }
