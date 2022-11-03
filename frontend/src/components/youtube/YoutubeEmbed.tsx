import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";
import Moveable, { Resizable } from "react-moveable";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

const YoutubeEmbed = () => {
  // updates resized object position and other parameters
  const [target, setTarget] = React.useState<Element>();
  // a var of type any to tell typescript to shut up
  const refVar: any = "";
  const ref: any = useRef(refVar);
  // gets widget width and height for resize handle
  const [width, setWidth] = useState(-1);
  const [widgetHeight, setWidgetHeight] = useState(-1);
  // sets bool to check if width has been updated
  const [boolean, setBoolean] = useState(false);
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
  });
  React.useEffect(() => {
    setTarget(document.querySelector(".target")!);
  }, []);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setWidgetHeight(ref.current.offsetHeight);
    }
  });

  return (
    <Draggable>
      <div className="container">
        <div className="target">
          <YoutubeEmbedVideo />
        </div>
        <Moveable
          className=""
          target={".target"}
          resizable={Resizable}
          keepRatio={false}
          throttleResize={1}
          renderDirections={["nw", "se"]}
          edge={false}
          zoom={1}
          origin={true}
          padding={{ left: -5, top: -5, right: -20, bottom: -20 }}
          onResizeStart={(e) => {
            e.setOrigin(["%", "%"]);
            e.dragStart && e.dragStart.set(frame.translate);
          }}
          onResize={(e) => {
            const beforeTranslate = e.drag.beforeTranslate;
            frame.translate = beforeTranslate;
            if (e.width < 700) {
              e.target.style.width = `700px`;
            } else if (e.width > 1600) {
              e.target.style.width = `1600px`;
            } else {
              e.target.style.width = `${e.width}px`;
            }
            e.target.style.height = `${widgetHeight}px`;
            setBoolean((prevState) => !prevState);
            console.log(`(${e.target.style.width}, ${e.target.style.height})`);
            e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
        />
      </div>
    </Draggable>
  );
};

// widget with youtube embed and header search bar
const YoutubeEmbedVideo = () => {
  const inputRef: any = useRef();
  const [youtubeVideo, setYoutubeVideo] = useState("");
  function handleClick() {
    setYoutubeVideo(inputRef.current.value);
  }
  return (
    <div>
      <div className="url-search">
        <FontAwesomeIcon
          className="youtube-icon"
          icon={faYoutube}
          name="Youtube"
        />
        <h1>Youtube</h1>
        <input
          ref={inputRef}
          className="url-input"
          type="search"
          placeholder="Enter Youtube Link Here"
          onSubmit={handleClick}
        />
        <button type="submit" className="search-button" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="youtube-widget">
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            url={youtubeVideo}
            width="100%"
            height="100%"
            controls={true}
            playbackRate={1}
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
