import PropTypes from "prop-types";
import SelectedPlayerCard from "./SelectedPlayerCard";

export default function SelectedScreen({ selectedPlayers }) {
  console.log(selectedPlayers);
  return (
    <>
      {selectedPlayers.map((p) => (
        <SelectedPlayerCard key={p.playerId} p={p} />
      ))}
    </>
  );
}

SelectedScreen.prototype = {
  selectedPlayers: PropTypes.array,
};
