'use client'
import { useState } from "react";
import Link from "next/link";
import { FiHeart, FiSearch } from "react-icons/fi";
import { TbUserExclamation } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-orange-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-orange-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Profile Icon */}
          <Link href="/Account"><TbUserExclamation size={26} className="cursor-pointer hover:text-orange-300" /></Link>

          {/* Search Icon */}
          <div className="relative z-10">
            <FiSearch
              size={24}
              className="cursor-pointer hover:text-orange-300"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            {searchOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-md p-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Heart Icon */}
          <FiHeart size={24} className="cursor-pointer hover:text-orange-300" />

          {/* Cart Icon */}
          <Link href="/cart">
            <div className="relative z-10">
              <BsCart3
                size={24}
                className="cursor-pointer hover:text-orange-300"
                onClick={() => setCartOpen(!cartOpen)}
              />
              {/* {cartOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-md p-4 z-50">
                <h3 className="font-medium text-lg">Your Cart</h3>
                <p className="text-gray-500 mt-2">No items in the cart.</p>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90">
                  Checkout
                </button>
              </div>    // This section open cart window on click of cart icon
            )} */}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-4 flex justify-center space-x-4 text-base font-medium">
        <Link href="/" className="hover:text-orange-300">
          Home
        </Link>
        <Link href="/shop" className="hover:text-orange-300">
          Shop  
        </Link>
        <Link href="/about" className="hover:text-orange-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-orange-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
