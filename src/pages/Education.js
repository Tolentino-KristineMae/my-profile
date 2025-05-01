import React from "react";

export default function Education() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-teal-50 flex items-center justify-center px-4 py-16">
      {/* Background decorative blur */}
      <div className="absolute w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse -top-10 -left-10 z-0"></div>

      <div className="relative z-10 max-w-4xl bg-white shadow-2xl rounded-3xl p-10 border border-teal-100">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-10 text-center">Education</h2>

        <div className="space-y-8">
          {[
            {
              level: "Elementary",
              school: "Mamatid Elementary School",
            },
            {
              level: "Junior High School (Grade 7)",
              school: "St. Jerome Integrated School of Cabuyao Inc.",
            },
            {
              level: "Junior High School (Grades 8–10)",
              school: "Liceo de Mamatid",
            },
            {
              level: "Senior High School (Grade 11)",
              school: "AMA Computer College Calamba",
            },
            {
              level: "Senior High School (Grade 12)",
              school: "St. Ignatius Cabuyao Campus",
            },
            {
              level: "College (Present)",
              school: "University of Cabuyao – BS in Information Technology",
            },
          ].map((edu, index) => (
            <div key={index} className="relative pl-6 border-l-4 border-teal-400 group hover:border-teal-600 transition-all">
              <div className="absolute left-[-10px] top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white group-hover:bg-teal-700 transition-all"></div>
              <h3 className="text-xl font-semibold text-teal-700">{edu.level}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
