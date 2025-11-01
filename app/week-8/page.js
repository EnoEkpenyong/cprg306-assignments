"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean up the item name by removing size, emoji, and extra spaces
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black p-4">
      <h1 className="text-3xl font-bold text-white m-2 text-center">
        Shopping List + Meal Ideas
      </h1>
      <div className="flex">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
