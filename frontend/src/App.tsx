import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import { Fragment } from "react";
import Settings from "./components/themes/Settings";
import GlobalStyles from "./GlobalStyles";

function App() {
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
