import HotelRooms from "./HotelRooms";
import { roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 bg-slate-50 py-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Featured Destination
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Discover our handpicked selection of exceptional properties around the
        world, offering unparalleled luxury and unforgettable experiences.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelRooms key={room._id} room={room} index={index} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => {
            navigate("/rooms")
            scrollTo(0, 0);
          }}
          className="text-sm md:text-base cursor-pointer font-medium text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
        >
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestination;
