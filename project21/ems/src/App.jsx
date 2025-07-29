
import React from "react";
import { FaRegSmile } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center px-6">
      <div className="max-w-xl text-center bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-pink-500 text-6xl mb-4">
          <FaRegSmile className="inline-block" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Your Beautiful World 🌸
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          Build your glowing future with style and confidence. React + Tailwind gives you the power to shine!
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
