const Videos = () => {
  return (
    <div className="w-80 bg-white rounded shadow-lg p-4 text-black">
      <h2 className="text-lg font-bold mb-2">Videos</h2>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-200 rounded p-2">Sample Video 1 (mockup)</div>
        <div className="bg-gray-200 rounded p-2">Sample Video 2 (mockup)</div>
        <div className="bg-gray-200 rounded p-2">Sample Video 3 (mockup)</div>
      </div>
      <div className="text-xs text-gray-500 mt-2">(This is a mockup. Video playback can be added.)</div>
    </div>
  );
};

export default Videos;
