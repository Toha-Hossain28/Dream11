export default function Footer() {
  return (
    <div className="bg-[#06091A] flex flex-col justify-center items-center pt-[200px] text-white w-[1600px] mx-auto  sora">
      <div className="h-[140px] mb-16 px-[130px]">
        <img className="h-full" src="assets/logo-footer.png" alt="" />
      </div>
      <div className="grid grid-cols-3 px-[130px]">
        <div>
          <p className="font-semibold text-lg mb-4">About Us</p>
          <p className="font-normal text-base text-gray-400 w-2/3">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg mb-4">Quick Links</p>
          <ul className="list-disc ml-6 font-normal text-base text-gray-400">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="mb-24">
          <p className="font-semibold text-lg mb-4">Subscribe</p>
          <p className="font-normal text-base text-gray-400 w-2/3 mb-5">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="text-[#13131366] font-normal text-base py-3 px-6 rounded-l-xl"
            />
            <button className="py-3 px-6 bg-gradient-to-br from-[#be64a4] to-[#d0a961] rounded-r-xl text-black font-bold text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-[#FFFFFF99] w-full" />
      <div className="px-[130px] font-normal text-base py-8 text-[#FFFFFF99">
        @2024 Your Company All Rights Reserved.
      </div>
    </div>
  );
}
