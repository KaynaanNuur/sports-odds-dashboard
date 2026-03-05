import { useEffect, useState } from "react";
import { fetchOdds } from "../services/api";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);
  const [sport, setSport] = useState("basketball_nba");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const loadOdds = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchOdds(sport);
        setGames(data);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (err) {
        console.error(err);
        setError("Failed to load odds.");
      } finally {
        setLoading(false);
      }
    };

    loadOdds();

    const interval = setInterval(loadOdds, 60000); // refresh every 60s
    return () => clearInterval(interval);

  }, [sport]);

  // 🔍 Filter logic
  const filteredGames = games.filter((game) =>
    game.home_team.toLowerCase().includes(search.toLowerCase()) ||
    game.away_team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Sports Odds Dashboard</h1>

      {lastUpdated && (
        <p className="last-updated">
          Last updated at {lastUpdated}
        </p>
      )}

      {/* Controls */}
      <div className="controls">
        <select
          value={sport}
          onChange={(e) => setSport(e.target.value)}
          className="sport-select"
        >
          <option value="basketball_nba">NBA</option>
          <option value="americanfootball_nfl">NFL</option>
          <option value="soccer_epl">EPL</option>
        </select>

        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Loading */}
      {loading && <div className="spinner"></div>}

      {/* Error */}
      {error && <h2 className="error">{error}</h2>}

      {/* Empty Season */}
      {!loading && games.length === 0 && !error && (
        <div className="empty-state">
          <h3>No active games right now</h3>
          <p>
            {sport === "americanfootball_nfl"
              ? "NFL season has ended. Check back in September."
              : "This league may currently be out of season."}
          </p>
        </div>
      )}

      {/* No Search Match */}
      {!loading &&
        filteredGames.length === 0 &&
        games.length > 0 && (
          <p>No teams match your search.</p>
        )}

      {/* Cards */}
      <div className="cards-grid">
        {!loading &&
          filteredGames.length > 0 &&
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </div>
    </div>
  );
}

export default Home;