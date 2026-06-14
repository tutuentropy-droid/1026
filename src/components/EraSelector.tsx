import { useGameStore } from "@/store/gameStore";
import { eraInfo, difficultyInfo, Era, Difficulty } from "@/data/questions";
import { Clock, Zap, Rocket, ArrowRight } from "lucide-react";

export default function EraSelector() {
  const { selectedEra, selectedDifficulty, selectEra, selectDifficulty, startGame } = useGameStore();

  const eras: Era[] = ["classical", "electromagnetic", "quantum"];
  const difficulties: Difficulty[] = ["easy", "hard"];

  const canStart = selectedEra !== null && selectedDifficulty !== null;

  const getEraIcon = (era: Era) => {
    switch (era) {
      case "classical":
        return <Clock className="w-8 h-8" />;
      case "electromagnetic":
        return <Zap className="w-8 h-8" />;
      case "quantum":
        return <Rocket className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream bg-dots flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-orange/5 to-transparent pointer-events-none" />

      <div className="animate-slide-up max-w-2xl w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl animate-float">⏳</span>
            <h1 className="font-display text-4xl font-bold text-deep-green">
              时间旅行模式
            </h1>
            <span className="text-4xl animate-float" style={{ animationDelay: "0.5s" }}>
              🚀
            </span>
          </div>
          <p className="font-body text-deep-green/60 text-lg">
            选择一个时代，穿越时空与物理学家们相遇
          </p>
        </div>

        <div className="mb-8">
          <h2 className="font-display text-xl font-bold text-deep-green mb-4 flex items-center gap-2">
            <span className="text-2xl">🌍</span> 选择时代板块
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eras.map((era) => {
              const info = eraInfo[era];
              const isSelected = selectedEra === era;
              return (
                <button
                  key={era}
                  onClick={() => selectEra(era)}
                  className={`relative p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? `border-warm-orange bg-gradient-to-br ${info.color} text-white shadow-xl scale-105`
                      : "border-deep-green/10 bg-white hover:border-warm-orange/30 hover:shadow-lg hover:scale-102"
                  }`}
                >
                  <div className={`mb-3 ${isSelected ? "text-white" : "text-warm-orange"}`}>
                    {getEraIcon(era)}
                  </div>
                  <div className="text-3xl mb-2">{info.emoji}</div>
                  <h3 className={`font-display text-lg font-bold mb-1 ${isSelected ? "text-white" : "text-deep-green"}`}>
                    {info.name}
                  </h3>
                  <p className={`font-body text-xs leading-relaxed ${isSelected ? "text-white/90" : "text-deep-green/50"}`}>
                    {info.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {info.physicists.map((p) => (
                      <span
                        key={p}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          isSelected ? "bg-white/20 text-white" : "bg-warm-orange/10 text-warm-orange"
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-warm-orange text-sm">✓</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-display text-xl font-bold text-deep-green mb-4 flex items-center gap-2">
            <span className="text-2xl">⚔️</span> 选择难度级别
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {difficulties.map((diff) => {
              const info = difficultyInfo[diff];
              const isSelected = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  onClick={() => selectDifficulty(diff)}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? "border-deep-green bg-gradient-to-br from-deep-green to-deep-green/80 text-white shadow-xl scale-105"
                      : "border-deep-green/10 bg-white hover:border-deep-green/30 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">
                      {diff === "easy" ? "🌱" : "🔥"}
                    </span>
                    <h3 className={`font-display text-lg font-bold ${isSelected ? "text-white" : "text-deep-green"}`}>
                      {info.name}
                    </h3>
                  </div>
                  <p className={`font-body text-sm ${isSelected ? "text-white/90" : "text-deep-green/50"}`}>
                    {info.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={startGame}
          disabled={!canStart}
          className={`w-full py-4 rounded-2xl font-display font-bold text-xl transition-all duration-300 flex items-center justify-center gap-2 ${
            canStart
              ? "bg-gradient-to-r from-warm-orange to-warm-orange/80 text-white shadow-lg shadow-warm-orange/30 hover:shadow-xl hover:scale-102 active:scale-98"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {canStart ? (
            <>
              开始时间旅行
              <ArrowRight className="w-6 h-6 animate-bounce-slow" />
            </>
          ) : (
            <>请先选择时代和难度</>
          )}
        </button>
      </div>
    </div>
  );
}
