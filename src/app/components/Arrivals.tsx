import Image from "next/image";
import Link from "next/link";

const Arrivals = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 bg-yellow-50">
      {/* Left Section: Image */}
      <div className="lg:w-full h-full justify-center">
        <Image
          src="/Home Section Images/Arrival-image.png"
          alt="Asgaard sofa"
          width={985}
          height={700}
          className="cover"
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 lg:text-left space-y-4">
        <h4 className="text-2xl text-center text-black">New Arrivals</h4>
        <h2 className="text-4xl pb-8 text-center font-semibold text-black leading-snug">
          Asgaard Sofa            
        </h2>
        <div className="ml-6">
        <Link
          href="#"
          className="inline-block w-[210px] h-[50px] text-xl text-center content-center font-medium text-black border border-black bg-yellow-50 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Order Now
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
