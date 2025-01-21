import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-6 md:px-16 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="text-sm text-gray-500 leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/Home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-gray-700 font-semibold mb-4">Newsletter</h4>
            <form className="flex border-b border-black focus-within:border-black">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full py-2 text-sm text-gray-600 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="text-sm text-black font-semibold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-500">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
