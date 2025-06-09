import { useState } from "react";

const Notepad = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-96 h-80 bg-white rounded shadow-lg flex flex-col">
      <textarea
        className="flex-1 resize-none p-2 text-black bg-white rounded-t outline-none"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type your notes here..."
        spellCheck={true}
      />
      <div className="bg-gray-200 p-2 text-right text-xs text-gray-600 rounded-b">
        {text.length} characters
      </div>
    </div>
  );
};

export default Notepad;
