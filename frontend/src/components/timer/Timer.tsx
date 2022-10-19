import { useEffect, useState } from "react"
import "./Timer.css"
import { Timer, TimerState, TimerMode } from "./TimerStyled"

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60) // in seconds
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerPaused, setTimerPaused] = useState(false)
  const [state, setState] = useState<TimerState>(TimerState.Initial)
  const [mode, setMode] = useState<TimerMode>(TimerMode.Study)

  // why does this look so stupid?
  const handlePlayPauseButton = () => {
    const newTimerState = (state + 1) % 3
    setState(newTimerState)

    if (newTimerState === TimerState.Initial) {
      setTimerStarted(false)
      setTimerPaused(false)
    } else if (newTimerState === TimerState.Running) {
      setTimerStarted(true)
    } else {
      setTimerPaused(true)
    }
  }

  const handleResetButton = () => {
    // should reset to user input rather than defaults
    setTime(mode === TimerMode.Study ? 25 * 60 : 15 * 60)
    setTimerStarted(false)
    setTimerPaused(false)
    setState(TimerState.Initial)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarted && !timerPaused) {
        if (time > 0) {
          setTime(time - 1)
        } else {
          // TODO: add a message/noise
          setState(TimerState.Initial)
          clearInterval(interval)
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timerStarted, time])

  return (
    <Timer>
      {/* name + minimise button thing */}
      <div className='timer-heading'>
        <div className='timer-title'>Pomodoro Timer</div>
        <div>minimise</div>
      </div>
      {/* study OR break */}
      <div className='timer-modes'>
        <button
          className={`${mode === TimerMode.Study ? "timer-mode-selected" : ""}`}
          onClick={() => {
            setMode(TimerMode.Study)
            setTime(25 * 60)
            setState(TimerState.Initial)
          }}
        >
          Study
        </button>
        <button
          className={`${mode === TimerMode.Break ? "timer-mode-selected" : ""}`}
          onClick={() => {
            setMode(TimerMode.Break)
            setTime(15 * 60)
            setState(TimerState.Initial)
          }}
        >
          Break
        </button>
      </div>
      {/* the actual timer */}
      <div className='time'>
        <span>
          {Math.floor(time / 60) > 10
            ? Math.floor(time / 60)
            : "0" + Math.floor(time / 60)}
        </span>
        :<span>{time % 60 > 10 ? time % 60 : "0" + (time % 60)}</span>
      </div>
      {/* start/stop/resume + reset buttons */}
      <div className='timer-buttons'>
        <button onClick={handlePlayPauseButton}>
          {state === TimerState.Initial
            ? "Start"
            : state === TimerState.Running
            ? "Stop"
            : "Resume"}
        </button>
        <button onClick={handleResetButton}>Reset</button>
      </div>
      {/* auto transition between study/breaks */}
      <div className='timer-transition-button'>
        <div>Auto-Transition</div>
        <button>Settings</button>
      </div>
      {/* settings things, will be moved out + need to restrict input to within 60 */}
      <form>
        <label>
          Seconds:
          <input
            type='number'
            name='seconds'
            onChange={(e) => setTime(parseInt(e.target.value))}
          />
        </label>
      </form>
    </Timer>
  )
}

export default PomodoroTimer
