import { motion } from "framer-motion";

function GameCard({ game }) {
  const bookmaker = game.bookmakers?.[0];
  const odds = bookmaker?.markets?.[0]?.outcomes;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="match-title">
        {game.away_team} vs {game.home_team}
      </h3>

      {odds ? (
        <div className="odds-row">
          {odds.map((team) => (
            <div key={team.name} className="odds-pill">
              <span>{team.name}</span>
              <strong>{team.price}</strong>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-odds">No odds available</p>
      )}
    </motion.div>
  );
}

export default GameCard;