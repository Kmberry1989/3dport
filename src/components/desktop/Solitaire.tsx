import { useState } from "react";
import {
  Solitaire as Game,
  solitaireReset,
  solitairePoint,
  solitaireBuild,
  solitaireDeal,
  solitaireIsWon,
} from "klondike-solitaire";
import type { Card } from "klondike-solitaire";

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

  const suit = (s: string) =>
    s === "Spades" ? "♠" : s === "Clubs" ? "♣" : s === "Hearts" ? "♥" : "♦";

  const CardView = ({ card }: { card: Card }) => (
    <div
      className={`w-8 h-12 rounded border border-gray-600 flex items-center justify-center text-sm font-bold bg-white ${
        card.suit === "Hearts" || card.suit === "Diamonds" ? "text-red-600" : "text-black"
      }`}
    >
      {card.rank}
      {suit(card.suit)}
    </div>
  );

  const renderPile = (pile: readonly Card[], handler?: (c: Card) => void) => (
    <div className="flex space-x-1">
      {pile.map((c, i) => (
        <button key={i} onClick={() => handler?.(c)}>
          {c.direction === "Down" ? (
            <div className="w-8 h-12 rounded border border-gray-600 bg-blue-700" />
          ) : (
            <CardView card={c} />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-2 bg-green-800 p-2 text-xs text-white font-sans">
      <div className="flex justify-between">
        <button onClick={deal}>Deal</button>
        <button onClick={reset}>Reset</button>
        <span>{solitaireIsWon(game) ? "You won!" : ""}</span>
      </div>
      <div className="flex space-x-2">
        {game.foundation.map((pile: Card[], i: number) => (
          <button key={i} onClick={onBuildFoundation}>
            {renderPile(pile)}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {game.tableau.map((pile, i) => (
          <button key={i} onClick={() => onBuildTableau(i)}>
            {renderPile(pile, onCard)}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {renderPile(game.stock, onCard)}
        {renderPile(game.waste, onCard)}
      </div>
    </div>
  );
};

export default Solitaire;
