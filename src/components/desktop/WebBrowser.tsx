import { useState } from "react";

const ALLOWED_PAGES = ["/contributions.html", "/index.html"]; // restrict to repo html

const WebBrowser = () => {
  const [input, setInput] = useState("/contributions.html");
  const [url, setUrl] = useState("/contributions.html");

  const navigate = () => {
    const normalized = input.startsWith("/") ? input : `/${input}`;
    if (ALLOWED_PAGES.includes(normalized)) {
      setUrl(normalized);
    }
  };

  return (
    <div className="flex flex-col h-[30rem] w-[28rem]">
      <div className="mb-2 flex">
        <input
          className="flex-grow text-black px-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={navigate}
          className="ml-1 px-2 bg-gray-600"
        >
          Go
        </button>
      </div>
      <iframe src={url} className="flex-grow w-full h-full bg-white" title="browser" />
    </div>
  );
};

export default WebBrowser;
