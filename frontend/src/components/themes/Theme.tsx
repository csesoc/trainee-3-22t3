import { useRecoilValue } from "recoil";
import { navbarButtonState } from "../../recoil_state";
import styled from 'styled-components';
import Font from "./Font";
import Mode from "./Mode";

const Theme = () => {
  const ThemeContainer = styled.div`
    position: fixed;
    right: 4.5rem;
    top: 3.5rem;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: Canvas;
    h1 {
      font-size: 1.25rem;
      margin: 0;
      margin-bottom: 1rem;
    }
  `;
  
  const settingState = useRecoilValue(navbarButtonState)['settings'];
  const successReturnDiv = (
    <ThemeContainer>
      <Font />
      <Mode />
    </ThemeContainer>
  );

  return settingState ? successReturnDiv : <></>;
}

export default Theme;