import { MinesweeperGame } from "@vgpontes/minesweeper-react";

const Minesweeper = () => {
  return (
    <div className="flex justify-center items-start h-full overflow-auto p-2">
      <MinesweeperGame boardWidth={8} boardHeight={8} numMines={10} />
    </div>
  );
};

export default Minesweeper;
