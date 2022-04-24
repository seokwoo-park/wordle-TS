import create from "zustand";
import { defaultAttempt } from "./constants/initialValues/defaultAttempt";
import { defaultBoard } from "./constants/initialValues/defaultBoard";
import { AttemptState, BoardState, BoardType } from "./constants/types/types";

export const boardStore = create<BoardState>((set) => ({
  board: defaultBoard,
  setBoard: (newBoard: BoardType) => set((state) => ({ board: newBoard })),
}));

export const attemptStore = create<AttemptState>((set) => ({
  currAttempt: defaultAttempt,
  increaseLetterPos: () =>
    set((state) => ({
      ...state,
      currAttempt: {
        ...state.currAttempt,
        letterPos: state.currAttempt.letterPos + 1,
      },
    })),
  decreaseLetterPos: () =>
    set((state) => ({
      ...state,
      currAttempt: {
        ...state.currAttempt,
        letterPos: state.currAttempt.letterPos - 1,
      },
    })),
  resetLetterPos: () =>
    set((state) => ({
      ...state,
      currAttempt: {
        ...state.currAttempt,
        letterPos: 0,
      },
    })),
  increaseAttempt: () =>
    set((state) => ({
      ...state,
      currAttempt: {
        ...state.currAttempt,
        attempt: state.currAttempt.attempt + 1,
      },
    })),
  resetAttempt: () =>
    set((state) => ({
      ...state,
      currAttempt: {
        ...state.currAttempt,
        attempt: 0,
      },
    })),
}));
