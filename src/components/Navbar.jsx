import PropTypes from "prop-types";
function Navbar({ remainingCoin }) {
  return (
    <div className="flex justify-between items-center sora mt-12">
      <div>
        <img className="" src="assets/logo.png" alt="" />
      </div>
      <div className="flex items-center  gap-12 font-normal text-base text-[#131313B3]">
        <p>Home</p>
        <p>Fixture</p>
        <p>Team</p>
        <p>Schedules</p>
        <div className="font-semibold text-[#131313] border-[1px] rounded-xl py-3 px-5 space-x-3">
          {remainingCoin} Coins{" "}
          <i className="fa-solid fa-coins text-yellow-400 text-xl"></i>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  remainingCoin: PropTypes.number,
};

export default Navbar;
