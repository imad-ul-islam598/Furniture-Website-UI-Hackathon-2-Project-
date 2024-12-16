import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-16 bg-yellow-100">
        {/* Left Section: Text */}
        <div className="text-center lg:text-left max-w-md space-y-4">
          <h1 className="text-[64px] lg:text-5xl font-normal leading-tight ml-10 text-black">
            Rocket single <br /> seater
          </h1>
          <Link
            href="#"
            className="inline-block mt-4 text-[24px] text-black ml-10 hover:underline"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="w-full max-w-lg">
          <Image
            src="/Home Section Images/hero-image.png"
            alt="Rocket single seater"
            width={853}
            height={1000}
            className="object-cover"
          />
        </div>
      </section>

      {/* Side Table Section */}
      <section className="py-16 bg-[#FAF4F4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/table-image-1.png"
                alt="Side Table"
                width={200}
                height={200}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-medium text-black">Side table</h3>
              <Link
                href="#"
                className="mt-2 text-sm font-medium text-black underline hover:text-gray-600"
              >
                View More
              </Link>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/table-image-2.png"
                alt="Side Table"
                width={200}
                height={200}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-medium text-black">Side table</h3>
              <Link
                href="#"
                className="mt-2 text-sm font-medium text-black underline hover:text-gray-600"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks For You Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Top Picks For You
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/top-picture-1.png"
                alt="Product"
                width={150}
                height={150}
                className="object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-black">
                Trenton modular sofa...3
              </h3>
              <p className="text-sm text-gray-600">Rs. 25,000.00</p>
            </div>
            {/* Product Card 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/top-picture-2.png"
                alt="Product"
                width={150}
                height={150}
                className="object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-black">
                Granite dining table with dining chair
              </h3>
              <p className="text-sm text-gray-600">Rs. 25,000.00</p>
            </div>
            {/* Product Card 3 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/top-picture-3.png"
                alt="Product"
                width={150}
                height={150}
                className="object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-black">
                Outdoor bar table and stool
              </h3>
              <p className="text-sm text-gray-600">Rs. 25,000.00</p>
            </div>
            {/* Product Card 4 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Home Section Images/top-picture-4.png"
                alt="Product"
                width={150}
                height={150}
                className="object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-black">
                Plain console with teak mirror
              </h3>
              <p className="text-sm text-gray-600">Rs. 25,000.00</p>
            </div>
          </div>
          <Link
            href="#"
            className="inline-block mt-8 px-6 py-2 text-black text-2xl font-medium rounded-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            View More
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
