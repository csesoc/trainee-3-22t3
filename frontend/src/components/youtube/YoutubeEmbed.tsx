import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";
import Moveable, { Resizable } from "react-moveable";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

const YoutubeEmbed = () => {
  const [, setTarget] = React.useState<Element>();
  const refVar: any = "";
  const ref: any = useRef(refVar);
  const [, setWidth] = useState(-1);
  const [widgetHeight, setWidgetHeight] = useState(-1);
  const [, setBoolean] = useState(false);
  const [frame,] = React.useState({
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
  const [youtubeVideoURL, setYoutubeVideoURL] = useState("");
  function youtube_parser(url: string): string | false {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  function handleClick() {
    const url: string | false = youtube_parser(String(inputRef.current.value));
    if (url === false) {
      console.log(`YOU MONKEY LEARN TO COPY A YT LINK PROPERLY`);
      return;
    }
    setYoutubeVideoURL(url);
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
          type="text"
          name="url"
          placeholder="Enter Youtube Link Here"
          onKeyDown={handleClick}
        />
        <button type="submit" className="search-button" onClick={handleClick}>
          Search
        </button>
        <button type="submit" className="minimize-button">
          <FontAwesomeIcon
            className="minimize-icon"
            icon={faWindowMinimize}
            name="minimize"
          />
        </button>
      </div>
      <LiteYouTubeEmbed id={youtubeVideoURL} title="Are you really studying?" />
    </div>
  );
};

export default YoutubeEmbed;
