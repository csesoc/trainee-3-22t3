import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback, useEffect, useRef } from "react";
import { ButtonStates } from "../navbar/NavbarStyled";
import { forwardRef } from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { YTstate } from "../../recoil_state";
import { useRecoilState } from "recoil";
import { SearchbarStyled } from "./YoutubeHeaderStyle";

type handleClose = (key: keyof ButtonStates) => void;

interface HeaderProps {
  heading: string;
  name: keyof ButtonStates;
  handleClose: handleClose;
}

const YoutubeHeader = forwardRef((props: HeaderProps, ref: any) => {
  const [pressed, setPressed] = useState(false);
  const [currentYTState, setYTState] = useRecoilState(YTstate);
  // search bar functional components
  const inputRef: any = useRef();
  function youtube_parser(url: string): string | false {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  function handleSearchClick() {
    const url: string | false = youtube_parser(String(inputRef.current.value));
    const existingStates = { ...currentYTState };
    if (url === false) {
      console.log(`Link is of incorrect format`);
      existingStates.videoId = "";
      setYTState(existingStates);
      return;
    }
    existingStates.videoId = url;
    setYTState(existingStates);
  }

  const handleOnMouseDown = useCallback(() => {
    setPressed(true);
  }, []);

  useEffect(() => {
    if (!pressed) return;
    // Get information on width, height, top and left value of the current
    // target
    const targetInfo = ref.current.getBoundingClientRect();
    // Store current x and y position
    let position = { x: targetInfo.left, y: targetInfo.top };
    const maxWidth = window.innerWidth - targetInfo.width;
    const maxHeight = window.innerHeight - targetInfo.height;
    ref.current.style.position = "absolute";
    // Handle mouse movement
    const handleOnMouseMove = (event: MouseEvent) => {
      position.x += event.movementX;
      position.x = position.x < 0 ? 0 : position.x;
      position.x = position.x > maxWidth ? maxWidth : position.x;
      position.y += event.movementY;
      position.y = position.y < 0 ? 0 : position.y;
      position.y = position.y > maxHeight ? maxHeight : position.y;
      ref.current.style.left = `${position.x}px`;
      ref.current.style.top = `${position.y}px`;
    };
    // Handle mouse up
    const handleOnMouseUp = () => {
      setPressed(false);
    };
    // Only add mousemove and mouseup event when pressed == true
    document.addEventListener("mousemove", handleOnMouseMove);
    document.addEventListener("mouseup", handleOnMouseUp);
    // Remove mousemove and mouseup event
    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [pressed]);

  return (
    <SearchbarStyled onMouseDown={handleOnMouseDown} pressed={pressed}>
      <FontAwesomeIcon
        className="youtube-icon"
        icon={faYoutube}
        name="Youtube"
      />
      <h1>{props.heading}</h1>
      <input
        ref={inputRef}
        className="urlInput"
        type="text"
        name="url"
        placeholder="Enter Youtube Link Here"
        onKeyDown={handleSearchClick}
      />
      <button
        type="submit"
        className="searchButton"
        onClick={handleSearchClick}
      >
        Search
      </button>
      <span onClick={() => props.handleClose(props.name)}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </span>
    </SearchbarStyled>
  );
});

export default YoutubeHeader;
