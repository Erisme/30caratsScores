import type { PlayerConfig, Color, ColorValue } from '../types';
import { COLOR_OPTIONS, VALUE_OPTIONS } from '../types';

interface Props {
  players: PlayerConfig[];
  onChange: (index: number, patch: Partial<PlayerConfig>) => void;
}

export default function PlayerSetup({ players, onChange }: Props) {
  return (
    <section className="card">
      <h2>Joueurs et couleurs</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Couleur</th>
              <th>Valeur de la couleur</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <input
                    type="text"
                    value={player.name}
                    onChange={e => onChange(i, { name: e.target.value })}
                  />
                </td>
                <td>
                  <select
                    value={player.color}
                    onChange={e => onChange(i, { color: e.target.value as Color })}
                  >
                    {COLOR_OPTIONS.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={player.value}
                    onChange={e => onChange(i, { value: Number(e.target.value) as ColorValue })}
                  >
                    {VALUE_OPTIONS.map(v => (
                      <option key={v} value={v}>{v > 0 ? `+${v}` : v}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
