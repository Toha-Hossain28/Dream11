export default function SelectedPlayerCard({ p }) {
  const { name, image, role, biddingPrice } = p;
  // console.log(p);
  return (
    <>
      <div className="flex justify-between items-center px-6  py-4 border rounded-xl">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full">
            <img
              src={image}
              alt=""
              className="h-full w-14 overflow-hidden rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="text-red-600">
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </>
  );
}
