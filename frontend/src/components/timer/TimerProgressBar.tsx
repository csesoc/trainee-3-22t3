interface ProgressProps {
  progress: number;
  duration: number;
}

const TimerProgressBar = (props: ProgressProps) => {
  console.log(props.progress);
  console.log(props.duration);
  return <div>{Math.floor(props.progress / props.duration)}</div>;
};

export default TimerProgressBar;
