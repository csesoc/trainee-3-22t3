import React from "react";
import "./YoutubeEmbed.css";
import Draggable from "react-draggable";

const YoutubeEmbed = () => {
  return (
    <Draggable>
      <div className="youtube-widget">
        <div className="video-container">
          <iframe
            width="854"
            height="480"
            src="https://www.youtube.com/embed/NvftPSb5Xtw"
            title="Secret Forest 🍃 Chill Lofi Beats"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Draggable>
  );
};

export default YoutubeEmbed;
