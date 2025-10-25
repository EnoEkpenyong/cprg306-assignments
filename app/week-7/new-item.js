"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  // State variables
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate random id
    const id = Math.random().toString(36).substring(2, 9);

    const item = {
      id: id,
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex justify-center items-center w-full mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md max-w-md w-full"
      >
        {/* Name Field */}
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-500 rounded-lg p-2 text-black"
            placeholder="Item name"
          />
        </div>

        {/* Quantity Field */}
        <div className="flex items-center bg-white p-2 gap-2 mb-4">
          <div className="w-16 h-16 flex items-center justify-center border-2 border-black rounded-lg text-2xl font-semibold text-black">
            {quantity}
          </div>

          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="w-16 h-16 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            -
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="w-16 h-16 bg-blue-500 text-white rounded-lg text-3xl font-bold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            +
          </button>
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
