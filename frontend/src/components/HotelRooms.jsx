import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelRooms = ({ room, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)}>
          <img
            src={room.images[0]}
            alt="room"
            className="w-full h-52 object-cover"
          />
        </Link>
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 bg-white text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4 space-y-2">
        {/* Hotel name & rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {room.hotel.name}
          </h3>
          <div className="flex items-center gap-1 text-orange-500 text-sm">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
            4.5
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-800 text-lg font-medium">
            ${room.pricePerNight}
            <span className="text-sm font-normal text-gray-500 ml-1">/night</span>
          </p>
          <button className="border px-4 py-1 text-sm font-medium rounded hover:bg-gray-50 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
