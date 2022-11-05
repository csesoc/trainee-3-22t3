import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { globalStyles } from "../../recoil_state";
import { useRecoilState } from "recoil";
import { CustomBgForm, ThemeCatalogueDiv, ThemeItemDiv } from "./SettingsStyled";

interface TargetAdditionalKey {
  customUrl: {
    value: string
  }
}

type ChangeBackgroundFormInterface = EventTarget & TargetAdditionalKey;

async function checkImageUrl(url: string){
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

const Theme = () => {
  const [mode, setMode] = useRecoilState(globalStyles);

  const changeMode = (modeString: 'light' | 'dark') => {
    const currentStyles = { ...mode };
    if (currentStyles.theme !== modeString) {
      currentStyles.theme = modeString;
      setMode(currentStyles);
    }
  }

  const handleOnSubmit : any = async (event: Event) => {
    event.preventDefault();
    const currentStyles = { ...mode };
    const customUrl = (event.target as ChangeBackgroundFormInterface).customUrl.value;
    if (await checkImageUrl(customUrl)) {
      currentStyles.backgroundImage = `url(${customUrl})`;
      setMode(currentStyles);
    }
  }

  return (
    <div>
      <h1>Themes</h1>
      <CustomBgForm onSubmit={handleOnSubmit}>
        <input name="customUrl" type="text" placeholder='Input image URL...'/>
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </CustomBgForm>
      <ThemeCatalogueDiv>
        <ThemeItemDiv onClick={() => changeMode('dark')}>
          <FontAwesomeIcon icon={faMoon} />
          <p>Dark Mode</p>
        </ThemeItemDiv>
        <ThemeItemDiv onClick={() => changeMode('light')}>
          <FontAwesomeIcon icon={faStar} />
          <p>Light Mode</p>
        </ThemeItemDiv>
      </ThemeCatalogueDiv>
    </div>
  )
}

export default Theme;