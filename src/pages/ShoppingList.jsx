import React, { useState, useEffect } from "react";
import { getShoppingList, saveShoppingList } from "../utils/storage";

export default function ShoppingList() {
  const [items, setItems] = useState(getShoppingList());
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;
    const updated = [...items, input.trim()];
    setItems(updated);
    saveShoppingList(updated);
    setInput("");
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    saveShoppingList(updated);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">Shopping List</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add ingredient..."
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") addItem();
          }}
        />
        <button
          onClick={addItem}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg"
        >
          Add
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-center">Your shopping list is empty.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded shadow"
            >
              {item}
              <button
                onClick={() => removeItem(idx)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
