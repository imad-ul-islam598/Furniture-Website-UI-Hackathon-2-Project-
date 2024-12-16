import React from "react";
import Image from "next/image";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { BsSliders } from "react-icons/bs";
import { TiThLarge } from "react-icons/ti";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Premium Modular Sofa",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-1.png",
    },
    {
      id: 2,
      name: "Dining Table with Chairs",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-2.png",
    },
    {
      id: 3,
      name: "Outdoor Bar Table",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-3.png",
    },
    {
      id: 4,
      name: "Wooden Side Chair",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-4.png",
    },
    {
      id: 5,
      name: "Premium Modular Sofa",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-5.png",
    },
    {
      id: 6,
      name: "Dining Table with Chairs",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-6.png",
    },
    {
      id: 7,
      name: "Outdoor Bar Table",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-7.png",
    },
    {
      id: 8,
      name: "Wooden Side Chair",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-8.png",
    },
    {
      id: 9,
      name: "Premium Modular Sofa",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-9.png",
    },
    {
      id: 10,
      name: "Dining Table with Chairs",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-10.png",
    },
    {
      id: 11,
      name: "Outdoor Bar Table",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-11.png",
    },
    {
      id: 12,
      name: "Wooden Side Chair",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-12.png",
    },
    {
      id: 13,
      name: "Premium Modular Sofa",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-13.png",
    },
    {
      id: 14,
      name: "Dining Table with Chairs",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-14.png",
    },
    {
      id: 15,
      name: "Outdoor Bar Table",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-15.png",
    },
    {
      id: 16,
      name: "Wooden Side Chair",
      price: "Rs. 25,000.00",
      image: "/Shop Section Images/shop-image-16.png",
    },
    // Add more products as needed...
  ];

  return (
    <div>
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
          <h1 className="text-4xl font-bold text-black mb-2">Shop</h1>
          <p className="text-gray-600 text-sm">
            <span className="text-gray-400">Home</span> &gt; <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Filter and Options Section */}
      <div className="bg-white py-4 px-6 border-b border-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Filter and View Options */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-black">
              <BsSliders className="text-lg" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 text-black">
              <TiThLarge className="text-lg" />
            </button>
            <button className="flex items-center gap-2 text-black">
              <TfiLayoutMediaCenter className="text-lg" />
            </button>
            {/* For giving small line between the content */}
            <span className="h-5 border-r-2 text-white border-gray-500 "></span>

            <p className="text-[16px] text-black">
              Showing <strong>1-16</strong> of <strong>32</strong> results
            </p>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <label className="text-sm text-black">Show</label>
            <input
              type="number"
              defaultValue={16}
              className="w-16 border rounded px-2 py-1 text-center"
            />
            <label className="text-sm text-black">Short by</label>
            <div className="relative">
              <select className="border rounded px-3 py-1 appearance-none">
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-4 rounded hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-primary mt-2">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-6 gap-2">
        <button className="px-4 py-2 bg-yellow-100 rounded hover:bg-yellow-200">
          1
        </button>
        <button className="px-4 py-2 bg-yellow-100 rounded hover:bg-yellow-200">
          2
        </button>
        <button className="px-4 py-2 bg-yellow-100 rounded hover:bg-yellow-200">
          3
        </button>
        <button className="px-4 py-2 bg-yellow-100 rounded hover:bg-yellow-200">
          Next
        </button>
      </div>

      {/* Footer Benefits */}
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
    </div>
  );
};

export default Shop;
