import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAddons, decrementAddons } from "../slices/addonsData";

function AddonsPage() {
  const dispatch = useDispatch();
  const addons = useSelector((state: any) => state.addonsData.addons);

  // compute subtotal
  const subtotal = addons.reduce(
    (acc: any, addon: any) => acc + addn.price * addon.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-10">
      <div
        className="text-5xl font-semibold p-20"
        style={{ fontFamily: "Poppins" }}
      >
        Addon Selection
      </div>

      <div className="grid grid-cols-3 gap-6">
        {addons.map((addon, i) => (
          <div
            key={i}
            className="border p-6 rounded-2xl shadow-md hover:shadow-lg transition w-80"
          >
            <img
              src={addon.image}
              alt={addon.name}
              className="w-full h-40 object-cover border-2 rounded-2xl mb-3"
            />
            <h2 className="text-xl font-bold mb-2">{addon.name}</h2>
            <p className="text-gray-700 font-semibold mt-1">
              Price: ₱{addon.price.toLocaleString()}
            </p>

            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => dispatch(decrementAddons(i))}
                className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold"
              >
                -
              </button>
              <span className="text-lg font-medium">{addon.quantity}</span>
              <button
                onClick={() => dispatch(incrementAddons(i))}
                className="px-3 py-1 bg-blue-500 text-white rounded text-lg font-semibold"
              >
                +
              </button>
            </div>

            <div className="text-center text-gray-700 mt-3">
              Subtotal: ₱{(addon.price * addon.quantity).toLocaleString()}
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

export default AddonsPage;
