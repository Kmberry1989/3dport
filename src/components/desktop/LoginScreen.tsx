import { useState } from "react";
import { useSound } from "../SoundManager";
import userImg from "../../assets/mockups/desktop/desktop-user.png";

interface LoginScreenProps {
  onLogin: () => void;
  wallpaper: string;
}

const LoginScreen = ({ onLogin, wallpaper }: LoginScreenProps) => {
  const { play } = useSound();
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"typing" | "welcome">("typing");

  // Play typing sound on keydown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (step === "typing" && password.length < 6 && e.key.length === 1) {
      setPassword((prev) => prev + "*");
      play("typing");
    } else if (e.key === "Enter" && password.length === 6) {
      setStep("welcome");
      play("success");
      setTimeout(() => {
        play("startup");
        onLogin();
      }, 1000);
    }
  };

  // Play mouse sound on input click
  const handleClick = () => {
    play("mouse");
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 z-50"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" }}
    >
      <div className="bg-black bg-opacity-70 rounded-xl p-10 flex flex-col items-center shadow-2xl">
        <img src={userImg} alt="User" className="w-24 h-24 rounded-full mb-4 border-4 border-teal-400 bg-white object-cover" />
        <div className="text-white text-2xl font-bold mb-2">User Login</div>
        <div className="w-48">
          <input
            type="password"
            value={password}
            readOnly={false}
            className="w-full text-center text-2xl tracking-widest bg-gray-900 text-teal-300 rounded p-2 mb-4 outline-none"
            style={{ letterSpacing: "0.5em" }}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            maxLength={6}
            autoFocus
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
