import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";
import Moveable, { Resizable } from "react-moveable";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useRef, useState } from "react";
// var embed = function (url: string) {
//   var id = url.split("?v=")[1]; //sGbxmsDFVnE
//   var embedlink = "https://www.youtube.com/embed/" + id; //https://www.youtube.com/embed/sGbxmsDFVnE
//   document.getElementById("myIframe")!.src = embedlink;
// };
let widgetWidth: number;
const YoutubeEmbed = () => {
  const [target, setTarget] = React.useState<Element>();
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
  });
  React.useEffect(() => {
    setTarget(document.querySelector(".target")!);
  }, []);

  const ref = useRef(null);
  const [width, setWidth] = useState(-1);
  const [widgetHeight, setWidgetHeight] = useState(-1);
  const [boolean, setBoolean] = useState(false);
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
          <YoutubeEmbedVideo ref={ref} />
        </div>
        <Moveable
          className=""
          target={".target"}
          resizable={Resizable}
          keepRatio={false}
          throttleResize={1}
          renderDirections={["nw", "ne", "se", "sw"]}
          edge={false}
          zoom={1}
          origin={true}
          padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
          onResizeStart={(e) => {
            e.setOrigin(["%", "%"]);
            e.dragStart && e.dragStart.set(frame.translate);
          }}
          onResize={(e) => {
            const beforeTranslate = e.drag.beforeTranslate;
            frame.translate = beforeTranslate;
            e.target.style.width = `${e.width}px`;
            e.target.style.height = `${widgetHeight}px`;
            setBoolean((prevState) => !prevState);
            console.log(`(${widgetWidth}, ${widgetHeight})`);
            e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
        ></Moveable>
      </div>
    </Draggable>
  );
};
// 680/495 1730 1070 1580 990
const YoutubeEmbedVideo = () => {
  return (
    <div className="AMONGUS TRAP REMIX">
      <div>
        <div className="url-search">
          <FontAwesomeIcon
            className="FontAwesomeIcon"
            icon={faYoutube}
            name="Youtube"
          />
          <h1>Youtube</h1>
          <input
            className="url-input"
            type="search"
            placeholder="Enter Link Here"
          />
        </div>
        <div className="youtube-widget">
          <div className="video-container">
            <iframe
              width="640px"
              height="100%"
              src="https://www.youtube.com/embed/NvftPSb5Xtw"
              title="Secret Forest 🍃 Chill Lofi Beats"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
