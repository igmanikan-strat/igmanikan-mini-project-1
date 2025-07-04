import Link from "next/link";
import { projects } from "../../data/projects";


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[var(--brand-color)] font-poppins">
          My Projects
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 space-y-4 transition transform hover:scale-100 scale-90"
            >
              <h2 className="text-2xl font-semibold text-[var(--brand-color)]">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <span className="inline-block mt-2 text-sm font-medium text-[var(--brand-color)] underline">
                View Project →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
