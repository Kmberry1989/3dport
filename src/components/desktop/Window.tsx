import Draggable from "react-draggable";
import { ReactNode, useState } from "react";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
}

type State = "normal" | "minimized" | "maximized";

const Window = ({ title, onClose, children, width, height }: Props) => {
  const [state, setState] = useState<State>("normal");

  if (state === "minimized") {
    return (
      <div className="absolute bottom-2 left-2 z-50 bg-gray-700 px-2 py-1 flex items-center space-x-2 text-xs">
        <span>{title}</span>
        <button
          onClick={() => setState("normal")}
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
        className={`absolute bg-gray-800 border border-gray-500 ${
          state === "maximized" ? "inset-2" : "top-20 left-20"
        }`}
        style={{ width, height, maxWidth: '80vw', maxHeight: '80vh' }}
      >
        <div className="window-title cursor-move bg-gray-700 px-2 py-1 flex justify-between items-center">
          <span>{title}</span>
          <div className="space-x-1">
            <button onClick={() => setState("minimized")}>_</button>
            <button
              onClick={() =>
                setState(state === "maximized" ? "normal" : "maximized")
              }
            >
              {state === "maximized" ? "🗗" : "□"}
            </button>
            <button onClick={onClose}>X</button>
          </div>
        </div>
        <div className="p-2 bg-gray-800 overflow-auto h-full">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
