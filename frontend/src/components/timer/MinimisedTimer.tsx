import { useRecoilState } from "recoil";
import { currentTimeState } from "../../recoil_state";
import { MiniTimer } from "./TimerStyled";

const MinimisedTimer = () => {
  const [time, setTime] = useRecoilState(currentTimeState);
  return (
    <MiniTimer>{`${
      Math.floor((time - 1) / 60) > 10
        ? Math.floor(time / 60)
        : "0" + Math.floor(time / 60)
    }:${time % 60 > 10 ? time % 60 : "0" + (time % 60)} `}</MiniTimer>
  );
};

export default MinimisedTimer;
