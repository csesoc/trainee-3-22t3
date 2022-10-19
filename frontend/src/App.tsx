import React from "react";
import Navbar from "./components/Navbar";
import { YoutubeEmbed } from "./components/YoutubeEmbed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="work-area">
        <YoutubeEmbed />
      </div>
    </div>
  );
}

export default App;
