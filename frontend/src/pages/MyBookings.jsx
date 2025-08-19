import React, { useState } from "react";
import { userBookingsDummyData, assets } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Title Section */}
      <span className="block text-3xl font-bold mb-2">My Bookings</span>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Easily manage your past, current, and upcoming hotel reservations in one
        place. Plan your trips seamlessly with just a few clicks.
      </p>

      {/* Header Row (visible from md breakpoint) */}
      <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3 mb-4">
        <div>Hotels</div>
        <div>Date & Timings</div>
        <div>Payment</div>
      </div>

      {/* Booking Cards */}
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="grid md:grid-cols-[3fr_2fr_1fr] gap-6 border-b border-gray-200 pb-6 mb-6"
        >
          {/* Hotel Info */}
          <div className="flex gap-4">
            <img
              src={booking.room.images[0]} // Fix here for image path
              alt={booking.hotel.name}
              className="w-28 h-24 object-cover rounded-lg"
            />
            <div className="text-sm text-gray-700">
              <p className="font-semibold">
                {booking.hotel.name}
                <span className="text-gray-500 text-xs">
                  {" "}
                  ({booking.room.roomType})
                </span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {booking.hotel.address}
              </p>
              <div className="flex items-center gap-2 mt-1 text-sm">
                <img src={assets.userIcon} alt="guests" className="w-4 h-4" />
                Guests: {booking.guests}
              </div>
              <p className="mt-1 font-medium text-black">
                Total: ${booking.totalPrice}
              </p>
            </div>
          </div>

          {/* Date & Timing Info */}
          <div className="text-sm text-gray-700 flex flex-col justify-center">
            <p>
              <span className="font-semibold">Check-In:</span>{" "}
              {new Date(booking.checkInDate).toLocaleDateString()}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Check-Out:</span>{" "}
              {new Date(booking.checkOutDate).toLocaleDateString()}
            </p>
          </div>

          {/* Payment Info */}
          <div className="flex flex-col justify-center gap-2 text-sm">
            {booking.isPaid ? (
              <span className="text-green-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full inline-block" />
                Paid
              </span>
            ) : (
              <>
                <span className="text-red-600 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-600 rounded-full inline-block" />
                  Unpaid
                </span>
                <button className="px-4 py-1 border border-gray-400 rounded hover:bg-gray-100 w-max text-sm">
                  Pay now
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
