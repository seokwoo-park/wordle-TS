import React from "react";
import { boardStore } from "../store";

type PropType = {
  letterPos: number;
  attemptVal: number;
};

const Letter = ({ letterPos, attemptVal }: PropType) => {
  const { board } = boardStore();

  const letter: string = board[attemptVal][letterPos];

  return <div className="letter">{letter}</div>;
};

export default Letter;
