import { X } from "lucide-react";

const SearchBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white border-b shadow-lg py-4 px-4">
      <div className="container mx-auto flex items-center">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={onClose}
          className="ml-4 text-gray-600 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
