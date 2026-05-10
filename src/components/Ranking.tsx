import type { PlayerConfig, Holdings } from '../types';
import { hasDuplicateColors, rankPlayers } from '../utils';

interface Props {
  players: PlayerConfig[];
  holdings: Holdings[];
}

export default function Ranking({ players, holdings }: Props) {
  const duplicate = hasDuplicateColors(players);
  const ranked = duplicate ? [] : rankPlayers(players, holdings);

  return (
    <section className="card">
      <h2>Résultats</h2>
      {duplicate && (
        <p className="warning mb-20">
          Deux joueurs partagent la même couleur. Veuillez corriger pour un calcul valide.
        </p>
      )}
      <ol className="ranking">
        {ranked.map((result, i) => (
          <li key={i} className="ranking-item">
            <span
              className="rank-pos"
              style={{
                background: `var(--gem-${result.color.toLowerCase()})`,
                color: result.color === 'Blanc' ? '#1f2937' : 'white',
                border: result.color === 'Blanc' ? '2px solid #d1d5db' : undefined,
              }}
            >
              {i + 1}
            </span>
            <span className="rank-name">{result.name}</span>
            <span className="rank-score">{result.score > 0 ? `+${result.score}` : result.score} pts</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
