export default function Newsletter() {
  return (
    <div className="p-6 border-2 border-white rounded-xl bg-[#FFFFFF26] relative top-44 sora">
      <div
        style={{
          backgroundImage: `url('assets/bg-shadow.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full flex flex-col text-center py-[88px] rounded-lg bg-white border border-gray-200"
      >
        <h2 className="font-bold text-[32px] mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="inter font-medium text-xl text-[#131313B3] pb-6">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex items-center justify-center gap-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="text-[#13131366] font-normal text-base py-3 px-6 rounded-xl border-gray-200 border min-w-[420px]"
          />
          <button className="py-3 px-6 bg-gradient-to-br from-[#be64a4] to-[#d0a961] rounded-xl text-black font-bold text-base">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
