import React from "react";
import pic from "../assets/pic.jpeg"; // ✅ Image path

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 via-white to-teal-200 p-6">
      {/* Profile image */}
      <img
        src={pic}
        alt="Kristine MAE"
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-8 border-white shadow-2xl mb-8 transition-transform duration-500 hover:scale-105"
      />

      {/* Welcome messages */}
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 drop-shadow-md mb-4">
          Hello! I'm Mae!
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-teal-800 drop-shadow-sm">
          Welcome to my Profile.
        </h3>
        <p className="mt-4 text-lg text-teal-700 max-w-xl mx-auto">
          I'm a 3rd Year IT Student. Currently not debugging codes, but my life.
        </p>
      </div>
    </div>
  );
};

export default Home;
