import type { PlayerConfig, Holdings, Color } from './types';

export interface ScoredPlayer {
  name: string;
  color: Color;
  score: number;
  gold: number;
}

export function hasDuplicateColors(players: PlayerConfig[]): boolean {
  return new Set(players.map(p => p.color)).size !== players.length;
}

function computeScore(playerIndex: number, players: PlayerConfig[], allHoldings: Holdings[]): number {
  const holdings = allHoldings[playerIndex] ?? { gems: [], gold: 0 };
  const colorValues = new Map(players.map(p => [p.color, p.value]));
  const gemScore = players.reduce((sum, colorOwner, colorIndex) => {
    const quantity = holdings.gems[colorIndex] ?? 0;
    return sum + quantity * (colorValues.get(colorOwner.color) ?? 0);
  }, 0);
  return gemScore + holdings.gold * 10;
}

export function rankPlayers(players: PlayerConfig[], allHoldings: Holdings[]): ScoredPlayer[] {
  return players
    .map((player, i) => ({
      name: player.name,
      color: player.color,
      score: computeScore(i, players, allHoldings),
      gold: allHoldings[i]?.gold ?? 0,
    }))
    .sort((a, b) => b.score - a.score || b.gold - a.gold || a.name.localeCompare(b.name, 'fr'));
}
