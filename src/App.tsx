import { useEffect, useState } from "react";
import { fetchWords } from "./api/wordsApi";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
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
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
