import { useRecoilValue } from "recoil";
import { navbarButtonState } from "../../recoil_state";
import { SettingsDiv } from "./SettingsStyled";
import Font from "./Font";
import Theme from "./Theme";

const Settings = () => {
  const settingState = useRecoilValue(navbarButtonState)['settings'];
  const settingDiv = (
    <SettingsDiv>
      <Font />
      <Theme />
    </SettingsDiv>
  );
  return settingState ? settingDiv : <></>;
}

export default Settings;