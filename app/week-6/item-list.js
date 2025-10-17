"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`p-2 m-2 ${
            sortBy === "name" ? "bg-blue-500" : "bg-gray-400"
          } text-white rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 m-2 ${
            sortBy === "category" ? "bg-blue-500" : "bg-gray-400"
          } text-white rounded`}
        >
          Sort by Category
        </button>
      </div>

      {/* Display Items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
