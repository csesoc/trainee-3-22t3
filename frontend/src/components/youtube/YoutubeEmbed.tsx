import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";
import Moveable, { OnResize, OnScale, Resizable } from "react-moveable";

const YoutubeEmbed = () => {
  const [target, setTarget] = React.useState();
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
          target={target}
          resizable={Resizable}
          keepRatio={false}
          throttleResize={1}
          renderDirections={["nw", "se"]}
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
            e.target.style.height = `${e.height}px`;
            e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
        ></Moveable>
      </div>
    </Draggable>
  );
};

const YoutubeEmbedVideo = () => {
  return (
    <div>
      <Draggable>
        <div className="youtube-widget">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NvftPSb5Xtw"
              title="Secret Forest 🍃 Chill Lofi Beats"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default YoutubeEmbed;
