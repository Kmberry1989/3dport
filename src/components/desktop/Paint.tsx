import { useRef, useState } from "react";

const COLORS = [
  "#000000", "#222222", "#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#ffa500", "#a52a2a", "#008000", "#800080"
];
const BRUSHES = [2, 4, 8, 16, 32];

const Paint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#222222");
  const [brush, setBrush] = useState(4);
  const [last, setLast] = useState<{x: number, y: number} | null>(null);
  const [mode, setMode] = useState<'draw'|'erase'>("draw");

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
    ctx.strokeStyle = mode === 'erase' ? "#fff" : color;
    ctx.lineWidth = brush;
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
      if (ctx) { ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
  };

  // Responsive canvas sizing
  const CANVAS_W = Math.min(window.innerWidth - 80, 1200);
  const CANVAS_H = Math.min(window.innerHeight - 180, 700);

  return (
    <div className="bg-white rounded shadow-lg p-4 flex flex-col items-center w-full h-full" style={{minHeight:'100%', minWidth:'100%'}}>
      <div className="mb-2 flex flex-wrap gap-2 items-center justify-center w-full">
        <div className="flex gap-1 items-center">
          {COLORS.map(c => (
            <button key={c} className="w-6 h-6 rounded-full border-2 border-gray-300" style={{background:c, outline: color===c? '2px solid #333':'none'}} onClick={()=>{setColor(c);setMode('draw')}} aria-label={c} />
          ))}
        </div>
        <div className="flex gap-1 items-center ml-4">
          {BRUSHES.map(b => (
            <button key={b} className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center ${brush===b?'ring-2 ring-blue-400':''}`} onClick={()=>{setBrush(b);setMode('draw')}} aria-label={`Brush size ${b}`}>
              <div style={{background:color, width:b, height:b, borderRadius:'50%'}} />
            </button>
          ))}
        </div>
        <button className={`ml-4 px-3 py-1 rounded bg-gray-200 border ${mode==='erase'?'bg-yellow-200':''}`} onClick={()=>setMode('erase')}>Eraser</button>
        <button className="ml-2 px-3 py-1 rounded bg-gray-200" onClick={clear}>Clear</button>
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="border border-gray-400 rounded cursor-crosshair bg-white"
          style={{maxWidth:'100%', maxHeight:'100%', boxShadow:'0 2px 16px #0002'}}
          onMouseDown={startDraw}
          onMouseUp={endDraw}
          onMouseOut={endDraw}
          onMouseMove={draw}
        />
      </div>
    </div>
  );
};

export default Paint;
