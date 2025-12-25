import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export default function ShoppingList() {
  const { items } = useContext(ShoppingContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Shopping List</h2>
      {items.length === 0 && <p>No items added.</p>}
      <ul className="list-disc ml-6">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
