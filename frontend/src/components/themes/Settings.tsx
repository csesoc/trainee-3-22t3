import { useRecoilValue } from "recoil";
import { navbarButtonState } from "../../recoil_state";
import { SettingsDiv } from "./SettingsStyled";
import Font from "./Font";
import Theme from "./Theme";

const Settings = () => {
  const settingState = useRecoilValue(navbarButtonState)['settings'];
  return settingState ? (
    <SettingsDiv>
      <Font />
      <Theme />
    </SettingsDiv>
  ) : <></>;
}

export default Settings;
