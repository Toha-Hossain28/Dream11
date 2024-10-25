import PropTypes from "prop-types";

export default function AvailablePlayer({
  flipComponent,
  selected,
  selectedPlayersLength,
}) {
  return (
    <div className="mt-12 flex justify-between items-center mb-12">
      <div className="font-bold text-3xl text-[#131313]">
        {selected
          ? "Available Players"
          : `Selected Players (${selectedPlayersLength}/6)`}
      </div>
      <div>
        <button
          className={`text-base px-4 py-3 rounded-l-xl border-l border-t border-b outline-none   ${
            selected ? "bg-[#E7FE29] font-bold" : "font-base"
          }`}
          onClick={() => flipComponent("available")}
        >
          Available
        </button>
        <button
          className={`text-base px-4 py-3 rounded-r-xl border-r border-t border-b outline-none  ${
            !selected ? "bg-[#E7FE29] font-bold" : "font-base"
          }`}
          onClick={() => flipComponent("selected")}
        >
          Selected({selectedPlayersLength})
        </button>
      </div>
    </div>
  );
}

AvailablePlayer.propTypes = {
  flipComponent: PropTypes.func,
  selected: PropTypes.bool,
  selectedPlayersLength: PropTypes.number,
};
