import React from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
  size?: number;
  labelSize?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onDoubleClick, size = 56, labelSize = "text-xs" }) => (
  <div
    className="flex flex-col items-center cursor-pointer select-none group"
    tabIndex={0}
    onDoubleClick={onDoubleClick}
    role="button"
    aria-label={label}
    style={{ width: size + 12 }}
  >
    <div className="transition-transform group-hover:scale-110 group-active:scale-95">
      <img src={icon} alt={label} style={{ width: size, height: size }} className="drop-shadow-lg" />
    </div>
    <span className={`mt-1 text-white text-center bg-black bg-opacity-40 rounded px-1 group-hover:bg-teal-700 group-hover:text-teal-200 ${labelSize}`}>
      {label}
    </span>
  </div>
);

export default DesktopIcon;
