import { useGameStore } from "@/store/gameStore";
import PhysicistPortrait from "@/components/PhysicistPortrait";
import QuestionCard from "@/components/QuestionCard";
import ResultPopup from "@/components/ResultPopup";
import ScoreCounter from "@/components/ScoreCounter";
import EraSelector from "@/components/EraSelector";
import FragmentDisplay from "@/components/FragmentDisplay";
import PhysicistQuoteAnimation from "@/components/PhysicistQuoteAnimation";
import { Sparkles, ArrowLeft } from "lucide-react";
import { eraInfo, difficultyInfo } from "@/data/questions";

export default function Home() {
  const {
    currentQuestion,
    showResult,
    currentQuestionIndex,
    totalQuestions,
    gameOver,
    currentPhysicist,
    gameStarted,
    selectedEra,
    selectedDifficulty,
    resetGame,
  } = useGameStore();

  if (!gameStarted) {
    return <EraSelector />;
  }

  const question = currentQuestion();
  const era = selectedEra ? eraInfo[selectedEra] : null;
  const difficulty = selectedDifficulty ? difficultyInfo[selectedDifficulty] : null;

  return (
    <div className="min-h-screen bg-cream bg-dots flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-orange/5 to-transparent pointer-events-none" />

      <div className="fixed top-6 right-6 z-40 flex flex-col items-end gap-2">
        <ScoreCounter />
        <FragmentDisplay />
      </div>

      <div className="fixed top-6 left-6 z-40">
        <button
          onClick={resetGame}
          className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-warm-orange/10 font-display text-sm font-bold text-deep-green/60 hover:text-deep-green hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回选择
        </button>
      </div>

      {era && difficulty && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${era.color} text-white rounded-full px-3 py-1.5 shadow-md`}>
            <span className="text-lg">{era.emoji}</span>
            <span className="font-display text-xs font-bold">{era.name}</span>
          </div>
          <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-deep-green/10">
            <span className="text-sm">{difficulty.name === "简单" ? "🌱" : "🔥"}</span>
            <span className="font-display text-xs font-bold text-deep-green">{difficulty.name}</span>
          </div>
        </div>
      )}

      <div className="game-card bg-white rounded-3xl p-8 max-w-md w-full relative mt-12">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-warm-orange via-gold to-warm-orange" />

        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-deep-green/10 via-gold/10 to-warm-orange/10 rounded-full px-5 py-2 border border-warm-orange/20">
            <Sparkles className="w-4 h-4 text-warm-orange animate-pulse" />
            <span className="font-display text-sm font-bold text-deep-green">
              本期科学家：{currentPhysicist}
            </span>
            <Sparkles className="w-4 h-4 text-warm-orange animate-pulse" />
          </div>

          <PhysicistPortrait
            physicist={question.physicist}
            portraitPrompt={question.portraitPrompt}
          />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-warm-orange/20 to-transparent" />

          <QuestionCard
            question={question.question}
            options={question.options}
            correctOptionId={question.correctOptionId}
          />
        </div>

        <div className="mt-6 text-center">
          <span className="font-body text-xs text-deep-green/30">
            第 {currentQuestionIndex + 1} / {totalQuestions} 题
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-2xl animate-float">🔬</span>
        <span className="font-display text-sm text-deep-green/30">
          物理学家趣味问答
        </span>
        <span
          className="text-2xl animate-float"
          style={{ animationDelay: "1s" }}
        >
          🌍
        </span>
      </div>

      {showResult && !gameOver && <ResultPopup />}
      {gameOver && <ResultPopup />}
      <PhysicistQuoteAnimation />
    </div>
  );
}
