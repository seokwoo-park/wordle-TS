import { useEffect, useState } from "react";
import { fetchWords } from "./api/wordsApi";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";

function App() {
  const [solution, setSolution] = useState<string>("");

  const initSolution = async () => {
    const result = await fetchWords(5);
    setSolution(result[0]);
  };

  useEffect(() => {
    initSolution();
  }, []);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {solution && <h1>{solution}</h1>}
      <div className="game">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
