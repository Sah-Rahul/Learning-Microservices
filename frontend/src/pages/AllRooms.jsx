import React, { useState } from "react";
import { roomsDummyData, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AllRooms = () => {
  const navigate = useNavigate();
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const FilterSection = ({ isMobile = false }) => (
    <div
      className={`${
        isMobile ? "w-full" : "h-[500px] lg:w-[280px]"
      } border rounded-md p-5 mb-10 lg:mb-0`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">FILTERS</h3>
        <button className="text-sm cursor-pointer text-gray-500 hover:underline">
          CLEAR
        </button>
      </div>

      {/* Popular Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2">Popular filters</h4>
        {["Single Bed", "Double Bed", "Luxury Room", "Family Suite"].map(
          (filter, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                id={`filter-${isMobile ? "mobile-" : ""}${idx}`}
                className="accent-black cursor-pointer"
              />
              <label
                htmlFor={`filter-${isMobile ? "mobile-" : ""}${idx}`}
                className="text-sm cursor-pointer text-gray-700"
              >
                {filter}
              </label>
            </div>
          )
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2">Price Range</h4>
        {[
          "$ 0 to 500",
          "$ 500 to 1000",
          "$ 1000 to 2000",
          "$ 2000 to 3000",
        ].map((range, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              id={`price-${isMobile ? "mobile-" : ""}${idx}`}
              className="accent-black cursor-pointer"
            />
            <label
              htmlFor={`price-${isMobile ? "mobile-" : ""}${idx}`}
              className="text-sm cursor-pointer text-gray-700"
            >
              {range}
            </label>
          </div>
        ))}
      </div>

      {/* Sort By */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Sort By</h4>
        {["Price Low to High", "Price High to Low", "Newest First"].map(
          (sort, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name={`sort${isMobile ? "-mobile" : ""}`}
                id={`sort-${isMobile ? "mobile-" : ""}${idx}`}
                className="accent-black cursor-pointer"
              />
              <label
                htmlFor={`sort-${isMobile ? "mobile-" : ""}${idx}`}
                className="text-sm cursor-pointer text-gray-700"
              >
                {sort}
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="mb-5 lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Heading */}
      <div className="flex flex-col items-start text-left">
        <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2">
          Take advantage of our limited-time offers and special packages to{" "}
          <br />
          enhance your stay and create unforgettable memories.
        </p>
      </div>

      {/* Mobile Filter Toggle Button */}
      <div className="flex justify-end lg:hidden mt-6">
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="flex  justify-end items-center gap-2 bg-slate-400 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
          {showMobileFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Mobile Filter Section (Conditional) */}
      {showMobileFilter && (
        <div className="lg:hidden mt-4 animate-fade-in">
          <FilterSection isMobile={true} />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 w-full mt-8">
        {/* Room Cards */}
        <div className="w-full grid grid-cols-1 gap-8">
          {roomsDummyData.map((room) => (
            <div key={room._id} className="flex flex-col md:flex-row gap-4">
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View Room Details"
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              />

              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
                  {room.hotel.name}
                </p>

                <div className="flex items-center">
                  <p className="ml-2">200+ reviews</p>
                </div>

                <p className="text-sm text-gray-500">{room.hotel.address}</p>

                {/* Facilities */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {room.amenities?.map((facility, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg"
                    >
                      <img
                        src={facilityIcons[facility]}
                        alt={facility}
                        className="h-4 w-4 "
                      />
                      <span className="text-xs text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-semibold mt-2">
                  ${room.pricePerNight}{" "}
                  <span className="text-sm font-normal">/night</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Filters (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <FilterSection />
        </div>
      </div>

      <style>{`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
`}</style>
    </div>
  );
};

export default AllRooms;
