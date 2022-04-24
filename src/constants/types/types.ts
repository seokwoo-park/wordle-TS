export type BoardType = Array<string>[];

export interface BoardState {
  board: BoardType;
  setBoard: (newBoard: BoardType) => void;
}

export type AttemptType = {
  attempt: number;
  letterPos: number;
};

export interface AttemptState {
  currAttempt: AttemptType;
  increaseLetterPos: () => void;
  decreaseLetterPos: () => void;
  resetLetterPos: () => void;
  increaseAttempt: () => void;
  resetAttempt: () => void;
}
