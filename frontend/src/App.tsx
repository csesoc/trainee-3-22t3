import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
  );
}

export default App;
