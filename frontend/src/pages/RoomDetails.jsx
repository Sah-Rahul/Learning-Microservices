import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  facilityIcons,
  assets,
  roomsDummyData,
  roomCommonData,
} from "../assets/assets";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    if (room) {
      setRoom(room);
      setMainImage(room.images[0]);
    }
  }, [id]);

  if (!room || !mainImage) return <div>Loading...</div>;

  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">{room.name}</h2>

      {/* Images */}
      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        {/* Main image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt={`Main of ${room.name}`}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.map((image, index) => (
            <img
              key={index}
              onClick={() => setMainImage(image)}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                mainImage === image ? "outline-4 outline-green-500" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtitle & Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className="text-2xl font-semibold mb-3 md:mb-0">
          Experience Luxury Like Never Before
        </h3>
        <p className="text-xl font-bold text-right">
          ${room.pricePerNight}/night
        </p>
      </div>

      {/* Amenities */}
      <div className="flex flex-wrap gap-4 mb-10">
        {Object.entries(facilityIcons)
          .slice(0, 3)
          .map(([label, icon], index) => (
            <span
              key={index}
              className="bg-gray-100 text-sm px-4 py-2 rounded-md flex items-center gap-2"
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              {label}
            </span>
          ))}
      </div>

      {/* Availability Form */}
      <div className="bg-white rounded-xl shadow-md px-6 py-6 md:py-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col w-full md:w-1/4">
          <label htmlFor="checkIn" className="text-sm font-medium mb-1">
            Check-In
          </label>
          <input
            type="date"
            id="checkIn"
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/4">
          <label htmlFor="checkOut" className="text-sm font-medium mb-1">
            Check-Out
          </label>
          <input
            type="date"
            id="checkOut"
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/6">
          <label htmlFor="guests" className="text-sm font-medium mb-1">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            defaultValue="1"
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <button className="mt-5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-5 py-2.5 w-full md:w-auto">
          Check Availability
        </button>
      </div>

      {/* Room Common Info */}
      <div className="mt-10 space-y-6">
        {roomCommonData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.icon} alt={item.title} className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider & Description */}
      <hr className="my-10" />
      <p className="text-gray-700 text-sm leading-relaxed mb-10">
        Guests will be allocated on the ground floor according to availability.
        You get a comfortable Two bedroom apartment that has a true city
        feeling. The price quoted is for two guest, at the guest slot please
        mark the number of guests to get the exact price for groups. The Guests
        will be allocated ground floor according to availability. You get the
        comfortable two bedroom apartment that has a true city feeling.
      </p>
      <hr className="mb-10" />

      {/* Host Info */}
      <div className="flex items-center gap-4 mb-10">
        <img
          src='https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zMVN4cDhtOUhmS1g4UHpJSGcxUWJoNnc3MVMifQ?width=80'
          alt="Host"
          className="w-10 h-10 overflow-hidden rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{room.hotel.name}</p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-orange-500">★★★★☆</span>
            <span>200+ reviews</span>
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md">
        Contact Now
      </button>
    </div>
  );
};

export default RoomDetails;
