import React from "react";

export default function SidebarMenu({ menuOpen, setMenuOpen, setSortOrder, sortOrder }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-md transform ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 md:relative md:block`}
    >
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="lowToHigh"
            checked={sortOrder === "lowToHigh"}
            onChange={() => setSortOrder("lowToHigh")}
          />
          <span>Price: Low to High</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="highToLow"
            checked={sortOrder === "highToLow"}
            onChange={() => setSortOrder("highToLow")}
          />
          <span>Price: High to Low</span>
        </label>
      </div>

      {/* Close button for mobile */}
      <button
        className="md:hidden mt-4 p-2 bg-gray-200 rounded-md"
        onClick={() => setMenuOpen(false)}
      >
        Close Menu
      </button>
    </div>
  );
}
