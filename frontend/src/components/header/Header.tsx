import styled from "styled-components";
import { navbarButtonState } from "../../recoil_state";
import { useRecoilState } from "recoil";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback, useEffect } from "react";
import { ButtonStates } from "../navbar/NavbarStyled";
import { forwardRef } from "react";

// Styling for the header
const HeaderStyled = styled.div<{ pressed: boolean }>`
  display: flex;
  width: auto;
  margin: auto;
  padding: 1rem;
  background-color: Canvas;
  h1 {
    font-size: 20px;
    margin: 0;
  }
  span {
    transform: translateY(-15%);
    margin-left: auto;
    margin-right: .5rem;
  }
  user-select: none;
  cursor: ${(props) => (props.pressed) ? "grabbing" : "grab"};
`;

interface HeaderProps {
  heading: string,
  name: keyof ButtonStates
}

const Header = forwardRef((props: HeaderProps, ref: any) => {
  const [toggleBtn, setToggleBtn] = useRecoilState(navbarButtonState);
  const [pressed, setPressed] = useState(false);

  const handleOnClick = (key: keyof ButtonStates) => {
    const existingStates = { ...toggleBtn };
    existingStates[key] = !existingStates[key];
    setToggleBtn(existingStates);
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
    let position = { x: targetInfo.left, y:targetInfo.top };
    const maxWidth = window.innerWidth - targetInfo.width;
    const maxHeight = window.innerHeight - targetInfo.height;
    ref.current.style.position = 'absolute';
    // Handle mouse movement
    const handleOnMouseMove = (event: MouseEvent) => {
      position.x += event.movementX;
      position.x = (position.x < 0 ? 0 : position.x);
      position.x = (position.x > maxWidth ? maxWidth : position.x);
      position.y += event.movementY;
      position.y = (position.y < 0 ? 0 : position.y);
      position.y = (position.y > maxHeight ? maxHeight : position.y);
      ref.current.style.left = `${position.x}px`;
      ref.current.style.top = `${position.y}px`;
    };
    // Handle mouse up
    const handleOnMouseUp = () => {
      setPressed(false);
    }
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
    <HeaderStyled onMouseDown={handleOnMouseDown} pressed={pressed}>
      <h1>{props.heading}</h1>
      <span onClick={() => handleOnClick(props.name)}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </span>
    </HeaderStyled>
  )
});

export default Header;