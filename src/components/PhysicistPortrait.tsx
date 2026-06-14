import { useEffect, useState } from "react";

interface PhysicistPortraitProps {
  physicist: string;
  portraitPrompt: string;
}

export default function PhysicistPortrait({ physicist, portraitPrompt }: PhysicistPortraitProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [appleVisible, setAppleVisible] = useState(false);
  const [floatKey, setFloatKey] = useState(0);

  useEffect(() => {
    setAppleVisible(false);
    setFloatKey((k) => k + 1);
    const encodedPrompt = encodeURIComponent(portraitPrompt);
    setImageUrl(
      `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=square_hd`
    );
    const timer = setTimeout(() => setAppleVisible(true), 300);
    return () => clearTimeout(timer);
  }, [portraitPrompt]);

  return (
    <div className="relative flex flex-col items-center" key={floatKey}>
      <div className="absolute -top-4 -right-2 text-3xl">
        {appleVisible && (
          <span className="inline-block animate-apple-fall">🍎</span>
        )}
      </div>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <span className="text-2xl animate-float" style={{ animationDelay: "0.5s" }}>
          ✨
        </span>
      </div>
      <div className="portrait-ring">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-cream">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={physicist}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML =
                  `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-warm-orange/20 to-gold/20">
                    <span class="text-5xl">${physicist === "牛顿" ? "🔬" : physicist === "爱因斯坦" ? "⚛️" : physicist === "阿基米德" ? "🛁" : physicist === "伽利略" ? "🔭" : "⚡"}</span>
                  </div>`;
              }}
            />
          )}
        </div>
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold text-deep-green">
        {physicist}
      </h2>
    </div>
  );
}
