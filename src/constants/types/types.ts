export type BoardType = Array<string>[];

export interface BoardState {
  board: BoardType;
  updateBoard: (test: unknown) => void;
}
