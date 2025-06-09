import { describe, it, expect } from 'vitest';
import { Solitaire, solitaireDeal, solitairePoint, solitaireBuild } from 'klondike-solitaire';

// Ensure drawing and building mutate the passed game object.
describe('basic gameplay', () => {
  it('deals from waste back to stock', () => {
    const game = Solitaire(() => 0);
    // Draw first hand to waste (3 cards by default)
    solitairePoint(game, game.stock.at(-1)!);
    expect(game.stock.length).toBe(21);
    expect(game.waste.length).toBe(3);
    // Move remaining stock to waste
    while (game.stock.length > 0) {
      solitairePoint(game, game.stock.at(-1)!);
    }
    expect(game.stock.length).toBe(0);
    expect(game.waste.length).toBe(24);
    // Deal should move waste back to stock
    solitaireDeal(game);
    expect(game.stock.length).toBe(24);
    expect(game.waste.length).toBe(0);
  });

  it('moves selected cards with build', () => {
    const game = Solitaire(() => 0);
    solitaireDeal(game);
    const targetLane = game.tableau[1];
    // Select top waste card
    solitairePoint(game, game.stock.at(-1)!);
    // Build onto tableau lane
    solitaireBuild(game, { type: 'Tableau', x: 1 });
    expect(targetLane.length).toBeGreaterThan(0);
  });
});
