import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setPeople, toggleMeal } from "../slices/mealData";

function MealsPage() {
  const dispatch = useDispatch();
  const { meals, people } = useSelector((state: RootState) => state.mealsData);
  {
    console.log(meals);
  }

  const subtotal = meals
    .filter((m: any) => m.selected)
    .reduce((acc: any, meal: any) => acc + meal.pricePerPerson * people, 0);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-24">
      <div
        className="text-5xl font-semibold p-20"
        style={{ fontFamily: "Poppins" }}
      >
        Meals
      </div>

      {/* ComboBox for number of people */}
      <div className="mb-10">
        <label className="font-semibold text-lg mr-3">Number of People:</label>
        <select
          value={people}
          onChange={(e) => dispatch(setPeople(Number(e.target.value)))}
          className="border border-gray-300 rounded-lg px-3 py-1"
        >
          <option value={0}>Select</option>
          {[...Array(50)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Meals List */}
      <div className="grid grid-cols-3 gap-6">
        {meals.map((meal: any, index: number) => (
          <div
            key={index}
            className={`border p-6 rounded-2xl shadow-md cursor-pointer ${
              meal.selected ? "bg-blue-100 border-blue-400" : "hover:shadow-lg"
            }`}
            onClick={() => dispatch(toggleMeal(index))}
          >
            <h2 className="text-xl font-bold mb-2">{meal.name}</h2>
            <p className="text-gray-700 font-semibold">
              Price: ₱{meal.pricePerPerson.toLocaleString()} per person
            </p>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-10 text-2xl font-semibold">
        Subtotal: ₱{subtotal.toLocaleString()}
      </div>
    </div>
  );
}

export default MealsPage;
