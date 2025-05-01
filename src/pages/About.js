import React from "react";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-100 to-white overflow-hidden flex items-center justify-center px-4 py-16">
      {/* Decorative blob shape */}
      <div className="absolute w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-[-10%] left-[-10%] z-0"></div>

      <div className="relative z-10 max-w-3xl bg-white rounded-3xl shadow-2xl p-10 text-center border border-teal-100">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-6">About Me</h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Hi! I'm <span className="text-teal-600 font-semibold">Kristine MAE</span>. I love watching horror movies — the suspense and thrill always keep me on edge! 👻
          But if you offer me <em>ampalaya</em>, I’ll respectfully run the other way. 😅
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I'm a massive fan of electronic music. My childhood dream? Becoming a DJ! 🎧 Beats, bass, and a little bit of chaos — just like my life.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Sports keep me active — basketball, volleyball, and badminton are my jam! 🏀🏐🏸 They help me burn off the calories from all the snacks I eat while coding.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          And when I'm not debugging my code or life, you’ll find me cooking. 👩‍🍳 My kitchen is my lab — and yes, sometimes things explode (just like in JavaScript).
        </p>
      </div>
    </div>
  );
}
