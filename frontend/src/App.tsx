import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import { Fragment } from "react";
import { createGlobalStyle } from 'styled-components';
import { useRecoilValue } from "recoil";
import { globalStyles } from "./recoil_state";
import Settings from "./components/themes/Settings";

function App() {
  const globalStylesObject = useRecoilValue(globalStyles);

  const GlobalStyles = createGlobalStyle`
    :root {
      font-family: ${globalStylesObject.fontFamily};
      background-image: ${globalStylesObject.backgroundImage};
      color-scheme: ${globalStylesObject.theme} !important
    }
  `;

  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <div className='work-area'>
        <Settings />
        <YoutubeEmbed />
      </div>
    </Fragment>
  )
}

export default App
