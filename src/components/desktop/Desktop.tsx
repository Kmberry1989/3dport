import { useState, ReactNode } from "react";
import Window from "./Window";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Documents from "./Documents";
import Pictures from "./Pictures";
import WebBrowser from "./WebBrowser";
import { Link } from "react-router-dom";

interface DesktopIconProps {
  label: string;
  onDoubleClick: () => void;
  icon?: ReactNode;
}

const DesktopIcon = ({ label, onDoubleClick, icon }: DesktopIconProps) => (
  <button
    onDoubleClick={onDoubleClick}
    className="flex flex-col items-center w-16"
  >
    <div className="h-12 w-12 bg-gray-200/20 flex items-center justify-center rounded" >
      {icon || <span className="text-xl">📄</span>}
    </div>
    <span className="mt-1 text-xs text-center">{label}</span>
  </button>
);

interface AppState {
  minesweeper: boolean;
  solitaire: boolean;
  documents: boolean;
  pictures: boolean;
  browser: boolean;
}

const Desktop = () => {
  const [open, setOpen] = useState<AppState>({
    minesweeper: false,
    solitaire: false,
    documents: false,
    pictures: false,
    browser: false,
  });
  const [z, setZ] = useState<Record<keyof AppState, number>>({
    minesweeper: 0,
    solitaire: 0,
    documents: 0,
    pictures: 0,
    browser: 0,
  });
  const [top, setTop] = useState(1);
  const [startOpen, setStartOpen] = useState(false);

  const bringToFront = (key: keyof AppState) => {
    setZ((prev) => {
      const next = top + 1;
      setTop(next);
      return { ...prev, [key]: next };
    });
  };

  const toggle = (key: keyof AppState) => {
    setOpen((o) => ({ ...o, [key]: !o[key] }));
    bringToFront(key);
  };

  return (
    <div className="relative h-screen w-screen bg-blue-900 text-white select-none">
      <div className="absolute top-2 left-2 flex flex-col space-y-4">
        <DesktopIcon label="Minesweeper" onDoubleClick={() => toggle("minesweeper")}/>
        <DesktopIcon label="Solitaire" onDoubleClick={() => toggle("solitaire")}/>
        <DesktopIcon label="My Documents" onDoubleClick={() => toggle("documents")}/>
        <DesktopIcon label="My Pictures" onDoubleClick={() => toggle("pictures")}/>
        <DesktopIcon label="Browser" onDoubleClick={() => toggle("browser")}/>
        <Link to="/" className="underline text-sm mt-4">Back to site</Link>
      </div>
      {open.minesweeper && (
        <Window
          title="Minesweeper"
          onClose={() => toggle("minesweeper")}
          zIndex={z.minesweeper}
          onFocus={() => bringToFront("minesweeper")}
        >
          <Minesweeper />
        </Window>
      )}
      {open.solitaire && (
        <Window
          title="Solitaire"
          onClose={() => toggle("solitaire")}
          zIndex={z.solitaire}
          onFocus={() => bringToFront("solitaire")}
        >
          <Solitaire />
        </Window>
      )}
      {open.documents && (
        <Window
          title="My Documents"
          onClose={() => toggle("documents")}
          zIndex={z.documents}
          onFocus={() => bringToFront("documents")}
        >
          <Documents />
        </Window>
      )}
      {open.pictures && (
        <Window
          title="My Pictures"
          onClose={() => toggle("pictures")}
          zIndex={z.pictures}
          onFocus={() => bringToFront("pictures")}
        >
          <Pictures />
        </Window>
      )}
      {open.browser && (
        <Window
          title="Browser"
          onClose={() => toggle("browser")}
          zIndex={z.browser}
          onFocus={() => bringToFront("browser")}
        >
          <WebBrowser />
        </Window>
      )}
      {startOpen && (
        <div className="absolute bottom-10 left-0 w-40 bg-gray-800 p-2 text-sm">
          Start Menu
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-700 flex items-center">
        <button className="px-3" onClick={() => setStartOpen(!startOpen)}>
          Start
        </button>
        {Object.entries(open).map(([k, v]) =>
          v ? (
            <button
              key={k}
              className="mx-1 px-2 bg-gray-600 text-xs"
              onClick={() => bringToFront(k as keyof AppState)}
            >
              {k}
            </button>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Desktop;
