import PropTypes from "prop-types";

export default function PlayerCard({ p, selectPlayer }) {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    p;
  // console.log(p);
  return (
    <div className="w-[425px] border p-6 rounded-3xl">
      <div>
        <img
          className="w-[375px] h-[240px] object-cover rounded-xl"
          src={image}
          alt=""
        />
      </div>
      <div className="text-xl font-semibold text-[#131313] flex gap-5  items-center mt-5">
        <i className="fa-solid fa-user text-2xl text-[#131313CC]"></i>
        <h2>{name}</h2>
      </div>
      <div className="mt-5 flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <i className="fa-solid fa-flag text-[#131313]"></i>
          <div className="text-base font-normal">{country}</div>
        </div>
        <div className="bg-[#1313130D] px-4 py-2 rounded-lg text-sm font-normal">
          {role}
        </div>
      </div>
      <hr />
      <div className="font-bold text-base mt-4 mb-4">Rating</div>
      <div className="font-bold text-base mt-4 mb-4 flex justify-between items-center">
        <span>Batting Type</span>
        <span className="font-normal text-[#131313B3] text-right">
          {battingType}
        </span>
      </div>
      <div className="font-bold text-base mt-4 mb-4 flex justify-between items-center">
        <span>Bowling Type</span>
        <span className="font-normal text-[#131313B3] text-right">
          {bowlingType}
        </span>
      </div>
      <div className="flex justify-between items-center text-base text-[#131313] font-semibold">
        <div>Price: ${biddingPrice}</div>
        <div className="text-sm font-normal px-4 py-2 border rounded-lg">
          <button onClick={() => selectPlayer(p)}>Choose Player</button>
        </div>
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  p: PropTypes.object,
  selectPlayer: PropTypes.func,
};
