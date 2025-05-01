import React from "react";

export default function Projects() {
  const projectData = [
    {
      title: "CAPSTONE 1",
      description: "Chapter 1 - 3 Minor Revisions",
    },
    {
      title: "ITP107 Portfolio (LEC)",
      description: "Create Portfolio for Mobile Application Development",
    },
    {
      title: "ITP107 Portfolio (LAB)",
      description: "Create the Lab Exam for Mobile Application Development",
    },
    {
      title: "ITEW4 Group Website",
      description: "Create Final Project for Responsive Web Design",
    },
  ];

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center px-2 py-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-extrabold text-center text-teal-700 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-teal-100 transition-all hover:-translate-y-1 hover:border-teal-300"
            >
              <h3 className="text-2xl font-bold text-teal-700 group-hover:text-teal-900 transition">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
