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

  return youtubeState && videoId !== "" ? (
    <YoutubeComponent ref={divRef} className="videoTrue">
      <Resizable
        minWidth="videoWidth"
        minHeight="videoHeight"
        lockAspectRatio={true}
      >
        <YoutubeHeader
          heading="youtube"
          ref={divRef}
          name="youtube"
          handleClose={handleOnClick}
        />
        <LiteYouTubeEmbed id={videoId} title="Are you really studying?" />
      </Resizable>
    </YoutubeComponent>
  ) : (
    <YoutubeComponent ref={divRef}>
      <Resizable minWidth="682px" minHeight="450px" lockAspectRatio={true}>
        <YoutubeHeader
          heading="youtube"
          ref={divRef}
          name="youtube"
          handleClose={handleOnClick}
        />
      </Resizable>
    </YoutubeComponent>
  );
};
export default Youtube;
// const YoutubeEmbed = () => {
//   const [, setTarget] = React.useState<Element>();
//   const refVar: any = "";
//   const ref: any = useRef(refVar);
//   const [, setWidth] = useState(-1);
//   const [widgetHeight, setWidgetHeight] = useState(-1);
//   const [, setBoolean] = useState(false);
//   const [frame] = React.useState({
//     translate: [0, 0],
//   });
//   React.useEffect(() => {
//     setTarget(document.querySelector(".target")!);
//   }, []);

//   useLayoutEffect(() => {
//     if (ref.current) {
//       setWidth(ref.current.offsetWidth);
//       setWidgetHeight(ref.current.offsetHeight);
//     }
//   });

//   return (
//     <Draggable>
//       <div className="container">
//         <div className="target">
//           <Youtube />
//         </div>
//         <Moveable
//           className=""
//           target={".target"}
//           resizable={Resizable}
//           // keepRatio={false}
//           // throttleResize={1}
//           renderDirections={["nw", "se"]}
//           // edge={false}
//           // zoom={1}
//           // origin={true}
//           // padding={{ left: -5, top: -5, right: -20, bottom: -20 }}
//           onResizeStart={(e) => {
//             e.setOrigin(["%", "%"]);
//             e.dragStart && e.dragStart.set(frame.translate);
//           }}
//           onResize={(e) => {
//             const beforeTranslate = e.drag.beforeTranslate;
//             // frame.translate = beforeTranslate;
//             // if (e.width < 700) {
//             //   e.target.style.width = `700px`;
//             // } else if (e.width > 1600) {
//             //   e.target.style.width = `1600px`;
//             // } else {
//             e.target.style.width = `${e.width}px`;
//             // }
//             e.target.style.height = `${widgetHeight}px`;
//             setBoolean((prevState) => !prevState);
//             // console.log(`(${e.target.style.width}, ${e.target.style.height})`);
//             e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
//           }}
//         />
//       </div>
//     </Draggable>
//   );
// };
