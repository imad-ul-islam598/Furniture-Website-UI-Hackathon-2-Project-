'use client'
import { useState } from "react";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
const AuthSection = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [registerDetails, setRegisterDetails] = useState({
    email: "",
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Details:", loginDetails);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Details:", registerDetails);
  };

  return (
    <>
    {/* Top Section */}
    <div className="relative bg-gray-100 w-full h-60">
        {/* Background Image */}
        <img
          src="/Shop Section Images/shop-image.jpg"
          alt="Shop Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-black mb-2">My Account</h1>
          <p className="text-gray-600 text-sm">
            <span className="text-gray-400">Home</span> &gt; <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-16 px-4">
      {/* Login Section */}
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-semibold mb-6 ml-5">Log In</h2>
        <form
          onSubmit={handleLoginSubmit}
          className="space-y-4 rounded-lg p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-base font-medium text-black"
            >
              Username or email address
            </label>
            <input
              type="text"
              id="username"
              value={loginDetails.username}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, username: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={loginDetails.rememberMe}
              onChange={(e) =>
                setLoginDetails({
                  ...loginDetails,
                  rememberMe: e.target.checked,
                })
              }
              className="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-base text-black"
            >
              Remember me
            </label>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-[150px] h-[45] bg-white text-black border border-black px-4 py-2 rounded-md hover:border-gray-500"
            >
              Log In
            </button>
            <a href="#" className="text-sm text-blue-500 font-semibold hover:underline">
              Lost Your Password?
            </a>
          </div>
        </form>
      </div>

      {/* Register Section */}
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-semibold mb-6 ml-5">Register</h2>
        <form
          onSubmit={handleRegisterSubmit}
          className="space-y-4 rounded-lg p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={registerDetails.email}
              onChange={(e) =>
                setRegisterDetails({ ...registerDetails, email: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <p className="text-sm font-light text-black0">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm font-light text-black">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              privacy policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-[150px] h-[45] bg-white text-black border border-black px-4 py-2 rounded-md hover:border-gray-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
        <footer className="bg-[#FAF4F4] py-8 px-10 mt-0">
        <div className="flex flex-col md:flex-row justify-evenly text-center md:text-start gap-6">
          <div>
            <h4 className="font-medium text-3xl">Free Delivery</h4>
            <p className="text-gray-500 text-lg mt-2">
            For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-3xl">90 Days Return</h4>
            <p className="text-gray-500 text-lg mt-2">
            If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-3xl">Secure Payment</h4>
            <p className="text-gray-500 text-lg mt-2">
            100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </footer>
      </>
  );
};

export default AuthSection;
