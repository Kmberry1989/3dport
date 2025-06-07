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
import { rankToASCII } from "klondike-solitaire/dist/src/card/rank";
import { suitToASCII, suitToColor } from "klondike-solitaire/dist/src/card/suit";

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

  const renderCard = (c: Card) => {
    if (c.direction === "Down") {
      return <div className="w-12 h-16 bg-blue-800 rounded border" />;
    }
    const rank = rankToASCII[c.rank];
    const suit = suitToASCII[c.suit];
    const color = suitToColor[c.suit] === "Red" ? "text-red-600" : "text-black";
    return (
      <div className={`w-12 h-16 bg-white rounded border flex flex-col justify-between p-1 ${color}`}>
        <span className="text-xs">{rank}{suit}</span>
        <span className="text-lg self-center">{suit}</span>
        <span className="text-xs self-end rotate-180">{rank}{suit}</span>
      </div>
    );
  };

  const renderPile = (pile: readonly Card[], handler?: (c: Card) => void) => (
    <div className="flex">
      {pile.map((c, i) => (
        <button key={i} onClick={() => handler?.(c)} className="mx-0.5">
          {renderCard(c)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="text-base font-mono space-y-2">
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
