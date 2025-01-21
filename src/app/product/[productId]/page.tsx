"use client";
import Image from "next/image";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext not found. Make sure to wrap the app with CartProvider.");
  }
  const { addToCart } = cartContext;

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [mainImage, setMainImage] = useState(
    "/Asgard Sofa Images/preview-item.png"
  );
  const [activeTab, setActiveTab] = useState("Description");
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 4, comment: "Great product!" },
    { name: "Jane Smith", rating: 5, comment: "Absolutely love it!" },
  ]);
  const [newReview, setNewReview] = useState("");

  const previewImages = [
    "/Asgard Sofa Images/image-1.png",
    "/Asgard Sofa Images/image-2.png",
    "/Asgard Sofa Images/image-3.png",
    "/Asgard Sofa Images/image-4.png",
  ];

  const handleQuantityChange = (action: string) => {
    if (action === "increment") setQuantity(quantity + 1);
    if (action === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  // Product Detail
  const product = {
    name: "Asgaard Sofa",
    price: "250,000.00",
    rating: 4.5,
    reviewsCount: 5,
    // description:
    // "Setting the bar as one of the loudest speakers in its class, the Asgaard Sofa combines style, comfort, and durability...",
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    colors: ["#816DFA", "#000000", "#CDBA7B"],
    sizes: ["S", "M", "L", "XL"],
    share: ["Facebook", "Twitter", "Instagram"],
    // images: ["/Asgard Sofa Images/image-1.png", "/Asgard Sofa Images/image-2.png", "/Asgard Sofa Images/image-3.png"], // Replace with actual paths
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }
    const newItem = {
      id: params.productId,
      name: "Asgaard Sofa",
      price: 250000,
      quantity,
      size: selectedSize,
      color: selectedColor,
      image: mainImage,
    };
    addToCart(newItem);
    alert("Item added to cart!");
  };

  const handleAddReview = () => {
    if (!newReview.trim()) {
      alert("Please enter a review.");
      return;
    }
    setReviews([...reviews, { name: "Anonymous", rating, comment: newReview }]);
    setNewReview("");
    setRating(0);
    alert("Review added successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="flex">
          <div className="flex flex-col gap-2">
            {previewImages.map((src, index) => (
              <div
                key={index}
                className={`w-[80px] h-[80px] relative border cursor-pointer ${mainImage === src ? "border-black" : "border-gray-200"
                  }`}
                onClick={() => setMainImage(src)}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  layout="intrinsic"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-[400px] relative ml-4">
            <Image
              src={mainImage}
              alt="Asgaard Sofa"
              layout="responsive"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
          <p className="text-xl text-gray-600">Rs. 250,000.00</p>
          {/* Ratings */}
          <div className="flex items-center mt-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  onClick={() => setRating(i + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-500 ml-2">{rating}/5</p>
          </div>
          <p className="mt-4 text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size & Color */}

          {/* Sizes */}
          <div className="mt-6">
            <h4 className="text-lg font-medium">Size</h4>
            <div className="flex gap-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md ${selectedSize === size
                    ? 'bg-[#FBEBB5] text-black'
                    : 'bg-[#FAF4F4] border border-[#FAF4F4] hover:border-gray-400'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>


          {/* Colors */}
          <div className="mt-6">
            <h4 className="text-lg font-medium">Color</h4>
            <div className="flex gap-4 mt-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color
                    ? 'border border-gray-600'
                    : 'border-0'
                    }`}
                />
              ))}
            </div>
          </div>


          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border border-gray-300">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="w-8 h-8 flex items-center justify-center bg-gray-100"
              >
                -
              </button>
              <div className="px-4">{quantity}</div>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="w-8 h-8 flex items-center justify-center bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-10">
            <div className="mt-6 text-[#9F9F9F]">
              <p>SKU: {product.sku}</p>
              <p>Category: {product.category}</p>
              <p>Tags: {product.tags.join(", ")}</p>
              <p>Share: {product.share}</p>
            </div>
          </div>
        </div>
      </div>


      {/* Product Details */}


      {/* Tabs Section */}
      <div className="mt-10">
        <div className="flex gap-4 border-b border-gray-200">
          {["Description", "Additional Information", "Reviews"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-600"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Description" && (
          <div className="mt-4 text-base text-[#9F9F9F]">
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p><br /><br />
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        )}
        {activeTab === "Additional Information" && (
          <div className="mt-4 text-base text-[#9F9F9F]">
            <p>Beautiful, lightweight Furniture which give outstanding look to your room.</p>

            {/* Description Images */}
            <div className="overflow-hidden mt-10 flex gap-4">
              <Image src="/Asgard Sofa Images/description-image-1.png" alt="Asgard Sofa" width={500} height={500} />
              <Image src="/Asgard Sofa Images/description-image-2.png" alt="Asgard Sofa" width={500} height={500} />
            </div>
          </div>
        )}
        {activeTab === "Reviews" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <div className="mt-2">
              {reviews.length ? (
                reviews.map((review, index) => (
                  <div key={index} className="mt-4">
                    <p className="text-sm font-medium">{review.name}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < review.rating ? "text-yellow-500" : "text-gray-300"
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No reviews yet. Be the first to write one!</p>
              )}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-medium">Write a Review</h4>
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                rows={3}
                placeholder="Write your review here..."
              />
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      onClick={() => setRating(i + 1)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-500">{rating}/5</p>
              </div>
              <button
                onClick={handleAddReview}
                className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800 transition rounded"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;