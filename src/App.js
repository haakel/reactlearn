// Custom hook
// useState useContext useEffect

import { useState } from "react";
import "./App.css";
import { useTaggle } from "./useTaggle";
// e10 - 4:33:53
function App() {
  const [isVisible, toggle] = useTaggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>This is my hidden text</h1>}
    </div>
  );
}

export default App;
