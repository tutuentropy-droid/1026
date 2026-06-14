import { useGameStore } from "@/store/gameStore";
import { Option } from "@/data/questions";
import { useEffect, useState } from "react";

interface QuestionCardProps {
  question: string;
  options: Option[];
  correctOptionId: number;
}

export default function QuestionCard({ question, options, correctOptionId }: QuestionCardProps) {
  const { selectOption, showResult, selectedOptionId, isCorrect } = useGameStore();
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (showResult && !isCorrect) {
      setShaking(true);
      const timer = setTimeout(() => setShaking(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showResult, isCorrect]);

  const getOptionClass = (option: Option) => {
    if (!showResult) return "option-btn bg-white border-2 border-deep-green/10";
    if (option.id === correctOptionId) return "option-btn option-correct border-2";
    if (option.id === selectedOptionId && option.id !== correctOptionId)
      return "option-btn option-wrong border-2";
    return "option-btn bg-white/50 border-2 border-deep-green/5 opacity-50";
  };

  return (
    <div className={`w-full ${shaking ? "animate-shake-card" : ""}`}>
      <p className="font-display text-lg font-semibold text-deep-green text-center leading-relaxed mb-6">
        {question}
      </p>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => !showResult && selectOption(option.id)}
            disabled={showResult}
            className={`${getOptionClass(option)} rounded-2xl px-5 py-4 text-left font-body font-semibold text-deep-green/80 hover:text-deep-green disabled:cursor-default animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="inline-flex items-center gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-warm-orange/10 flex items-center justify-center text-sm font-bold text-warm-orange">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option.text}</span>
              {showResult && option.id === correctOptionId && (
                <span className="ml-auto text-lg">✅</span>
              )}
              {showResult &&
                option.id === selectedOptionId &&
                option.id !== correctOptionId && (
                  <span className="ml-auto text-lg">❌</span>
                )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
