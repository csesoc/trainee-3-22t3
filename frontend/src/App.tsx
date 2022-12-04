import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import { Fragment } from "react";
import Settings from "./components/themes/Settings";
import { createGlobalStyle } from 'styled-components';
import { useRecoilValue } from "recoil";
import { globalStyles } from "./recoil_state";
import ToDoList from "./components/todo/ToDoList";
import Notes from "./components/notes/Notes";

function App() {
  const currentGlobalStyles = useRecoilValue(globalStyles);

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
      <div className='work-area'>
        <Settings />
        <YoutubeEmbed />
        <ToDoList/>
        <Notes />
      </div>
    </Fragment>
  )
}

export default App;
