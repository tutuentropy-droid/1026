import { create } from "zustand";
import { questions, Question } from "@/data/questions";

interface GameState {
  currentQuestionIndex: number;
  score: number;
  lives: number;
  streak: number;
  selectedOptionId: number | null;
  showResult: boolean;
  isCorrect: boolean | null;
  bonusEarned: boolean;
  gameOver: boolean;
  totalQuestions: number;
  currentPhysicist: string;
  shuffledIndices: number[];
  currentQuestion: () => Question;
  selectOption: (optionId: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

const TOTAL_ROUNDS = 5;
const INITIAL_LIVES = 3;

const getSinglePhysicistQuestions = (count: number): { physicist: string; indices: number[] } => {
  const physicistMap = new Map<string, number[]>();
  questions.forEach((q, idx) => {
    if (!physicistMap.has(q.physicist)) {
      physicistMap.set(q.physicist, []);
    }
    physicistMap.get(q.physicist)!.push(idx);
  });

  const eligiblePhysicists = Array.from(physicistMap.entries())
    .filter(([_, indices]) => indices.length >= count)
    .map(([name]) => name);

  const physicistNames = eligiblePhysicists.length > 0
    ? eligiblePhysicists
    : Array.from(physicistMap.keys());

  const randomPhysicistIdx = Math.floor(Math.random() * physicistNames.length);
  const selectedPhysicist = physicistNames[randomPhysicistIdx];
  const allIndices = [...physicistMap.get(selectedPhysicist)!];

  const shuffled = allIndices.sort(() => Math.random() - 0.5);
  const result = shuffled.slice(0, count);

  while (result.length < count) {
    const randomIdx = Math.floor(Math.random() * questions.length);
    if (!result.includes(randomIdx)) {
      result.push(randomIdx);
    }
  }

  return { physicist: selectedPhysicist, indices: result };
};

export const useGameStore = create<GameState>((set, get) => {
  const initialData = getSinglePhysicistQuestions(TOTAL_ROUNDS);
  return {
  currentQuestionIndex: 0,
  score: 0,
  lives: INITIAL_LIVES,
  streak: 0,
  selectedOptionId: null,
  showResult: false,
  isCorrect: null,
  bonusEarned: false,
  gameOver: false,
  totalQuestions: TOTAL_ROUNDS,
  currentPhysicist: initialData.physicist,
  shuffledIndices: initialData.indices,
  currentQuestion: () => {
    const state = get();
    const idx = state.shuffledIndices[state.currentQuestionIndex % state.shuffledIndices.length];
    return questions[idx];
  },
  selectOption: (optionId: number) => {
    const state = get();
    const question = state.currentQuestion();
    const isCorrect = optionId === question.correctOptionId;

    let newScore = state.score;
    let newStreak = state.streak;
    let newLives = state.lives;
    let bonusEarned = false;

    if (isCorrect) {
      newScore += 1;
      newStreak += 1;
      if (newStreak > 0 && newStreak % 3 === 0) {
        newScore += 1;
        bonusEarned = true;
      }
    } else {
      newStreak = 0;
      newLives -= 1;
    }

    const isLastQuestion = state.currentQuestionIndex >= state.totalQuestions - 1;
    const gameOver = newLives <= 0 || isLastQuestion;

    set({
      selectedOptionId: optionId,
      showResult: true,
      isCorrect,
      score: newScore,
      streak: newStreak,
      lives: newLives,
      bonusEarned,
      gameOver,
    });
  },
  nextQuestion: () => {
    const state = get();
    if (state.gameOver) return;
    set({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedOptionId: null,
      showResult: false,
      isCorrect: null,
      bonusEarned: false,
    });
  },
  resetGame: () => {
    const newData = getSinglePhysicistQuestions(TOTAL_ROUNDS);
    set({
      currentQuestionIndex: 0,
      score: 0,
      lives: INITIAL_LIVES,
      streak: 0,
      selectedOptionId: null,
      showResult: false,
      isCorrect: null,
      bonusEarned: false,
      gameOver: false,
      currentPhysicist: newData.physicist,
      shuffledIndices: newData.indices,
    });
  },
  };
});
