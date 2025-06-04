import { MinesweeperGame } from "@vgpontes/minesweeper-react";

const Minesweeper = () => {
  return (
    <div className="p-2">
      <MinesweeperGame boardWidth={8} boardHeight={8} numMines={10} />
    </div>
  );
};

export default Minesweeper;
