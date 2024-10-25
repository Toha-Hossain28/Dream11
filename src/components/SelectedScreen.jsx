import PropTypes from "prop-types";
import SelectedPlayerCard from "./SelectedPlayerCard";

export default function SelectedScreen({
  selectedPlayers,
  flipComponent,
  removePlayer,
}) {
  // console.log(selectedPlayers);
  return (
    <>
      {selectedPlayers.map((p) => (
        <SelectedPlayerCard
          key={p.playerId}
          p={p}
          removePlayer={removePlayer}
        />
      ))}
      <div className="p-2 border-2 border-[#E7FE29] w-fit rounded-2xl">
        <button
          className={
            "text-base px-4 py-3 rounded-xl border outline-none bg-[#E7FE29] font-bold w-auto"
          }
          onClick={() => flipComponent("available")}
        >
          Add more players
        </button>
      </div>
    </>
  );
}

SelectedScreen.propTypes = {
  selectedPlayers: PropTypes.array,
  flipComponent: PropTypes.func,
  removePlayer: PropTypes.func,
};
