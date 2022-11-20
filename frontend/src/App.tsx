import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import { Fragment } from "react";
import Settings from "./components/themes/Settings";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { globalStyles, navbarButtonState } from "./recoil_state";
import Youtube from "./components/youtube/YoutubeEmbed";


function App() {
  const currentGlobalStyles = useRecoilValue(globalStyles);
  const navbarButtonStates = useRecoilValue(navbarButtonState);
  const GlobalStyles = createGlobalStyle`
    :root {
      font-family: ${currentGlobalStyles.fontFamily};
      background-image: ${currentGlobalStyles.backgroundImage};
      color-scheme: ${currentGlobalStyles.theme} !important
    }
  `;
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="work-area">
        <Settings />
        {navbarButtonStates.youtube ? <Youtube /> : <></>}
      </div>
    </Fragment>
  );
}

export default App;
