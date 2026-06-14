import { create } from "zustand";
import { questions, Question, Era, Difficulty, eraInfo } from "@/data/questions";

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
  selectedEra: Era | null;
  selectedDifficulty: Difficulty | null;
  gameStarted: boolean;
  eraFragments: number;
  showQuoteAnimation: boolean;
  quoteAnimationPhysicist: string;
  quoteAnimationQuote: string;
  quoteAnimationPortraitPrompt: string;
  currentQuestion: () => Question;
  selectOption: (optionId: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
  selectEra: (era: Era) => void;
  selectDifficulty: (difficulty: Difficulty) => void;
  startGame: () => void;
  closeQuoteAnimation: () => void;
}

const TOTAL_ROUNDS = 5;
const INITIAL_LIVES = 3;
const FRAGMENTS_TO_TRIGGER = 3;

const getFilteredQuestions = (era: Era, difficulty: Difficulty): number[] => {
  const indices: number[] = [];
  questions.forEach((q, idx) => {
    if (q.era === era && q.difficulty === difficulty) {
      indices.push(idx);
    }
  });
  return indices;
};

const getSinglePhysicistFromFiltered = (
  filteredIndices: number[],
  count: number
): { physicist: string; indices: number[] } => {
  if (filteredIndices.length === 0) {
    const fallback = questions.map((_, i) => i);
    const shuffled = fallback.sort(() => Math.random() - 0.5);
    return { physicist: "科学家", indices: shuffled.slice(0, count) };
  }

  const physicistMap = new Map<string, number[]>();
  filteredIndices.forEach((idx) => {
    const q = questions[idx];
    if (!physicistMap.has(q.physicist)) {
      physicistMap.set(q.physicist, []);
    }
    physicistMap.get(q.physicist)!.push(idx);
  });

  const eligiblePhysicists = Array.from(physicistMap.entries())
    .filter(([_, indices]) => indices.length >= Math.min(count, 2))
    .map(([name]) => name);

  const physicistNames = eligiblePhysicists.length > 0
    ? eligiblePhysicists
    : Array.from(physicistMap.keys());

  const randomPhysicistIdx = Math.floor(Math.random() * physicistNames.length);
  const selectedPhysicist = physicistNames[randomPhysicistIdx];
  const allIndices = [...physicistMap.get(selectedPhysicist)!];

  const shuffled = allIndices.sort(() => Math.random() - 0.5);
  const result = shuffled.slice(0, Math.min(count, shuffled.length));

  while (result.length < count) {
    const randomIdx = filteredIndices[Math.floor(Math.random() * filteredIndices.length)];
    if (!result.includes(randomIdx)) {
      result.push(randomIdx);
    }
  }

  return { physicist: selectedPhysicist, indices: result };
};

export const useGameStore = create<GameState>((set, get) => {
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
    currentPhysicist: "",
    shuffledIndices: [],
    selectedEra: null,
    selectedDifficulty: null,
    gameStarted: false,
    eraFragments: 0,
    showQuoteAnimation: false,
    quoteAnimationPhysicist: "",
    quoteAnimationQuote: "",
    quoteAnimationPortraitPrompt: "",
    currentQuestion: () => {
      const state = get();
      if (state.shuffledIndices.length === 0) {
        return questions[0];
      }
      const idx = state.shuffledIndices[state.currentQuestionIndex % state.shuffledIndices.length];
      return questions[idx];
    },
    selectEra: (era: Era) => {
      set({ selectedEra: era });
    },
    selectDifficulty: (difficulty: Difficulty) => {
      set({ selectedDifficulty: difficulty });
    },
    startGame: () => {
      const state = get();
      if (!state.selectedEra || !state.selectedDifficulty) return;

      const filteredIndices = getFilteredQuestions(state.selectedEra, state.selectedDifficulty);
      const initialData = getSinglePhysicistFromFiltered(filteredIndices, TOTAL_ROUNDS);

      set({
        gameStarted: true,
        currentQuestionIndex: 0,
        score: 0,
        lives: INITIAL_LIVES,
        streak: 0,
        selectedOptionId: null,
        showResult: false,
        isCorrect: null,
        bonusEarned: false,
        gameOver: false,
        eraFragments: 0,
        showQuoteAnimation: false,
        totalQuestions: Math.min(TOTAL_ROUNDS, initialData.indices.length),
        currentPhysicist: initialData.physicist,
        shuffledIndices: initialData.indices,
      });
    },
    closeQuoteAnimation: () => {
      set({ showQuoteAnimation: false });
    },
    selectOption: (optionId: number) => {
      const state = get();
      const question = state.currentQuestion();
      const isCorrect = optionId === question.correctOptionId;

      let newScore = state.score;
      let newStreak = state.streak;
      let newLives = state.lives;
      let bonusEarned = false;
      let newFragments = state.eraFragments;
      let triggerQuoteAnimation = false;
      let quotePhysicist = "";
      let quoteText = "";
      let quotePortrait = "";

      if (isCorrect) {
        newScore += 1;
        newStreak += 1;
        if (newStreak > 0 && newStreak % 3 === 0) {
          newScore += 1;
          bonusEarned = true;
        }
        newFragments += 1;
        if (newFragments >= FRAGMENTS_TO_TRIGGER) {
          triggerQuoteAnimation = true;
          quotePhysicist = question.physicist;
          quoteText = question.famousQuote;
          quotePortrait = question.portraitPrompt;
          newFragments = 0;
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
        eraFragments: newFragments,
        showQuoteAnimation: triggerQuoteAnimation,
        quoteAnimationPhysicist: quotePhysicist,
        quoteAnimationQuote: quoteText,
        quoteAnimationPortraitPrompt: quotePortrait,
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
      set({
        gameStarted: false,
        selectedEra: null,
        selectedDifficulty: null,
        currentQuestionIndex: 0,
        score: 0,
        lives: INITIAL_LIVES,
        streak: 0,
        selectedOptionId: null,
        showResult: false,
        isCorrect: null,
        bonusEarned: false,
        gameOver: false,
        eraFragments: 0,
        showQuoteAnimation: false,
        currentPhysicist: "",
        shuffledIndices: [],
      });
    },
  };
});
