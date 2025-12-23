import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listCategories } from "../services/mealApi";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const fetchedCategories = await listCategories();
      setCategories(fetchedCategories);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <div className="text-orange-500 text-xl">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Loading categories...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent mb-2">
          Recipe Categories
        </h1>
        <p className="text-gray-600">Browse recipes by category</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-lg md:text-xl text-center drop-shadow-lg">
                  {category.strCategory}
                </h3>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-r from-orange-50 to-green-50">
              <p className="text-gray-700 text-xs md:text-sm line-clamp-2 text-center">
                {category.strCategoryDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
