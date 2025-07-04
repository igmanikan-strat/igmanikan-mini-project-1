'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa] text-center px-6">
      <div className="max-w-2xl space-y-6">
        <div className="text-4xl font-bold">
          Hi, I am <span className="text-[var(--brand-color)]">Isaiah Gabriel Manikan</span>
        </div>


        <p className="text-gray-600 mt-4 mb-8 max-w-xl">
          Here is my portfolio with all the projects I have done and currently am doing.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { href: "/about", label: "About Me" },
            { href: "/projects", label: "My Projects" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative inline-block min-w-[160px] text-center px-6 py-3 rounded-full font-poppins font-semibold text-[var(--brand-color)] border-2 border-[var(--brand-color)] overflow-hidden transition-transform duration-300 transform hover:scale-105 no-underline"
            >
              {/* Background hover fill effect */}
              <span className="absolute inset-0 bg-[var(--hover-color)] w-0 group-hover:w-full transition-all duration-700 ease-out z-0 left-0 top-0"></span>

              {/* Button text stays on top */}
              <span className="relative z-10 text-[var(--brand-color)] group-hover:text-black">{label}</span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
  
}
