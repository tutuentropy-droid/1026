import { useGameStore } from "@/store/gameStore";
import { questions } from "@/data/questions";
import { Sparkles, RotateCcw } from "lucide-react";

export default function ResultPopup() {
  const { isCorrect, currentQuestionIndex, nextQuestion, resetGame } =
    useGameStore();

  const question = questions[currentQuestionIndex % questions.length];
  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  return (
    <div className="fixed inset-0 z-50 result-overlay bg-deep-green/20 flex items-center justify-center p-4">
      <div className="animate-pop-in bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-warm-orange via-gold to-warm-orange" />

        {isCorrect ? (
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="text-6xl">🎉</div>
              <div className="absolute -top-2 -right-2 text-2xl animate-float">⭐</div>
              <div className="absolute -bottom-1 -left-3 text-xl animate-float" style={{ animationDelay: "0.3s" }}>✨</div>
            </div>
            <h3 className="font-display text-2xl font-bold text-deep-green mb-3">
              答对啦！
            </h3>
            <div className="bg-mint rounded-2xl p-5 text-left mb-6">
              <p className="font-body text-sm text-deep-green/80 leading-relaxed">
                {question.funFact}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">😂</div>
            <h3 className="font-display text-2xl font-bold text-soft-red mb-3">
              答错啦！
            </h3>
            <div className="bg-soft-red/5 rounded-2xl p-5 text-left mb-6">
              <p className="font-body text-sm text-deep-green/80 leading-relaxed">
                {question.wrongRoast}
              </p>
            </div>
            <div className="bg-mint/50 rounded-xl p-3 text-left mb-6">
              <p className="font-body text-xs text-deep-green/60">
                💡 正确答案：<span className="font-bold text-deep-green/80">
                  {question.options.find((o) => o.id === question.correctOptionId)?.text}
                </span>
              </p>
            </div>
          </div>
        )}

        {isLastQuestion ? (
          <button
            onClick={resetGame}
            className="w-full py-3.5 rounded-2xl font-display font-bold text-lg text-white bg-gradient-to-r from-warm-orange to-warm-orange/80 hover:from-warm-orange/90 hover:to-warm-orange/70 transition-all shadow-lg shadow-warm-orange/20 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            再来一局
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="w-full py-3.5 rounded-2xl font-display font-bold text-lg text-white bg-gradient-to-r from-deep-green to-deep-green/90 hover:from-deep-green/90 hover:to-deep-green/80 transition-all shadow-lg shadow-deep-green/20 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            下一题
          </button>
        )}
      </div>
    </div>
  );
}
