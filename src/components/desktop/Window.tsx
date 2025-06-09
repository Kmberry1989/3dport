import Draggable from "react-draggable";
import { ReactNode, useState, useRef, useEffect } from "react";
import { useSound } from "../SoundManager";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

type State = "normal" | "minimized" | "maximized";

const Window = ({ title, onClose, children }: Props) => {
  const [state, setState] = useState<State>("normal");
  const { play } = useSound();
  const windowRef = useRef<HTMLDivElement>(null);

  // Bring window to front on click
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const onClick = () => {
      el.style.zIndex = String(Date.now());
    };
    el.addEventListener("mousedown", onClick);
    return () => el.removeEventListener("mousedown", onClick);
  }, []);

  if (state === "minimized") {
    return (
      <div className="absolute bottom-2 left-2 z-50 bg-gray-700 px-2 py-1 flex items-center space-x-2 text-xs animate-fade-in">
        <span>{title}</span>
        <button
          onClick={() => {
            setState("normal");
            play("open");
          }}
          className="border border-gray-500 px-1"
        >
          Restore
        </button>
      </div>
    );
  }

  return (
    <Draggable handle=".window-title" disabled={state === "maximized"}>
      <div
        ref={windowRef}
        className={`absolute bg-gray-800 border border-gray-500 shadow-2xl rounded-lg transition-all duration-300 animate-fade-in ${
          {
            normal: "top-20 left-20 w-96",
            maximized: "inset-2 w-auto h-auto",
          }[state]
        }`}
        style={{ minWidth: 320, minHeight: 120 }}
      >
        <div className="window-title cursor-move bg-gray-700 px-2 py-1 flex justify-between items-center rounded-t-lg select-none">
          <span className="font-semibold tracking-wide">{title}</span>
          <div className="space-x-1">
            <button
              onClick={() => {
                setState("minimized");
                play("close");
              }}
              title="Minimize"
            >
              _
            </button>
            <button
              onClick={() => {
                setState(state === "maximized" ? "normal" : "maximized");
                play("open");
              }}
              title={state === "maximized" ? "Restore" : "Maximize"}
            >
              {state === "maximized" ? "🗗" : "□"}
            </button>
            <button
              onClick={() => {
                onClose();
                play("close");
              }}
              title="Close"
            >
              X
            </button>
          </div>
        </div>
        <div className="p-2 bg-gray-800 overflow-auto max-h-[32rem] rounded-b-lg">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
