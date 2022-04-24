import { attemptStore, boardStore } from "../store";

const useSelectLetter = () => {
  const {
    currAttempt,
    increaseLetterPos,
    resetLetterPos,
    increaseAttempt,
    resetAttempt,
    decreaseLetterPos,
  } = attemptStore();
  const { board, setBoard } = boardStore();

  const onEnter = () => {
    if (currAttempt.letterPos === 5) {
      increaseAttempt();
      resetLetterPos();
    } else {
      return;
    }
  };

  const onDelete = () => {
    const newBoard = [...board];
    if (currAttempt.letterPos > 0) {
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      decreaseLetterPos();
    } else {
      return;
    }
  };

  const onSelectLetter = (keyVal: string) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    increaseLetterPos();
  };

  const selectLetter = (keyVal: string) => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return {
    selectLetter,
  };
};

export default useSelectLetter;
