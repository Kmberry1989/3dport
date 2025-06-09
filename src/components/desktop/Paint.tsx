import { useRef, useState } from "react";

const Paint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#222222");
  const [last, setLast] = useState<{x: number, y: number} | null>(null);

  const startDraw = (e: React.MouseEvent) => {
    setDrawing(true);
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    setLast({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const endDraw = () => setDrawing(false);
  const draw = (e: React.MouseEvent) => {
    if (!drawing || !last) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLast({ x, y });
  };
  const clear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="bg-white rounded shadow-lg p-2 flex flex-col items-center">
      <div className="mb-2 flex gap-2">
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <button className="bg-gray-200 px-2 rounded" onClick={clear}>Clear</button>
      </div>
      <canvas
        ref={canvasRef}
        width={320}
        height={200}
        className="border border-gray-400 rounded cursor-crosshair bg-white"
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseOut={endDraw}
        onMouseMove={draw}
      />
    </div>
  );
};

export default Paint;
