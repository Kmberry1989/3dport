import { useEffect, useState, useRef } from "react";
import Window from "./Window";
import staticLoginImg from "../../assets/mockups/desktop/desktop-userlogin.jpg";
import wallpaper from "../../assets/mockups/desktop/desktop-wallpaper.jpg";
import userIcon from "../../assets/mockups/desktop/desktop-userlogin.jpg";
import DesktopIcon from "./DesktopIcon";
import iconCalculator from "../../assets/mockups/desktop icons/icon-calculator.PNG?url";
import iconContacts from "../../assets/mockups/desktop icons/icon-contacts.PNG?url";
import iconDocuments from "../../assets/mockups/desktop icons/icon-documents.PNG?url";
import iconEmail from "../../assets/mockups/desktop icons/icon-email.png?url";
import iconBrowser from "../../assets/mockups/desktop icons/icon-browser.PNG?url";
import iconMinesweeper from "../../assets/mockups/desktop icons/icon-minesweeper.png?url";
import iconNotepad from "../../assets/mockups/desktop icons/icon-notepad.PNG?url";
import iconPaint from "../../assets/mockups/desktop icons/icon-paint.png?url";
import iconPictures from "../../assets/mockups/desktop icons/icon-pictures.PNG?url";
import iconPrinter from "../../assets/mockups/desktop icons/icon-printer.png?url";
import iconRecycle from "../../assets/mockups/desktop icons/icon-recyclebin.png?url";
import iconSolitaire from "../../assets/mockups/desktop icons/icon-solitaire.png?url";
import iconThisPC from "../../assets/mockups/desktop icons/icon-thispc.PNG?url";
import iconVideos from "../../assets/mockups/desktop icons/icon-videos.PNG?url";
import Calculator from "./Calculator";
import Contacts from "./Contacts";
import Notepad from "./Notepad";
import Paint from "./Paint";
import ThisPC from "./ThisPC";
import Videos from "./Videos";
import RecycleBin from "./RecycleBin";
import LoginScreen from "./LoginScreen";
import Documents from "./Documents";
import WebBrowser from "./WebBrowser";
import Minesweeper from "./Minesweeper";
import Pictures from "./Pictures";
import Solitaire from "./Solitaire";

interface AppState {
  calculator: boolean;
  contacts: boolean;
  documents: boolean;
  email: boolean;
  browser: boolean;
  minesweeper: boolean;
  notepad: boolean;
  paint: boolean;
  pictures: boolean;
  print: boolean;
  recycle: boolean;
  solitaire: boolean;
  thispc: boolean;
  videos: boolean;
}

const ICONS = [
  { key: "calculator", label: "Calculator", icon: iconCalculator },
  { key: "contacts", label: "Contacts", icon: iconContacts },
  { key: "documents", label: "Documents", icon: iconDocuments },
  { key: "email", label: "E-mail", icon: iconEmail },
  { key: "browser", label: "Web Browser", icon: iconBrowser },
  { key: "minesweeper", label: "Minesweeper", icon: iconMinesweeper },
  { key: "notepad", label: "Notepad", icon: iconNotepad },
  { key: "paint", label: "Paint", icon: iconPaint },
  { key: "pictures", label: "Pictures", icon: iconPictures },
  { key: "print", label: "Print", icon: iconPrinter },
  { key: "recycle", label: "Recycle Bin", icon: iconRecycle },
  { key: "solitaire", label: "Solitaire", icon: iconSolitaire },
  { key: "thispc", label: "This PC", icon: iconThisPC },
  { key: "videos", label: "Videos", icon: iconVideos },
];

// Utility: desktop icon order by real-life utility
const ORDERED_ICONS = [
  "thispc",
  "browser",
  "documents",
  "pictures",
  "videos",
  "contacts",
  "email",
  "notepad",
  "paint",
  "calculator",
  "solitaire",
  "minesweeper",
  "recycle"
];
const ICONS_ORDERED = ORDERED_ICONS.map(key => ICONS.find(i => i.key === key)).filter(Boolean) as typeof ICONS;

// Responsive icon sizing and layout
const isMobile = window.innerWidth < 700;
const ICON_SIZE = isMobile ? 96 : 56;
const ICON_LABEL_SIZE = isMobile ? "text-base" : "text-xs";
const ICONS_PER_COL = isMobile ? 4 : Math.max(1, Math.floor((window.innerHeight - 120) / (ICON_SIZE + 32)));
const columns: Array<typeof ICONS> = [];
for (let i = 0; i < ICONS_ORDERED.length; i += ICONS_PER_COL) {
  columns.push(ICONS_ORDERED.slice(i, i + ICONS_PER_COL));
}

const Desktop = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState<AppState>({
    calculator: false,
    contacts: false,
    documents: false,
    email: false,
    browser: false,
    minesweeper: false,
    notepad: false,
    paint: false,
    pictures: false,
    print: false,
    recycle: false,
    solitaire: false,
    thispc: false,
    videos: false,
  });
  const [mute, setMute] = useState(false);
  const [loginStarted, setLoginStarted] = useState(false);
  const [windowOrder, setWindowOrder] = useState<string[]>([]);
  const bringToFront = (key: string) => {
    setWindowOrder((order) => [...order.filter(k => k !== key), key]);
  };

  const toggle = (key: keyof AppState) =>
    setOpen((o) => ({ ...o, [key]: !o[key] }));

  // Clock state
  const [now, setNow] = useState(new Date());
  const tickSound = useRef<HTMLAudioElement | null>(null);
  const chimeSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(() => {
        const next = new Date();
        // Play tick sound every minute
        if (tickSound.current) tickSound.current.play();
        // Play chime on the hour
        if (next.getMinutes() === 0 && next.getSeconds() === 0 && chimeSound.current) {
          chimeSound.current.play();
        }
        return next;
      });
    }, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  if (!loggedIn) {
    if (!loginStarted) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50" style={{backgroundImage: `url(${userIcon})`, backgroundSize: 'cover'}}>
          <img
            src={staticLoginImg}
            alt="Login Screen"
            className="rounded-xl shadow-2xl w-80 h-80 object-contain cursor-pointer animate-fade-in"
            onClick={() => setLoginStarted(true)}
          />
        </div>
      );
    }
    return <LoginScreen onLogin={() => setLoggedIn(true)} wallpaper={userIcon} />;
  }

  return (
    <div
      className="relative h-screen w-screen text-white select-none"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Desktop icons grid */}
      <div
        className={`absolute left-0 top-0 p-0 flex z-10 w-full h-full ${isMobile ? "flex-row overflow-x-auto" : "gap-12"}`}
        style={{height: '100%', width: '100%', maxWidth: '100vw', maxHeight: '100vh', overflow: isMobile ? 'auto' : 'auto'}}
        onClick={(e) => {
          if (e.target === e.currentTarget) window.location.href = "/";
        }}
      >
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-8 items-center">
            {col.map((iconObj) => (
              <DesktopIcon
                key={iconObj.key}
                icon={iconObj.icon}
                label={iconObj.label}
                onDoubleClick={() => {
                  setOpen(o => ({ ...o, [iconObj.key]: true }));
                  bringToFront(iconObj.key);
                }}
                size={ICON_SIZE}
                labelSize={ICON_LABEL_SIZE}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Application windows in z-index order */}
      {windowOrder.map(key => {
        if (!open[key as keyof AppState]) return null;
        const titleMap = { calculator: "Calculator", contacts: "Contacts", documents: "Documents", email: "E-mail", browser: "Web Browser", minesweeper: "Minesweeper", notepad: "Notepad", paint: "Paint", pictures: "Pictures", print: "Print", recycle: "Recycle Bin", solitaire: "Solitaire", thispc: "This PC", videos: "Videos" };
        const contentMap = { calculator: <Calculator />, contacts: <Contacts />, documents: <Documents />, email: <a href="mailto:rochelleberry731@gmail.com" className="text-blue-300 underline">Send E-mail</a>, browser: <WebBrowser />, minesweeper: <Minesweeper />, notepad: <Notepad />, paint: <Paint />, pictures: <Pictures />, print: <>Print function coming soon</>, recycle: <RecycleBin />, solitaire: <Solitaire />, thispc: <ThisPC />, videos: <Videos /> };
        return (
          <Window
            key={key}
            title={titleMap[key as keyof AppState]}
            onClose={() => setOpen(o => ({ ...o, [key]: false }))}
            style={{zIndex: 1000 + windowOrder.indexOf(key)}}
            onClick={() => bringToFront(key)}
          >
            {contentMap[key as keyof AppState]}
          </Window>
        );
      })}
      {/* Taskbar and clock remain unchanged */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black bg-opacity-70 flex items-center px-4 z-50 shadow-lg">
        {ICONS.filter(icon => open[icon.key as keyof AppState]).map(icon => (
          <button
            key={icon.key}
            className="flex items-center gap-2 px-3 py-1 mx-1 rounded hover:bg-teal-700 focus:bg-teal-800 transition-colors"
            onClick={() => toggle(icon.key as keyof AppState)}
          >
            <img src={icon.icon} alt={icon.label} className="w-6 h-6" />
            <span className="text-xs text-white">{icon.label}</span>
          </button>
        ))}
        <div className="flex-1" />
        <button
          className={`text-xs px-2 py-1 rounded mr-2 ${mute ? 'bg-red-700 text-white' : 'bg-teal-800 text-teal-200'} transition-colors`}
          onClick={() => setMute(!mute)}
          title={mute ? 'Unmute sound effects' : 'Mute sound effects'}
        >
          {mute ? '🔇 Mute' : '🔊 Sound'}
        </button>
        <button
          className="text-xs text-teal-200 font-mono px-2 py-1 rounded hover:bg-teal-800 transition-colors"
          onClick={() => alert(now.toLocaleString())}
          title="Show calendar"
        >
          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          <br />
          {now.toLocaleDateString([], { month: 'short', day: 'numeric', year: '2-digit' })}
        </button>
        <audio ref={tickSound} src="/tick.mp3" preload="auto" />
        <audio ref={chimeSound} src="/chime.mp3" preload="auto" />
      </div>
      {/* Home button fixed at bottom center */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-auto">
        <a
          href="/"
          className="bg-teal-700 hover:bg-teal-500 text-white font-bold rounded-full px-6 py-3 shadow-lg border-2 border-white text-lg transition-all"
          style={{ minWidth: 80 }}
          title="Return Home"
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default Desktop;
