import type { PlayerConfig, Holdings } from '../types';

interface Props {
  players: PlayerConfig[];
  holdings: Holdings[];
  onChange: (playerIndex: number, patch: Partial<Holdings>) => void;
}

export default function HoldingsTable({ players, holdings, onChange }: Props) {
  function updateGem(rowIndex: number, colorIndex: number, raw: string) {
    const quantity = Math.max(0, Number(raw) || 0);
    const current = holdings[rowIndex]?.gems ?? Array<number>(players.length).fill(0);
    const gems = [...current];
    gems[colorIndex] = quantity;
    onChange(rowIndex, { gems });
  }

  function updateGold(rowIndex: number, raw: string) {
    onChange(rowIndex, { gold: Math.max(0, Number(raw) || 0) });
  }

  return (
    <section className="card">
      <h2>Ressources de fin de partie</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Joueur</th>
              {players.map(p => (
                <th key={p.color}>
                  <span className={`gem-dot ${p.color}`} />
                  {p.color}
                </th>
              ))}
              <th>Or (×10)</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, rowIndex) => (
              <tr key={rowIndex}>
                <td>{player.name || `Joueur ${rowIndex + 1}`}</td>
                {players.map((_, colorIndex) => (
                  <td key={colorIndex}>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={holdings[rowIndex]?.gems[colorIndex] ?? 0}
                      onChange={e => updateGem(rowIndex, colorIndex, e.target.value)}
                    />
                  </td>
                ))}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={holdings[rowIndex]?.gold ?? 0}
                    onChange={e => updateGold(rowIndex, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
