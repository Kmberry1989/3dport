import Draggable from "react-draggable";
import { ReactNode, useState, useRef, useEffect } from "react";
import { useSound } from "../SoundManager";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
  maximized?: boolean;
  showHomeButton?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

type State = "normal" | "minimized" | "maximized";

const Window = ({
  title,
  onClose,
  children,
  maximized = true,
  showHomeButton = false,
  style = {},
  onClick,
}: Props) => {
  const [state, setState] = useState<State>(maximized ? "maximized" : "normal");
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
    <Draggable handle=".window-title" disabled={true}>
      <div
        ref={windowRef}
        className={`absolute bg-gray-800 border border-gray-500 shadow-2xl rounded-lg transition-all duration-300 animate-fade-in inset-2 w-auto h-auto`}
        style={{ minWidth: 320, minHeight: 120, ...style, padding: 0 }}
        onClick={onClick}
      >
        <div className="window-title cursor-default bg-gray-700 px-2 py-1 flex justify-between items-center rounded-t-lg select-none">
          <span className="font-semibold tracking-wide">{title}</span>
          <div className="space-x-1 flex items-center">
            {showHomeButton && (
              <Link
                to="/"
                className="text-white bg-teal-700 px-2 py-1 rounded hover:bg-teal-500 font-bold ml-2"
                title="Return Home"
              >
                Home
              </Link>
            )}
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
        <div className="bg-gray-800 overflow-auto max-h-[calc(100vh-5rem)] rounded-b-lg flex-1" style={{padding: 8, minHeight: 0, minWidth: 0}}>
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
