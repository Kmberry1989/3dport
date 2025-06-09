import { useState } from "react";
import Window from "./Window";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Documents from "./Documents";
import Pictures from "./Pictures";
import WebBrowser from "./WebBrowser";
import { Link } from "react-router-dom";

const loginScreen = new URL("../../assets/mockups/desktop screens/desktop-userlogin.png", import.meta.url).href;
const iconPC = new URL("../../assets/mockups/desktop icons/icon-thispc.PNG", import.meta.url).href;
const iconDocs = new URL("../../assets/mockups/desktop icons/icon-documents.PNG", import.meta.url).href;
const iconPics = new URL("../../assets/mockups/desktop icons/icon-pictures.PNG", import.meta.url).href;
const corkboard = new URL("../../assets/mockups/corkboard.png", import.meta.url).href;
const iconVideos = new URL("../../assets/mockups/desktop icons/icon-videos.PNG", import.meta.url).href;
const iconSolitaire = new URL("../../assets/mockups/desktop icons/icon-solitaire.png", import.meta.url).href;
const iconMines = new URL("../../assets/mockups/desktop icons/icon-minesweeper.png", import.meta.url).href;
const iconContacts = new URL("../../assets/mockups/desktop icons/icon-contacts.PNG", import.meta.url).href;
const iconRecycle = new URL("../../assets/mockups/desktop icons/icon-recyclebin.png", import.meta.url).href;
const pinBlue = new URL("../../assets/pushpin/pushpin-blue.png", import.meta.url).href;
const pinRed = new URL("../../assets/pushpin/pushpin-red.png", import.meta.url).href;

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

  const [stage, setStage] = useState<'login' | 'desktop'>('login');

  const toggle = (key: keyof AppState) =>
    setOpen((o) => ({ ...o, [key]: !o[key] }));

  const icons = [
    { name: "This PC", img: iconPC, onClick: () => toggle("documents") },
    { name: "Documents", img: iconDocs, onClick: () => toggle("documents") },
    { name: "Pictures", img: iconPics, onClick: () => toggle("pictures") },
    { name: "Videos", img: iconVideos, onClick: () => toggle("browser") },
    { name: "Solitaire", img: iconSolitaire, onClick: () => toggle("solitaire") },
    { name: "Minesweeper", img: iconMines, onClick: () => toggle("minesweeper") },
    { name: "Contacts", img: iconContacts, onClick: () => toggle("browser") },
    { name: "Recycle Bin", img: iconRecycle, onClick: () => {} },
  ];

  return (
    <div className="relative h-screen w-screen text-white select-none">
      {stage === 'login' && (
        <img
          src={loginScreen}
          alt="login"
          className="absolute inset-0 h-full w-full object-cover cursor-pointer"
          onClick={() => setStage('desktop')}
        />
      )}
      {stage === 'desktop' && (
        <>
          <img
            src={corkboard}
            alt="wallpaper"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img src={pinBlue} className="absolute left-2 top-2 w-6" />
          <img src={pinRed} className="absolute right-2 bottom-2 w-6" />
          <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 text-xs pointer-events-auto">
            {icons.map((ic) => (
              <button key={ic.name} onClick={ic.onClick} className="flex flex-col items-center hover:opacity-80">
                <img src={ic.img} alt={ic.name} className="h-12 w-12" />
                <span>{ic.name}</span>
              </button>
            ))}
            <Link to="/" className="flex flex-col items-center hover:opacity-80">
              <img src={iconPC} alt="Back" className="h-12 w-12" />
              <span>Back</span>
            </Link>
          </div>
          {open.minesweeper && (
            <Window
              title="Minesweeper"
              onClose={() => toggle("minesweeper")}
              width="20rem"
              height="20rem"
            >
              <Minesweeper />
            </Window>
          )}
          {open.solitaire && (
            <Window
              title="Solitaire"
              onClose={() => toggle("solitaire")}
              width="40rem"
              height="32rem"
            >
              <Solitaire />
            </Window>
          )}
          {open.documents && (
            <Window
              title="My Documents"
              onClose={() => toggle("documents")}
              width="20rem"
              height="16rem"
            >
              <Documents />
            </Window>
          )}
          {open.pictures && (
            <Window
              title="My Pictures"
              onClose={() => toggle("pictures")}
              width="24rem"
              height="20rem"
            >
              <Pictures />
            </Window>
          )}
          {open.browser && (
            <Window
              title="Browser"
              onClose={() => toggle("browser")}
              width="28rem"
              height="30rem"
            >
              <WebBrowser />
            </Window>
          )}
        </>
      )}
    </div>
  );
};

export default Desktop;
