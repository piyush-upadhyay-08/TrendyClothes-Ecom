import { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';


const Header = ({ cartCount, onSearchToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 sm:space-x-8 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 cursor-pointer whitespace-nowrap">
              TrendyClothes
            </h1>
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Home</a>
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Shop</a>
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition whitespace-nowrap">About</a>
              <a href="#" className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition whitespace-nowrap">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
            <button onClick={onSearchToggle} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            <button 
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 flex flex-col space-y-2 sm:space-y-3 border-t pt-3 sm:pt-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 py-1">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 py-1">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 py-1">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 py-1">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header