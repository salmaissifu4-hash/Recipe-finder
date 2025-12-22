import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 dark:from-orange-700 dark:via-orange-800 dark:to-green-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          Created by <span className="font-bold">Salma Godiya Issifu, RD</span>
        </p>
        <p className="text-xs md:text-sm mt-2 opacity-90">
          © {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
