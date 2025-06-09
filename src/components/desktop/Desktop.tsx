import { useEffect, useState, useRef } from "react";
import Window from "./Window";
import Minesweeper from "./Minesweeper";
import Solitaire from "./Solitaire";
import Documents from "./Documents";
import Pictures from "./Pictures";
import WebBrowser from "./WebBrowser";
import LoginScreen from "./LoginScreen";
import { Link } from "react-router-dom";
import wallpaper from "../../assets/mockups/desktop/desktop-wallpaper.png";
import userIcon from "../../assets/mockups/desktop/desktop-userlogin.png";
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
    return (
      <LoginScreen onLogin={() => setLoggedIn(true)} wallpaper={userIcon} />
    );
  }

  return (
    <div
      className="relative h-screen w-screen text-white select-none"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" }}
    >
      {/* Desktop icons */}
      <div className="absolute left-0 top-0 p-6 flex flex-col gap-6 z-10">
        {ICONS.map((icon) => (
          <DesktopIcon
            key={icon.key}
            icon={icon.icon}
            label={icon.label}
            onDoubleClick={() => toggle(icon.key as keyof AppState)}
          />
        ))}
      </div>
      {/* Taskbar */}
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
      {/* Application windows */}
      {open.calculator && (
        <Window title="Calculator" onClose={() => toggle("calculator")}>
          {" "}
          <Calculator />{" "}
        </Window>
      )}
      {open.contacts && (
        <Window title="Contacts" onClose={() => toggle("contacts")}>
          {" "}
          <Contacts />{" "}
        </Window>
      )}
      {open.documents && (
        <Window title="Documents" onClose={() => toggle("documents")}>
          {" "}
          <Documents />{" "}
        </Window>
      )}
      {open.email && (
        <Window title="E-mail" onClose={() => toggle("email")}>
          {" "}
          <a
            href="mailto:rochelleberry731@gmail.com"
            className="text-blue-300 underline"
          >
            Send E-mail
          </a>{" "}
        </Window>
      )}
      {open.browser && (
        <Window title="Web Browser" onClose={() => toggle("browser")}>
          {" "}
          <WebBrowser />{" "}
        </Window>
      )}
      {open.minesweeper && (
        <Window title="Minesweeper" onClose={() => toggle("minesweeper")}>
          {" "}
          <Minesweeper />{" "}
        </Window>
      )}
      {open.notepad && (
        <Window title="Notepad" onClose={() => toggle("notepad")}>
          {" "}
          <Notepad />{" "}
        </Window>
      )}
      {open.paint && (
        <Window title="Paint" onClose={() => toggle("paint")}>
          {" "}
          <Paint />{" "}
        </Window>
      )}
      {open.pictures && (
        <Window title="Pictures" onClose={() => toggle("pictures")}>
          {" "}
          <Pictures />{" "}
        </Window>
      )}
      {open.print && (
        <Window title="Print" onClose={() => toggle("print")}>
          Print function coming soon
        </Window>
      )}
      {open.recycle && (
        <Window title="Recycle Bin" onClose={() => toggle("recycle")}>
          <RecycleBin />{" "}
        </Window>
      )}
      {open.solitaire && (
        <Window title="Solitaire" onClose={() => toggle("solitaire")}>
          {" "}
          <Solitaire />{" "}
        </Window>
      )}
      {open.thispc && (
        <Window title="This PC" onClose={() => toggle("thispc")}>
          <ThisPC />{" "}
        </Window>
      )}
      {open.videos && (
        <Window title="Videos" onClose={() => toggle("videos")}>
          <Videos />{" "}
        </Window>
      )}
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
    </div>
  );
};

export default Desktop;
