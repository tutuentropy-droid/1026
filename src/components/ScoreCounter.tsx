import { useEffect, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { Star, Heart, Zap } from "lucide-react";

export default function ScoreCounter() {
  const score = useGameStore((s) => s.score);
  const lives = useGameStore((s) => s.lives);
  const streak = useGameStore((s) => s.streak);
  const [bouncing, setBouncing] = useState(false);
  const [heartShaking, setHeartShaking] = useState(false);
  const [prevLives, setPrevLives] = useState(lives);
  const [streakBouncing, setStreakBouncing] = useState(false);

  useEffect(() => {
    if (score > 0) {
      setBouncing(true);
      const timer = setTimeout(() => setBouncing(false), 400);
      return () => clearTimeout(timer);
    }
  }, [score]);

  useEffect(() => {
    if (lives < prevLives && prevLives > 0) {
      setHeartShaking(true);
      const timer = setTimeout(() => setHeartShaking(false), 500);
      return () => clearTimeout(timer);
    }
    setPrevLives(lives);
  }, [lives, prevLives]);

  useEffect(() => {
    if (streak > 0 && streak % 3 === 0) {
      setStreakBouncing(true);
      const timer = setTimeout(() => setStreakBouncing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [streak]);

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 3; i++) {
      hearts.push(
        <Heart
          key={i}
          className={`w-4 h-4 transition-all duration-300 ${
            i < lives
              ? "text-soft-red fill-soft-red"
              : "text-gray-300"
          }`}
        />
      );
    }
    return hearts;
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-md border border-warm-orange/10">
        <Star className="w-5 h-5 text-gold fill-gold" />
        <span
          className={`font-display text-xl font-bold text-deep-green ${
            bouncing ? "animate-bounce-score" : ""
          }`}
        >
          {score}
        </span>
      </div>

      <div
        className={`flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-soft-red/10 ${
          heartShaking ? "animate-shake-hearts" : ""
        }`}
      >
        {renderHearts()}
      </div>

      {streak >= 2 && (
        <div
          className={`flex items-center gap-1.5 bg-gradient-to-r from-gold/90 to-warm-orange/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md border border-gold/30 ${
            streakBouncing ? "animate-bounce-streak" : ""
          }`}
        >
          <Zap className="w-4 h-4 text-white fill-white" />
          <span className="font-display text-sm font-bold text-white">
            连击 x{streak}
          </span>
        </div>
      )}
    </div>
  );
}
