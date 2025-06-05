import { useState } from "react";
import {
  Solitaire as Game,
  solitaireReset,
  solitairePoint,
  solitaireBuild,
  solitaireDeal,
  solitaireToString,
  solitaireIsWon,
} from "klondike-solitaire";
import type { Card } from "klondike-solitaire/dist/src/card/card";
import { cardToString } from "klondike-solitaire/dist/src/card/card";

const Solitaire = () => {
  const [game, setGame] = useState(() => Game());
  const update = () => setGame({ ...game });

  const onCard = (card: Card) => {
    solitairePoint(game, card);
    update();
  };

  const onBuildFoundation = () => {
    solitaireBuild(game, { type: "Foundation" });
    update();
  };

  const onBuildTableau = (x: number) => {
    solitaireBuild(game, { type: "Tableau", x });
    update();
  };

  const deal = () => {
    solitaireDeal(game);
    update();
  };

  const reset = () => {
    solitaireReset(game);
    update();
  };

  const renderPile = (pile: readonly Card[], handler?: (c: Card) => void) => (
    <div className="flex">
      {pile.map((c, i) => (
        <button key={i} onClick={() => handler?.(c)} className="mx-0.5">
          {c.direction === "Down" ? "🂠" : cardToString("Undirected", c)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="text-sm font-mono space-y-2">
      <div className="flex space-x-2">
        <div>
          <div>Stock</div>
          {renderPile(game.stock, onCard)}
          <button onClick={deal}>Deal</button>
        </div>
        <div>
          <div>Waste</div>
          {renderPile(game.waste, onCard)}
        </div>
        <div>
          <div>Foundation</div>
          {game.foundation.map((pile, i) => (
            <div key={i}>
              {renderPile(pile, onCard)}
              <button onClick={onBuildFoundation}>Build</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Tableau</div>
        <div className="flex space-x-2">
          {game.tableau.map((lane, i) => (
            <div key={i}>
              {renderPile(lane, onCard)}
              <button onClick={() => onBuildTableau(i)}>Build</button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 space-x-2">
        <button onClick={reset}>Reset</button>
        {solitaireIsWon(game) && <span>You won!</span>}
      </div>
      <pre className="whitespace-pre-wrap">{solitaireToString(game)}</pre>
    </div>
  );
};

export default Solitaire;
