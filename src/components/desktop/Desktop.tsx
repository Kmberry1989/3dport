import { useState, ReactNode } from "react";
import Window from "./Window";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Documents from "./Documents";
import Pictures from "./Pictures";
import WebBrowser from "./WebBrowser";
import Pinball from "./Pinball";
import Mahjong from "./Mahjong";
import PipeDream from "./PipeDream";
import JezzBall from "./JezzBall";
import PaintApp from "./PaintApp";
import Hearts from "./Hearts";
import SkiFree from "./SkiFree";
import Notepad from "./Notepad";
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
  pinball: boolean;
  mahjong: boolean;
  pipedream: boolean;
  jezzball: boolean;
  paint: boolean;
  hearts: boolean;
  skifree: boolean;
  notepad: boolean;
}

const Desktop = () => {
  const [open, setOpen] = useState<AppState>({
    minesweeper: false,
    solitaire: false,
    documents: false,
    pictures: false,
    browser: false,
    pinball: false,
    mahjong: false,
    pipedream: false,
    jezzball: false,
    paint: false,
    hearts: false,
    skifree: false,
    notepad: false,
  });
  const [z, setZ] = useState<Record<keyof AppState, number>>({
    minesweeper: 0,
    solitaire: 0,
    documents: 0,
    pictures: 0,
    browser: 0,
    pinball: 0,
    mahjong: 0,
    pipedream: 0,
    jezzball: 0,
    paint: 0,
    hearts: 0,
    skifree: 0,
    notepad: 0,
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
        <DesktopIcon label="Minesweeper" icon={<span>💣</span>} onDoubleClick={() => toggle("minesweeper")}/>
        <DesktopIcon label="Solitaire" icon={<span>🃏</span>} onDoubleClick={() => toggle("solitaire")}/>
        <DesktopIcon label="My Documents" icon={<span>📄</span>} onDoubleClick={() => toggle("documents")}/>
        <DesktopIcon label="My Pictures" icon={<span>📷</span>} onDoubleClick={() => toggle("pictures")}/>
        <DesktopIcon label="Browser" icon={<span>🌐</span>} onDoubleClick={() => toggle("browser")}/>
        <DesktopIcon label="Pinball" icon={<span>🎰</span>} onDoubleClick={() => toggle("pinball")}/>
        <DesktopIcon label="Mahjong" icon={<span>🀄</span>} onDoubleClick={() => toggle("mahjong")}/>
        <DesktopIcon label="Pipe Dream" icon={<span>🛠️</span>} onDoubleClick={() => toggle("pipedream")}/>
        <DesktopIcon label="JezzBall" icon={<span>⚽</span>} onDoubleClick={() => toggle("jezzball")}/>
        <DesktopIcon label="Paint" icon={<span>🎨</span>} onDoubleClick={() => toggle("paint")}/>
        <DesktopIcon label="Hearts" icon={<span>♥</span>} onDoubleClick={() => toggle("hearts")}/>
        <DesktopIcon label="SkiFree" icon={<span>⛷️</span>} onDoubleClick={() => toggle("skifree")}/>
        <DesktopIcon label="Notepad" icon={<span>📝</span>} onDoubleClick={() => toggle("notepad")}/>
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
      {open.pinball && (
        <Window
          title="3D Pinball"
          onClose={() => toggle("pinball")}
          zIndex={z.pinball}
          onFocus={() => bringToFront("pinball")}
        >
          <Pinball />
        </Window>
      )}
      {open.mahjong && (
        <Window
          title="Mahjong"
          onClose={() => toggle("mahjong")}
          zIndex={z.mahjong}
          onFocus={() => bringToFront("mahjong")}
        >
          <Mahjong />
        </Window>
      )}
      {open.pipedream && (
        <Window
          title="Pipe Dream"
          onClose={() => toggle("pipedream")}
          zIndex={z.pipedream}
          onFocus={() => bringToFront("pipedream")}
        >
          <PipeDream />
        </Window>
      )}
      {open.jezzball && (
        <Window
          title="JezzBall"
          onClose={() => toggle("jezzball")}
          zIndex={z.jezzball}
          onFocus={() => bringToFront("jezzball")}
        >
          <JezzBall />
        </Window>
      )}
      {open.paint && (
        <Window
          title="Paint"
          onClose={() => toggle("paint")}
          zIndex={z.paint}
          onFocus={() => bringToFront("paint")}
        >
          <PaintApp />
        </Window>
      )}
      {open.hearts && (
        <Window
          title="Hearts"
          onClose={() => toggle("hearts")}
          zIndex={z.hearts}
          onFocus={() => bringToFront("hearts")}
        >
          <Hearts />
        </Window>
      )}
      {open.skifree && (
        <Window
          title="SkiFree"
          onClose={() => toggle("skifree")}
          zIndex={z.skifree}
          onFocus={() => bringToFront("skifree")}
        >
          <SkiFree />
        </Window>
      )}
      {open.notepad && (
        <Window
          title="Notepad"
          onClose={() => toggle("notepad")}
          zIndex={z.notepad}
          onFocus={() => bringToFront("notepad")}
        >
          <Notepad />
        </Window>
      )}
      {startOpen && (
        <div className="absolute bottom-10 left-0 w-40 bg-gray-800 p-2 text-sm">
          <div className="space-y-1">
            <button className="block w-full text-left" onClick={() => {toggle("minesweeper");setStartOpen(false);}}>Minesweeper</button>
            <button className="block w-full text-left" onClick={() => {toggle("solitaire");setStartOpen(false);}}>Solitaire</button>
            <button className="block w-full text-left" onClick={() => {toggle("pinball");setStartOpen(false);}}>3D Pinball</button>
            <button className="block w-full text-left" onClick={() => {toggle("mahjong");setStartOpen(false);}}>Mahjong</button>
            <button className="block w-full text-left" onClick={() => {toggle("pipedream");setStartOpen(false);}}>Pipe Dream</button>
            <button className="block w-full text-left" onClick={() => {toggle("jezzball");setStartOpen(false);}}>JezzBall</button>
            <button className="block w-full text-left" onClick={() => {toggle("paint");setStartOpen(false);}}>Paint</button>
            <button className="block w-full text-left" onClick={() => {toggle("hearts");setStartOpen(false);}}>Hearts</button>
            <button className="block w-full text-left" onClick={() => {toggle("skifree");setStartOpen(false);}}>SkiFree</button>
            <button className="block w-full text-left" onClick={() => {toggle("notepad");setStartOpen(false);}}>Notepad</button>
            <button className="block w-full text-left" onClick={() => {toggle("documents");setStartOpen(false);}}>My Documents</button>
            <button className="block w-full text-left" onClick={() => {toggle("pictures");setStartOpen(false);}}>My Pictures</button>
            <button className="block w-full text-left" onClick={() => {toggle("browser");setStartOpen(false);}}>Browser</button>
          </div>
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
              onDoubleClick={() => toggle(k as keyof AppState)}
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
