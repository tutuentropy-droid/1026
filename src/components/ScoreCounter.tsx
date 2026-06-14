import { useEffect, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { questions } from "@/data/questions";
import { Star } from "lucide-react";

export default function ScoreCounter() {
  const score = useGameStore((s) => s.score);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    if (score > 0) {
      setBouncing(true);
      const timer = setTimeout(() => setBouncing(false), 400);
      return () => clearTimeout(timer);
    }
  }, [score]);

  const total = questions.length;

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-md border border-warm-orange/10">
      <Star className="w-5 h-5 text-gold fill-gold" />
      <span
        className={`font-display text-xl font-bold text-deep-green ${
          bouncing ? "animate-bounce-score" : ""
        }`}
      >
        {score}
      </span>
      <span className="font-body text-sm text-deep-green/50">/ {total}</span>
    </div>
  );
}
