import { useState, useEffect } from "react";
import { useSound } from "../SoundManager";

interface LoginScreenProps {
  onLogin: () => void;
  wallpaper: string;
}

const LoginScreen = ({ onLogin, wallpaper }: LoginScreenProps) => {
  const { play } = useSound();
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"typing" | "welcome">("typing");
  const [autoStarted, setAutoStarted] = useState(false);
  const [showBox, setShowBox] = useState(false);

  // Automated typing and login process
  const startAutoLogin = () => {
    if (autoStarted) return;
    setAutoStarted(true);
    let i = 0;
    const interval = setInterval(() => {
      setPassword((prev) => prev + "*");
      play("typing");
      i++;
      if (i >= 6) {
        clearInterval(interval);
        setTimeout(() => {
          setStep("welcome");
          play("success");
          setTimeout(() => {
            play("startup");
            onLogin();
          }, 1200); // was 0, now 1.2s for slower transition
        }, 800); // was 0, now 0.8s for slower welcome
      }
    }, 120);
  };

  // Show login box after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 1200); // 1.2s delay before showing box
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-end bg-black bg-opacity-90 z-50"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" }}
      onClick={startAutoLogin}
      tabIndex={0}
      onKeyDown={startAutoLogin}
    >
      {showBox && (
        <div
          className="bg-black bg-opacity-70 rounded-xl p-10 flex flex-col items-center shadow-2xl mb-32 transition-opacity duration-700"
          style={{ minWidth: 320 }}
        >
          {/* Only show the login form, no user image */}
          <div className="text-white text-2xl font-bold mb-2">User Login</div>
          <div className="w-48">
            <input
              type="password"
              value={password}
              readOnly
              className="w-full text-center text-2xl tracking-widest bg-gray-900 text-teal-300 rounded p-2 mb-4 outline-none"
              style={{ letterSpacing: "0.5em" }}
              maxLength={6}
              tabIndex={-1}
              autoFocus
            />
          </div>
          {step === "welcome" && (
            <div className="text-teal-300 text-xl font-semibold animate-fade-in mt-2">
              Welcome!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
