const Pictures = () => {
  const pics = [
    "/logo.png",
    "/herobg.png",
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {pics.map((src, i) => (
        <img key={i} src={src} alt="pic" className="max-w-full" />
      ))}
    </div>
  );
};

export default Pictures;
