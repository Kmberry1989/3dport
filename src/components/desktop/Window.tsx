import Draggable from "react-draggable";
import { ReactNode } from "react";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Window = ({ title, onClose, children }: Props) => {
  return (
    <Draggable handle=".window-title">
      <div className="absolute top-20 left-20 w-96 bg-gray-800 border border-gray-500">
        <div className="window-title cursor-move bg-gray-700 px-2 py-1 flex justify-between items-center">
          <span>{title}</span>
          <button onClick={onClose}>X</button>
        </div>
        <div className="p-2 bg-gray-800 overflow-auto max-h-96">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
