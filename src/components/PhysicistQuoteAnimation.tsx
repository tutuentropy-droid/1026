import { useEffect, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { X } from "lucide-react";

const getPhysicistEmoji = (name: string) => {
  switch (name) {
    case "牛顿":
      return "🍎";
    case "爱因斯坦":
      return "⚛️";
    case "阿基米德":
      return "🛁";
    case "伽利略":
      return "🔭";
    case "法拉第":
      return "🧲";
    case "居里夫人":
      return "☢️";
    case "特斯拉":
      return "⚡";
    default:
      return "🔬";
  }
};

export default function PhysicistQuoteAnimation() {
  const {
    showQuoteAnimation,
    quoteAnimationPhysicist,
    quoteAnimationQuote,
    quoteAnimationPortraitPrompt,
    closeQuoteAnimation,
  } = useGameStore();

  const [imageUrl, setImageUrl] = useState("");
  const [phase, setPhase] = useState<"enter" | "speaking" | "idle">("enter");

  useEffect(() => {
    if (showQuoteAnimation) {
      setPhase("enter");
      const encodedPrompt = encodeURIComponent(quoteAnimationPortraitPrompt);
      setImageUrl(
        `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=square_hd`
      );
      const timer = setTimeout(() => setPhase("speaking"), 600);
      return () => clearTimeout(timer);
    }
  }, [showQuoteAnimation, quoteAnimationPortraitPrompt]);

  useEffect(() => {
    if (showQuoteAnimation) {
      const timer = setTimeout(() => {
        closeQuoteAnimation();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [showQuoteAnimation, closeQuoteAnimation]);

  if (!showQuoteAnimation) return null;

  const emoji = getPhysicistEmoji(quoteAnimationPhysicist);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-deep-green/40 backdrop-blur-sm animate-fade-in" />

      <div className="relative pointer-events-auto">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2">
          {["✨", "⭐", "🌟", "💫", "✨"].map((s, i) => (
            <span
              key={i}
              className="text-2xl animate-confetti-fall"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className={`relative ${phase === "enter" ? "animate-physicist-jump" : "animate-physicist-idle"}`}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gold via-warm-orange to-gold opacity-30 animate-pulse" />
            <div className="relative portrait-ring-physicist w-40 h-40 mx-auto rounded-full overflow-hidden bg-white shadow-2xl">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={quoteAnimationPhysicist}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-warm-orange/20 to-gold/20">
                <span className="text-6xl animate-shake-vigor">{emoji}</span>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 text-4xl animate-float">
              ✨
            </div>
            <div
              className="absolute -bottom-2 -left-3 text-3xl animate-float"
              style={{ animationDelay: "0.3s" }}
            >
              🌟
            </div>
          </div>

          <div className={`mt-6 max-w-sm mx-auto ${phase === "speaking" ? "animate-speech-bubble" : "opacity-0"}`}>
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border-2 border-warm-orange/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-warm-orange/30 rotate-45" />

              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-deep-green mb-3">
                  {quoteAnimationPhysicist}
                </h3>
                <div className="relative">
                  <span className="absolute -left-2 -top-2 text-3xl text-gold font-serif">"</span>
                  <p className="font-body text-lg text-deep-green/80 italic leading-relaxed px-4 py-2">
                    {quoteAnimationQuote}
                  </p>
                  <span className="absolute -right-2 -bottom-4 text-3xl text-gold font-serif">"</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
            {["💥", "⚡", "✨", "💥", "⚡"].map((s, i) => (
              <span
                key={i}
                className="text-lg animate-sparkle"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={closeQuoteAnimation}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-deep-green hover:bg-soft-red hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
