import React from "react";

const CategoryNav = ({ categories, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-white/60 rounded-xl backdrop-blur">
      {categories.map((cat) => (
        <button
          key={cat.strCategory}
          className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm font-medium shadow-md transition hover:-translate-y-0.5"
          onClick={() => onSelect(cat.strCategory)}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;