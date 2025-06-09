import React from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onDoubleClick }) => (
  <div
    className="flex flex-col items-center w-20 cursor-pointer select-none group"
    tabIndex={0}
    onDoubleClick={onDoubleClick}
    role="button"
    aria-label={label}
  >
    <div className="transition-transform group-hover:scale-110 group-active:scale-95">
      <img src={icon} alt={label} className="w-12 h-12 drop-shadow-lg" />
    </div>
    <span className="mt-1 text-xs text-white text-center bg-black bg-opacity-40 rounded px-1 group-hover:bg-teal-700 group-hover:text-teal-200">
      {label}
    </span>
  </div>
);

export default DesktopIcon;
