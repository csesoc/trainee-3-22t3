import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";
import Moveable, { Resizable } from "react-moveable";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseISO } from "date-fns";

// var embed = function (url: string) {
//   var id = url.split("?v=")[1]; //sGbxmsDFVnE
//   var embedlink = "https://www.youtube.com/embed/" + id; //https://www.youtube.com/embed/sGbxmsDFVnE
//   document.getElementById("myIframe")!.src = embedlink;
// };
let widgetWidth: number;
let widgetHeight: number;
const YoutubeEmbed = () => {
  const [target, setTarget] = React.useState<Element>();
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
  });
  React.useEffect(() => {
    setTarget(document.querySelector(".target")!);
  }, []);
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
          renderDirections={["nw", "ne", "se", "sw"]}
          edge={false}
          zoom={1}
          origin={true}
          padding={{ left: -1, top: -2, right: -2, bottom: -1 }}
          onResizeStart={(e) => {
            e.setOrigin(["%", "%"]);
            e.dragStart && e.dragStart.set(frame.translate);
          }}
          onResize={(e) => {
            const beforeTranslate = e.drag.beforeTranslate;
            frame.translate = beforeTranslate;
            e.target.style.width = `${e.width}px`;
            if (e.width > 690 && e.width < 1200) {
              e.target.style.height = `${e.width * (600 / 880)}px`;
            } else if (e.width > 1580) {
              e.target.style.width = `${1580}px`;
            }
            e.target.style.height = `${e.width * (990 / 1580)}px`;
            widgetWidth = e.width;
            widgetHeight = e.height;
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
  );
};

export default YoutubeEmbed;
