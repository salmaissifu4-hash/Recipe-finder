import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch, placeholder = "Search for recipes, ingredients, or cuisines..." }) => {
  const handleInputChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="max-w-md mx-auto my-8 bg-white dark:bg-gray-800 backdrop-blur rounded-2xl shadow-lg p-3 flex items-center gap-3">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(searchTerm);
          }
        }}
      />
      <button
        onClick={() => onSearch(searchTerm)}
        className="px-4 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap"
      >
        <i className="fas fa-search mr-2"></i>Search
      </button>
    </div>
  );
};

export default SearchBar;
