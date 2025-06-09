const RecycleBin = () => {
  return (
    <div className="w-72 bg-white rounded shadow-lg p-4 text-black">
      <h2 className="text-lg font-bold mb-2">Recycle Bin</h2>
      <ul>
        <li className="mb-1">OldDocument.txt</li>
        <li className="mb-1">Screenshot.png</li>
        <li className="mb-1">Draft.docx</li>
      </ul>
      <div className="text-xs text-gray-500">(This is a mockup. Restore/delete functionality can be added.)</div>
    </div>
  );
};

export default RecycleBin;
