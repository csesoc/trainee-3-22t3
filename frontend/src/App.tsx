import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import { Fragment } from "react";
import Theme from "./components/themes/Theme";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='work-area'>
        <Theme />
        <YoutubeEmbed />
      </div>
    </Fragment>
  )
}

export default App
