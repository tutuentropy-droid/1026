import { create } from "zustand";
import { questions, Question } from "@/data/questions";

interface GameState {
  currentQuestionIndex: number;
  score: number;
  selectedOptionId: number | null;
  showResult: boolean;
  isCorrect: boolean | null;
  currentQuestion: () => Question;
  selectOption: (optionId: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentQuestionIndex: 0,
  score: 0,
  selectedOptionId: null,
  showResult: false,
  isCorrect: null,
  currentQuestion: () => questions[get().currentQuestionIndex % questions.length],
  selectOption: (optionId: number) => {
    const state = get();
    const question = questions[state.currentQuestionIndex % questions.length];
    const isCorrect = optionId === question.correctOptionId;
    set({
      selectedOptionId: optionId,
      showResult: true,
      isCorrect,
      score: isCorrect ? state.score + 1 : state.score,
    });
  },
  nextQuestion: () => {
    const state = get();
    set({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedOptionId: null,
      showResult: false,
      isCorrect: null,
    });
  },
  resetGame: () => {
    set({
      currentQuestionIndex: 0,
      score: 0,
      selectedOptionId: null,
      showResult: false,
      isCorrect: null,
    });
  },
}));
