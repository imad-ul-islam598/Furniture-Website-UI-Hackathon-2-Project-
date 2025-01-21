import React from "react";

const Instagram: React.FC = () => {
    return (
        <section
            className="relative bg-yellow-50 py-16 text-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/Home Section Images/instagram-section-image.jpg')",
            }}
        >
            <div className="relative z-10">
                <h2 className="text-4xl font-bold text-black">Our Instagram</h2>
                <p className="mt-2 text-lg text-gray-600">
                    Follow our store on Instagram
                </p>
                <button className="mt-6 px-8 py-3 w-[255px] h-[64px] bg-white shadow-lg text-black text-xl font-medium rounded-full hover:shadow-xl transition">
                    Follow Us
                </button>
            </div>
            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-white opacity-20 pointer-events-none"></div>
        </section>
    );
};

export default Instagram;
