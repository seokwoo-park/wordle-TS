import React from "react";
import { BoardType } from "../constants/types/types";
import useStore from "../store";

type PropType = {
  letterPos: number;
  attemptVal: number;
};

const Letter = ({ letterPos, attemptVal }: PropType) => {
  const board = useStore((state) => state.board);

  const letter: string = board[attemptVal][letterPos];

  return <div className="letter">{letter}</div>;
};

export default Letter;
