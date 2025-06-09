import React, { createContext, useContext, useRef } from "react";

const sounds = {
  click: "/click.mp3",
  open: "/open.mp3",
  close: "/close.mp3",
  error: "/error.mp3",
  success: "/success.mp3",
  typing: "/typing.mp3",
  mouse: "/mouse.mp3",
  startup: "/startup.mp3",
  // Add more as needed
};

interface SoundContextType {
  play: (name: keyof typeof sounds) => void;
  mute: boolean;
  setMute: (mute: boolean) => void;
}

const SoundContext = createContext<SoundContextType>({
  play: () => {},
  mute: false,
  setMute: () => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [mute, setMute] = React.useState(false);

  const play = (name: keyof typeof sounds) => {
    if (mute) return;
    if (!audioRefs.current[name]) {
      const audio = new Audio(sounds[name]);
      audioRefs.current[name] = audio;
    }
    const audio = audioRefs.current[name];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <SoundContext.Provider value={{ play, mute, setMute }}>
      {children}
    </SoundContext.Provider>
  );
};
