import React from "react";
import { assets } from "../assets/assets";
import { exclusiveOffers } from "../assets/assets";

const offersData = [
  {
    id: 1,
    discount: "25% OFF",
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    expiry: "Aug 31",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    discount: "20% OFF",
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    expiry: "Sep 20",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    discount: "30% OFF",
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    expiry: "Sep 25",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
];

const ExclusiveOffers = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Exclusive Offers
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        <button className="text-sm flex items-center gap-2 cursor-pointer text-gray-800 font-medium group   md:inline-flex">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt=""
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exclusiveOffers.map((offer, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <div
              className="relative h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              <span className="absolute top-3 left-3 text-xs bg-white px-3 py-1 rounded-full font-medium">
                {offer.priceOff}% OFF
              </span>
            </div>

            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{offer.description}</p>
              <p className="text-sm text-gray-400 mt-1">
                Expires {offer.expiryDate}
              </p>
              <button className="mt-4 text-sm flex items-center gap-2 cursor-pointer text-gray-800 font-medium group   md:inline-flex">
                View All Offers
                <img
                  src={assets.arrowIcon}
                  alt=""
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
