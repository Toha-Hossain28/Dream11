import PropTypes from "prop-types";
import PlayerCard from "./PlayerCard";

export default function SelectionScreen({
  players,
  selectedPlayersLength,
  selectPlayer,
}) {
  return (
    <>
      {players.map((p) => (
        <PlayerCard key={p.playerId} p={p} selectPlayer={selectPlayer} />
      ))}
      {/* hello */}
    </>
  );
}

SelectionScreen.propTypes = {
  players: PropTypes.array,
  selectedPlayersLength: PropTypes.number,
  selectPlayer: PropTypes.func,
};
