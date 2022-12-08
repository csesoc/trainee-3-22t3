import Navbar from "./components/navbar/Navbar";
import { Fragment } from "react";
import Settings from "./components/themes/Settings";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { globalStyles, navbarButtonState } from "./recoil_state";
import Youtube from "./components/youtube/YoutubeEmbed";
import Notes from "./components/notes/Notes";
import ToDoList from "./components/todo/ToDoList";

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
        {navbarButtonStates.youtube && <Youtube />}
        <Notes />
        <ToDoList />
      </div>
    </Fragment>
  );
}

export default App;
