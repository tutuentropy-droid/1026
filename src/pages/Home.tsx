import { useGameStore } from "@/store/gameStore";
import PhysicistPortrait from "@/components/PhysicistPortrait";
import QuestionCard from "@/components/QuestionCard";
import ResultPopup from "@/components/ResultPopup";
import ScoreCounter from "@/components/ScoreCounter";
import { Sparkles } from "lucide-react";

export default function Home() {
  const { currentQuestion, showResult, currentQuestionIndex, totalQuestions, gameOver, currentPhysicist } =
    useGameStore();
  const question = currentQuestion();

  return (
    <div className="min-h-screen bg-cream bg-dots flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-orange/5 to-transparent pointer-events-none" />

      <div className="fixed top-6 right-6 z-40">
        <ScoreCounter />
      </div>

      <div className="game-card bg-white rounded-3xl p-8 max-w-md w-full relative">
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
    </div>
  );
}
