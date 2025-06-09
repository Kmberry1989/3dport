import { useEffect, useState } from "react";
import { useSound } from "../SoundManager";

interface LoginScreenProps {
  onLogin: () => void;
  wallpaper: string;
}

const LoginScreen = ({ onLogin, wallpaper }: LoginScreenProps) => {
  const { play } = useSound();
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"typing" | "welcome">("typing");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 6) {
        setPassword((prev) => prev + "*");
        play("click");
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStep("welcome"), 400);
        setTimeout(() => { play("success"); onLogin(); }, 1400);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onLogin, play]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" }}
    >
      <div className="bg-black bg-opacity-70 rounded-xl p-10 flex flex-col items-center shadow-2xl">
        <img src={wallpaper} alt="User" className="w-24 h-24 rounded-full mb-4 border-4 border-teal-400" />
        <div className="text-white text-2xl font-bold mb-2">User Login</div>
        <div className="w-48">
          <input
            type="password"
            value={password}
            readOnly
            className="w-full text-center text-2xl tracking-widest bg-gray-900 text-teal-300 rounded p-2 mb-4 outline-none"
            style={{ letterSpacing: "0.5em" }}
          />
        </div>
        {step === "welcome" && (
          <div className="text-teal-300 text-xl font-semibold animate-fade-in mt-2">Welcome!</div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
