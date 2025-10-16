import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementVenue, decrementVenue } from "../slices/venueData";
import { Button } from "@/components/ui/button";

function VenuePage() {
  const dispatch = useDispatch();
  const venues = useSelector((state: any) => state.venueData.venue);

  // compute subtotal
  const subtotal = venues.reduce(
    (acc: any, room: any) => acc + room.price * room.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-10">
      <div
        className="text-5xl font-semibold p-20"
        style={{ fontFamily: "Poppins" }}
      >
        Venue
      </div>

      <div className="grid grid-cols-3 gap-6">
        {venues.map((room, i) => (
          <div
            key={i}
            className="border p-6 rounded-2xl shadow-md hover:shadow-lg transition w-80"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-40 object-cover border-2 rounded-2xl mb-3"
            />
            <h2 className="text-xl font-bold mb-2">{room.name}</h2>
            <p className="text-gray-600">Capacity: {room.capacity}</p>
            <p className="text-gray-700 font-semibold mt-1">
              Price: ₱{room.price.toLocaleString()}
            </p>

            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => dispatch(decrementVenue(i))}
                className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold"
              >
                -
              </button>
              <span className="text-lg font-medium">{room.quantity}</span>
              <button
                onClick={() => dispatch(incrementVenue(i))}
                className="px-3 py-1 bg-blue-500 text-white rounded text-lg font-semibold"
              >
                +
              </button>
            </div>

            <div className="text-center text-gray-700 mt-3">
              Subtotal: ₱{(room.price * room.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-3xl font-bold text-gray-800 mb-10">
        Total Venue Cost: ₱{subtotal.toLocaleString()}
      </div>
    </div>
  );
}

export default VenuePage;
