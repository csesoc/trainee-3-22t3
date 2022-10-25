import React from "react";
import Navbar from "./components/navbar/Navbar";
import YoutubeEmbed from "./components/youtube/YoutubeEmbed";
import ToDoList from "./components/todo/ToDoList";
import { Fragment } from "react"

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='work-area'>
        <YoutubeEmbed />
        <ToDoList />
      </div>
    </Fragment>
  )
}

export default App
