import { useEffect, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { Gem } from "lucide-react";

export default function FragmentDisplay() {
  const eraFragments = useGameStore((s) => s.eraFragments);
  const selectedEra = useGameStore((s) => s.selectedEra);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [prevFragments, setPrevFragments] = useState(0);

  useEffect(() => {
    if (eraFragments > prevFragments && eraFragments > 0) {
      setAnimatingIndex(eraFragments - 1);
      const timer = setTimeout(() => setAnimatingIndex(null), 800);
      return () => clearTimeout(timer);
    }
    setPrevFragments(eraFragments);
  }, [eraFragments, prevFragments]);

  const getFragmentColor = () => {
    switch (selectedEra) {
      case "classical":
        return "from-amber-400 to-orange-500";
      case "electromagnetic":
        return "from-blue-400 to-purple-500";
      case "quantum":
        return "from-emerald-400 to-teal-500";
      default:
        return "from-warm-orange to-gold";
    }
  };

  const totalSlots = 3;

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-body text-xs text-deep-green/50 font-bold">时代碎片</span>
      <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-warm-orange/10">
        {Array.from({ length: totalSlots }).map((_, i) => {
          const isFilled = i < eraFragments;
          const isAnimating = animatingIndex === i;
          return (
            <div
              key={i}
              className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                isFilled
                  ? `bg-gradient-to-br ${getFragmentColor()} ${isAnimating ? "animate-fragment-pop" : ""}`
                  : "bg-gray-100 border border-gray-200"
              }`}
            >
              {isFilled ? (
                <Gem className="w-3.5 h-3.5 text-white fill-white" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              )}
              {isAnimating && (
                <>
                  <span className="absolute inset-0 rounded-full animate-fragment-ring bg-gold/40" />
                  <span className="absolute -top-1 -right-1 text-sm animate-sparkle">✨</span>
                </>
              )}
            </div>
          );
        })}
      </div>
      {eraFragments === 2 && (
        <span className="font-body text-xs text-warm-orange font-bold animate-pulse">
          再答对 1 题触发特效！
        </span>
      )}
    </div>
  );
}
