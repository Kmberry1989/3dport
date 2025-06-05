import { ReactNode } from "react";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
  zIndex: number;
  onFocus: () => void;
}

const Window = ({ title, onClose, children, zIndex, onFocus }: Props) => {
  return (
    <div
      className="absolute inset-0 flex flex-col bg-gray-800 border border-gray-500"
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      <div className="window-title bg-gray-700 px-2 py-1 flex justify-between items-center">
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="flex-1 overflow-auto p-2 bg-gray-800">{children}</div>
    </div>
  );
};

export default Window;
