import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-black">
        <Link href="#" className="hover:text-gray-600">Home</Link>
        <Link href="/Shop" className="hover:text-gray-600">Shop</Link>
        <Link href="#" className="hover:text-gray-600">About</Link>
        <Link href="#" className="hover:text-gray-600">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-lg text-black">
        <FaUser className="cursor-pointer hover:text-gray-600" />
        <FaSearch className="cursor-pointer hover:text-gray-600" />
        <FaHeart className="cursor-pointer hover:text-gray-600" />
        <FaShoppingCart className="cursor-pointer hover:text-gray-600" />
      </div>
    </nav>
  );
};

export default Navbar;
