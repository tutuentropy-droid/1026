import { useGameStore } from "@/store/gameStore";
import PhysicistPortrait from "@/components/PhysicistPortrait";
import QuestionCard from "@/components/QuestionCard";
import ResultPopup from "@/components/ResultPopup";
import ScoreCounter from "@/components/ScoreCounter";

export default function Home() {
  const { currentQuestion, showResult, currentQuestionIndex } = useGameStore();
  const question = currentQuestion();

  return (
    <div className="min-h-screen bg-cream bg-dots flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-orange/5 to-transparent pointer-events-none" />

      <div className="fixed top-6 right-6 z-40">
        <ScoreCounter />
      </div>

      <div className="game-card bg-white rounded-3xl p-8 max-w-md w-full relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-warm-orange via-gold to-warm-orange" />

        <div className="flex flex-col items-center gap-6">
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
            第 {currentQuestionIndex + 1} / 5 题
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-2xl animate-float">🔬</span>
        <span className="font-display text-sm text-deep-green/30">
          物理学家趣味问答
        </span>
        <span className="text-2xl animate-float" style={{ animationDelay: "1s" }}>
          🌍</span>
      </div>

      {showResult && <ResultPopup />}
    </div>
  );
}
