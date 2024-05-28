import { useState } from "react";
import "./App.css";

function App() {
  const [enable, setEnable] = useState(true);
  const [visualize, setVisualize] = useState(true);
  
  function habilitar() {
    setEnable(false);
  }
  function visualizar() {
    setVisualize(false);
  }

  return (
    <>
      <div className="botones">
        <button onClick={habilitar}>HabiliteButton</button>
        <button onClick={visualizar} disabled={enable}>VisualiceButton</button>
        <button hidden={visualize}>VeryGood!</button>
      </div>
    </>
  );
}

export default App;
