// import React from "react";
// import Draggable from "react-draggable";
// import Moveable, { InitialMoveable, Resizable } from "react-moveable";

import React, { useState } from "react";
import { Resizable } from "re-resizable";

import { useRef } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { navbarButtonState, YTstate } from "../../recoil_state";
import { useRecoilState, useRecoilValue } from "recoil";
import { ButtonStates } from "../navbar/NavbarStyled";
import { YoutubeComponent } from "./YoutubeStyled";
import YoutubeHeader from "../header/YoutubeHeader";

const Youtube = () => {
  const [toggleBtn, setToggleBtn] = useRecoilState(navbarButtonState);
  const youtubeState = useRecoilValue(navbarButtonState)["youtube"];
  const videoId = useRecoilValue(YTstate)["videoId"];
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (key: keyof ButtonStates) => {
    const existingStates = { ...toggleBtn };
    existingStates[key] = !existingStates[key];
    setToggleBtn(existingStates);
  };

  return (
    <YoutubeComponent ref={divRef} className="videoTrue">
      <YoutubeHeader
        heading="youtube"
        ref={divRef}
        name="youtube"
        handleClose={handleOnClick}
      />
      <Resizable
        minWidth="682px"
        minHeight={youtubeState && videoId !== "" ? "0px" : "380px"}
        lockAspectRatio={true}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
        maxWidth="1600px"
      >
        {youtubeState && videoId !== "" && (
          <LiteYouTubeEmbed id={videoId} title="Are you really studying?" />
        )}
      </Resizable>
    </YoutubeComponent>
  );
};
//   return youtubeState && videoId !== "" ? (
//     <YoutubeComponent ref={divRef} className="videoTrue">
//       <YoutubeHeader
//         heading="youtube"
//         ref={divRef}
//         name="youtube"
//         handleClose={handleOnClick}
//       />
//       <Resizable
//         minWidth="682px"
//         lockAspectRatio={true}
//         enable={{
//           top: false,
//           right: false,
//           bottom: false,
//           left: false,
//           topRight: false,
//           bottomRight: true,
//           bottomLeft: false,
//           topLeft: false,
//         }}
//         maxWidth="1200px"
//       >
//         <LiteYouTubeEmbed id={videoId} title="Are you really studying?" />
//       </Resizable>
//     </YoutubeComponent>
//   ) : (
//     <YoutubeComponent ref={divRef}>
//       <Resizable
//         minWidth="682px"
//         minHeight="450px"
//         maxWidth="1200px"
//         lockAspectRatio={true}
//       >
//         <YoutubeHeader
//           heading="youtube"
//           ref={divRef}
//           name="youtube"
//           handleClose={handleOnClick}
//         />
//       </Resizable>
//     </YoutubeComponent>
//   );
// };
export default Youtube;
