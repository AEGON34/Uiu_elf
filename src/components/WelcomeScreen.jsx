import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import welcomeAnim from "../assets/lottie/Welcome.lottie";
import celebrationAnim from "../assets/lottie/Celebration.lottie";

const WelcomeScreen = ({ children }) => {
  const [stage, setStage] = useState("loading"); // 'loading' | 'welcome' | 'finished'
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check session storage immediately on mount
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSplash(false);
      return;
    }

    // Phase 1: Loading Sequence (1.5s)
    const loadingTimer = setTimeout(() => {
      setStage("welcome");
    }, 2700);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (stage === "welcome") {
      // Phase 2: Welcome & Celebration (5.5s duration estimate)
      // We use a safe timer to ensure transition happens even if onComplete doesn't fire perfectly
      const welcomeTimer = setTimeout(() => {
        setStage("finished");
        // Phase 3: Reveal Home - Wait for CSS transition (1000ms) to complete
        setTimeout(() => {
          setShowSplash(false);
          sessionStorage.setItem("hasSeenSplash", "true");
          window.dispatchEvent(new Event("splashFinished"));
        }, 1100); // slightly longer than transition duration
      }, 5500);
      return () => clearTimeout(welcomeTimer);
    }
  }, [stage]);

  if (!showSplash) return <>{children}</>;

  return (
    <>
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-1000 ease-in-out ${stage === "finished" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {/* Phase 1: Bouncing Pulse Loader */}
        {stage === "loading" && (
          <div className="flex flex-col items-center justify-center animate-pulse">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white border-4 border-[#ec4622] rounded-full shadow-[0_0_15px_rgba(236,70,34,0.5)] animate-bounce">
              <span className="text-[#ec4622] font-bold text-2xl md:text-3xl tracking-tighter">
                UIU
                <span className="text-gray-900 font-bold text-2xl md:text-3xl tracking-tighter">
                  ELF
                </span>
              </span>
            </div>
            <span className="mt-6 text-gray-400 font-medium tracking-widest text-sm uppercase animate-pulse">
              Loading...
            </span>
          </div>
        )}

        {/* Phase 2: Lottie Animations */}
        {stage === "welcome" && (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Celebration (Confetti) */}
            <div className="absolute inset-0 z-0 scale-150 opacity-40">
              <DotLottieReact src={celebrationAnim} autoplay loop={false} />
            </div>

            {/* Foreground Welcome */}
            <div className="relative z-10 w-full max-w-lg px-6 animate-fade-in-up">
              <DotLottieReact src={welcomeAnim} autoplay loop={false} />
            </div>
          </div>
        )}
      </div>

      {/* Render the website content (will be revealed when splash opacity goes to 0) */}
      {children}
    </>
  );
};

export default WelcomeScreen;
