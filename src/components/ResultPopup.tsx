import { useGameStore } from "@/store/gameStore";
import { Sparkles, RotateCcw, Heart, Trophy, Star } from "lucide-react";

export default function ResultPopup() {
  const {
    isCorrect,
    currentQuestionIndex,
    nextQuestion,
    resetGame,
    bonusEarned,
    streak,
    lives,
    gameOver,
    score,
    totalQuestions,
    currentQuestion,
  } = useGameStore();

  const question = currentQuestion();
  const isLastQuestion = gameOver;

  const getGameOverStats = () => {
    if (lives <= 0) {
      return {
        emoji: "💔",
        title: "生命值耗尽！",
        subtitle: "别灰心，科学家也不是一次就成功的！",
        description: `你答对了 ${score} 题，连续答题最高 ${streak} 次。\n爱迪生说过：失败也是我需要的，它和成功对我一样有价值。`,
      };
    }
    if (score >= totalQuestions) {
      return {
        emoji: "🏆",
        title: "完美通关！",
        subtitle: "你就是物理天才！所有题目全部答对！",
        description: `满分 ${score} 分！这种水平可以去给牛顿当学生了！\n下次挑战试试不看书能不能全对吧？`,
      };
    }
    if (score >= Math.ceil(totalQuestions * 0.8)) {
      return {
        emoji: "🌟",
        title: "太棒了！",
        subtitle: "你对物理学家的了解相当深入！",
        description: `得分 ${score} / ${totalQuestions}\n继续加油，争取下次满分通关！`,
      };
    }
    if (score >= Math.ceil(totalQuestions * 0.5)) {
      return {
        emoji: "👏",
        title: "不错哦！",
        subtitle: "你已经掌握了不少物理学家趣闻！",
        description: `得分 ${score} / ${totalQuestions}\n再多读几本科学家传记，就能成为物理达人！`,
      };
    }
    return {
      emoji: "📚",
      title: "继续努力！",
      subtitle: "物理学家们的故事值得细细品味～",
      description: `得分 ${score} / ${totalQuestions}\n别灰心，就连爱因斯坦小时候数学也考过不及格呢（虽然是谣言，但是鼓励一下你）！`,
    };
  };

  if (isLastQuestion) {
    const stats = getGameOverStats();
    return (
      <div className="fixed inset-0 z-50 result-overlay bg-deep-green/30 flex items-center justify-center p-4">
        <div className="animate-pop-in bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-warm-orange via-gold to-warm-orange" />

          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="text-7xl animate-bounce-slow">{stats.emoji}</div>
              <div className="absolute -top-2 -right-2 text-3xl animate-float">✨</div>
              <div className="absolute -bottom-2 -left-3 text-2xl animate-float" style={{ animationDelay: "0.3s" }}>
                🌟
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-deep-green mb-2">
              {stats.title}
            </h3>
            <p className="font-body text-sm text-warm-orange font-semibold mb-4">
              {stats.subtitle}
            </p>

            <div className="bg-mint rounded-2xl p-5 mb-6">
              <div className="flex justify-center items-center gap-6 mb-4">
                <div className="flex flex-col items-center">
                  <Trophy className="w-6 h-6 text-gold mb-1" />
                  <span className="font-display text-2xl font-bold text-deep-green">
                    {score}
                  </span>
                  <span className="font-body text-xs text-deep-green/60">
                    总分
                  </span>
                </div>
                <div className="w-px h-12 bg-deep-green/10" />
                <div className="flex flex-col items-center">
                  <Heart className="w-6 h-6 text-soft-red mb-1" />
                  <span className="font-display text-2xl font-bold text-deep-green">
                    {lives}
                  </span>
                  <span className="font-body text-xs text-deep-green/60">
                    剩余生命
                  </span>
                </div>
                <div className="w-px h-12 bg-deep-green/10" />
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-warm-orange mb-1" />
                  <span className="font-display text-2xl font-bold text-deep-green">
                    {streak}
                  </span>
                  <span className="font-body text-xs text-deep-green/60">
                    最高连击
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-deep-green/80 leading-relaxed whitespace-pre-line">
                {stats.description}
              </p>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="w-full py-3.5 rounded-2xl font-display font-bold text-lg text-white bg-gradient-to-r from-warm-orange to-warm-orange/80 hover:from-warm-orange/90 hover:to-warm-orange/70 transition-all shadow-lg shadow-warm-orange/20 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            再来一局
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 result-overlay bg-deep-green/20 flex items-center justify-center p-4">
      <div className="animate-pop-in bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-warm-orange via-gold to-warm-orange" />

        {isCorrect ? (
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="text-6xl">🎉</div>
              <div className="absolute -top-2 -right-2 text-2xl animate-float">⭐</div>
              <div
                className="absolute -bottom-1 -left-3 text-xl animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                ✨
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold text-deep-green mb-2">
              答对啦！
            </h3>

            <div className="bg-gold/10 rounded-xl px-4 py-2 mb-4 inline-block">
              <p className="font-body text-sm text-warm-orange italic font-semibold">
                「{question.catchphrase}」
              </p>
            </div>

            {bonusEarned && (
              <div className="animate-bounce-slow bg-gradient-to-r from-gold to-warm-orange rounded-xl px-4 py-2 mb-4 inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <p className="font-display text-sm font-bold text-white">
                  🎁 连击奖励！额外 +1 分！
                </p>
              </div>
            )}

            {streak >= 2 && !bonusEarned && (
              <div className="bg-warm-orange/10 rounded-xl px-4 py-2 mb-4 inline-flex items-center gap-2">
                <p className="font-display text-sm font-bold text-warm-orange">
                  🔥 连击 {streak} 次！再来 1 次获得奖励！
                </p>
              </div>
            )}

            <div className="bg-mint rounded-2xl p-5 text-left mb-6">
              <p className="font-body text-sm text-deep-green/80 leading-relaxed">
                {question.funFact}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4 animate-shake-emoji">😂</div>
            <h3 className="font-display text-2xl font-bold text-soft-red mb-2">
              答错啦！
            </h3>

            <div className="bg-soft-red/5 rounded-xl px-4 py-2 mb-4 inline-block">
              <p className="font-body text-sm text-warm-orange italic font-semibold">
                「{question.catchphrase}」
              </p>
            </div>

            {lives > 0 && (
              <div className="bg-soft-red/10 rounded-xl px-4 py-2 mb-4 inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-soft-red" />
                <p className="font-display text-sm font-bold text-soft-red">
                  💔 生命值 -1，还剩 {lives} 条命！
                </p>
              </div>
            )}

            <div className="bg-soft-red/5 rounded-2xl p-5 text-left mb-6">
              <p className="font-body text-sm text-deep-green/80 leading-relaxed">
                {question.wrongRoast}
              </p>
            </div>
            <div className="bg-mint/50 rounded-xl p-3 text-left mb-6">
              <p className="font-body text-xs text-deep-green/60">
                💡 正确答案：
                <span className="font-bold text-deep-green/80">
                  {question.options.find((o) => o.id === question.correctOptionId)?.text}
                </span>
              </p>
            </div>
          </div>
        )}

        <button
          onClick={nextQuestion}
          className="w-full py-3.5 rounded-2xl font-display font-bold text-lg text-white bg-gradient-to-r from-deep-green to-deep-green/90 hover:from-deep-green/90 hover:to-deep-green/80 transition-all shadow-lg shadow-deep-green/20 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          下一题
        </button>
      </div>
    </div>
  );
}
