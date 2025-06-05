import { useState } from "react";

const WebBrowser = () => {
  const [url, setUrl] = useState("/contributions.html");

  return (
    <div className="flex flex-col h-[30rem] w-[28rem]">
      <div className="mb-2 flex">
        <input
          className="flex-grow text-black px-1"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={() => setUrl(url)}
          className="ml-1 px-2 bg-gray-600"
        >
          Go
        </button>
      </div>
      <iframe src={url} className="flex-grow bg-white" title="browser" />
    </div>
  );
};

export default WebBrowser;
