import React from "react"
import Navbar from "./components/navbar/Navbar"
import YoutubeEmbed from "./components/youtube/YoutubeEmbed"
import { Fragment } from "react"

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='work-area'>
        <YoutubeEmbed />
      </div>
    </Fragment>
  )
}

export default App
