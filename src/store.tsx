import create from "zustand";
import { defaultBoard } from "./constants/Board/defaultBoard";
import { BoardState } from "./constants/types/types";

const useStore = create<BoardState>((set) => ({
  board: defaultBoard,
  updateBoard: (test: unknown) => set((state) => ({ board: state.board })),
}));

export default useStore;
