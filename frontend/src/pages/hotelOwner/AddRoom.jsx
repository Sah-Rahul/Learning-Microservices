import { useState } from "react";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    PricePerNight: 0,
    amenities: {
      "Free WiFI": false,
      "Free Breakfast": false,
      "Room Services": false,
      "Mountains View": false,
      "Pool Access": false,
    },
  });
  return (
    <form>
      <h2 className="text-2xl font-semibold mb-2">Add Room</h2>
      <p className="text-gray-600 mb-6">
        Fill in the details carefully and accurate room details, pricing, and{" "}
        <br /> amenities, to enhance the user booking experience.
      </p>

      {/* Upload Area For Images */}
      <p className="text-gray-800 mt-10 mb-2">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-32 w-32 object-cover border rounded cursor-pointer opacity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            onChange={() => setInput({ ...input, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room<">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div className="mt-4">
          <p>
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={input.PricePerNight}
            onChange={(e) =>
              setInput({ ...input, PricePerNight: e.target.value })
            }
          />
        </div>
      </div>
      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(input.amenities).map((amenity, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={input.amenities[amenity]}
              onChange={() =>
                setInput({
                  ...input,
                  amenities: {
                    ...input.amenities,
                    [amenity]: !input.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mb-10 bg-green-500 text-white px-8 py-2 rounded mt-8 cursor-pointer hover:bg-primary-dark transition duration-200"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
