// app/projects/[slug]/page.js
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";


export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-4xl font-bold text-[var(--brand-color)] font-poppins">
          {project.title}
        </h1>
        <p className="text-gray-700 text-justify">
          {project.description}
        </p>

        {/* Optional: Add more info if you have it */}
        {project.technologies && (
          <div>
            <h3 className="text-lg font-semibold mt-4">Technologies Used:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
