import { useState } from "react";
import Window from "./Window";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Documents from "./Documents";
import Pictures from "./Pictures";
import WebBrowser from "./WebBrowser";
import { Link } from "react-router-dom";

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

  const toggle = (key: keyof AppState) =>
    setOpen((o) => ({ ...o, [key]: !o[key] }));

  return (
    <div className="relative h-screen w-screen bg-blue-900 text-white select-none">
      <div className="p-4 space-x-4">
        <button onClick={() => toggle("minesweeper")}>Minesweeper</button>
        <button onClick={() => toggle("solitaire")}>Solitaire</button>
        <button onClick={() => toggle("documents")}>My Documents</button>
        <button onClick={() => toggle("pictures")}>My Pictures</button>
        <button onClick={() => toggle("browser")}>Browser</button>
        <Link to="/" className="ml-4 underline">
          Back to site
        </Link>
      </div>
      {open.minesweeper && (
        <Window title="Minesweeper" onClose={() => toggle("minesweeper")}> 
          <Minesweeper />
        </Window>
      )}
      {open.solitaire && (
        <Window title="Solitaire" onClose={() => toggle("solitaire")}> 
          <Solitaire />
        </Window>
      )}
      {open.documents && (
        <Window title="My Documents" onClose={() => toggle("documents")}> 
          <Documents />
        </Window>
      )}
      {open.pictures && (
        <Window title="My Pictures" onClose={() => toggle("pictures")}> 
          <Pictures />
        </Window>
      )}
      {open.browser && (
        <Window title="Browser" onClose={() => toggle("browser")}> 
          <WebBrowser />
        </Window>
      )}
    </div>
  );
};

export default Desktop;
