import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="px-6 lg:px-16 py-16 bg-white">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-black">Our Blogs</h2>
        <p className="text-gray-500 mt-4 text-base lg:text-lg">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Card 1 */}
        <div className="flex flex-col items-center bg-white overflow-hidden hover:shadow-md transition w-full max-w-[360px] mx-auto">
          <Image
            src="/Home Section Images/blog-image-1.png"
            alt="Blog Post 1"
            width={400}
            height={300}
            className="rounded-t-lg object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg lg:text-[16px] font-medium text-black leading-tight">
              Going all-in with millennial design
            </h3>
            <Link
              href="#"
              className="block mt-3 text-base font-semibold text-black relative group w-fit mx-auto text-center"
            >
              Read More
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>

            <div className="flex items-center justify-center mt-4 text-gray-500 text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <span>🕒</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex flex-col items-center bg-white overflow-hidden hover:shadow-md transition w-full max-w-[360px] mx-auto">
          <Image
            src="/Home Section Images/blog-image-2.png"
            alt="Blog Post 2"
            width={400}
            height={300}
            className="rounded-t-lg object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg lg:text-[16px] font-medium text-black leading-tight">
              Going all-in with millennial design
            </h3>
            <Link
              href="#"
              className="block mt-3 text-base font-semibold text-black relative group w-fit mx-auto text-center"
            >
              Read More
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>

            <div className="flex items-center justify-center mt-4 text-gray-500 text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <span>🕒</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="flex flex-col items-center bg-white overflow-hidden hover:shadow-md transition w-full max-w-[360px] mx-auto">
          <Image
            src="/Home Section Images/blog-image-3.png"
            alt="Blog Post 3"
            width={400}
            height={300}
            className="rounded-t-lg object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg lg:text-[16px] font-medium text-black leading-tight">
              Going all-in with millennial design
            </h3>
            <Link
              href="#"
              className="block mt-3 text-base font-semibold text-black relative group w-fit mx-auto text-center"
            >
              Read More
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>

            <div className="flex items-center justify-center mt-4 text-gray-500 text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <span>🕒</span>
                <span>5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Post */}
      <div className="text-center mt-12">
        <Link
          href="#"
          className="inline-block px-6 py-2 text-black text-xl font-medium rounded-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          View All Post
        </Link>
      </div>
    </section>
  );
};

export default Blog;
