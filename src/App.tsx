import { useState } from 'react';
import type { PlayerConfig, Holdings, Color, ColorValue } from './types';
import { COLOR_OPTIONS, VALUE_OPTIONS } from './types';
import PlayerSetup from './components/PlayerSetup';
import HoldingsTable from './components/HoldingsTable';
import Ranking from './components/Ranking';

const PLAYER_COUNTS = [3, 4, 5, 6];
const DEFAULT_COUNT = 6;

function makeDefaultPlayers(count: number): PlayerConfig[] {
  return Array.from({ length: count }, (_, i) => ({
    name: `Joueur ${i + 1}`,
    color: COLOR_OPTIONS[i] as Color,
    value: VALUE_OPTIONS[i] as ColorValue,
  }));
}

function makeDefaultHoldings(count: number): Holdings[] {
  return Array.from({ length: count }, () => ({
    gems: Array<number>(count).fill(0),
    gold: 0,
  }));
}

export default function App() {
  const [playerCount, setPlayerCount] = useState(DEFAULT_COUNT);
  const [players, setPlayers] = useState<PlayerConfig[]>(() => makeDefaultPlayers(DEFAULT_COUNT));
  const [holdings, setHoldings] = useState<Holdings[]>(() => makeDefaultHoldings(DEFAULT_COUNT));

  function handleBuild() {
    setPlayers(makeDefaultPlayers(playerCount));
    setHoldings(makeDefaultHoldings(playerCount));
  }

  function handlePlayerChange(index: number, patch: Partial<PlayerConfig>) {
    setPlayers(prev => prev.map((p, i) => i === index ? { ...p, ...patch } : p));
  }

  function handleHoldingsChange(playerIndex: number, patch: Partial<Holdings>) {
    setHoldings(prev => prev.map((h, i) => i === playerIndex ? { ...h, ...patch } : h));
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="logo">💎 30 Carats</span>
      </header>
      <main className="page stack">
        <section className="card">
          <div className="page-title">
            <h1>Score final</h1>
            <p>Renseigne les valeurs révélées des couleurs et les ressources de chaque joueur.</p>
          </div>
          <div className="controls">
            <label htmlFor="playerCount" className="field-label">Nombre de joueurs</label>
            <select
              id="playerCount"
              value={playerCount}
              onChange={e => setPlayerCount(Number(e.target.value))}
            >
              {PLAYER_COUNTS.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
            <button className="btn btn-primary" onClick={handleBuild}>
              Créer la feuille de score
            </button>
          </div>
        </section>

        <PlayerSetup players={players} onChange={handlePlayerChange} />
        <HoldingsTable players={players} holdings={holdings} onChange={handleHoldingsChange} />
        <Ranking players={players} holdings={holdings} />
      </main>
    </div>
  );
}
