const ThisPC = () => {
  return (
    <div className="w-80 bg-white rounded shadow-lg p-4 text-black">
      <h2 className="text-lg font-bold mb-2">This PC</h2>
      <ul className="mb-2">
        <li className="mb-1">Local Disk (C:) - 256 GB</li>
        <li className="mb-1">Documents</li>
        <li className="mb-1">Pictures</li>
        <li className="mb-1">Videos</li>
        <li className="mb-1">Downloads</li>
        <li className="mb-1">Recycle Bin</li>
      </ul>
      <div className="text-xs text-gray-500">(This is a mockup)</div>
    </div>
  );
};

export default ThisPC;
