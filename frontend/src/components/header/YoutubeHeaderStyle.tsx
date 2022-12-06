import styled from "styled-components";

export const SearchbarStyled = styled.div<{ pressed: boolean }>`
  display: flex;
  width: auto;
  min-width: 682px;
  height: 30px;
  margin: auto;
  padding: 1rem;
  backdrop-filter: "blur(200px)";
  background-color: Canvas;
  h1 {
    font-size: 24px;
    margin: auto;
  }
  span {
    transform: translateY(-15%);
    margin-left: auto;
    margin-right: 0.5rem;
  }
  .urlInput {
    width: 100%;
    height: 25px;
    margin: auto;
    margin-right: 0px;
    margin-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-right-width: 0px;
    padding-left: 10px;
    border-radius: 10px 0px 0px 10px;
  }
  .searchButton {
    color: Canvas;
    background-color: lightgrey;
    margin: auto;
    margin-right: 20px;
    margin-left: 0px;
    min-width: 30px;
    width: 100%;
    max-width: 150px;
    height: 29px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-left-width: 0px;
    border-radius: 0px 10px 10px 0px;
  }
  .searchbutton: hover {
    background-color: darkgrey;
    cursor: pointer;
  }
  .youtube-icon {
    font-size: 30px;
    margin: auto;
    margin-right: 10px;
  }
  user-select: none;
  cursor: ${(props) => (props.pressed ? "grabbing" : "grab")};
`;
