import PropTypes from "prop-types";

function Banner({ addCoin }) {
  return (
    <div
      style={{
        backgroundImage: `url('assets/bg-shadow.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-black mt-12 rounded-2xl flex flex-col justify-center items-center"
    >
      <div className="pt-20">
        <img src="assets/banner-main.png" alt="" />
      </div>
      <div className="mt-6 text-center mb-6">
        <h1 className="font-bold text-[40px] text-white mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="inter font-medium text-2xl text-[#FFFFFFB3]">
          Beyond Boundaries Beyond Limits
        </p>
      </div>
      <div className="border-2 border-[#E7FE29] p-2 rounded-[20px] mb-12">
        <button
          className="bg-[#E7FE29] py-[14px] px-5 rounded-xl font-bold text-base text-[#131313 outline-none"
          onClick={addCoin}
        >
          Claim Free Credits
        </button>
      </div>
    </div>
  );
}

Banner.propTypes = {
  addCoin: PropTypes.func,
};

export default Banner;
