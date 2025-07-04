import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa] flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        
        {/* LEFT: Text Box */}
        <div className="bg-white p-8 rounded-xl shadow-md text-justify space-y-6">
          <h1 className="text-3xl font-bold text-[var(--brand-color)] text-center font-poppins">
            About Me
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Hello there! I am Isaiah Gabriel S. Manikan I am currently an intern in Stratpoint Technologies 
            I am a web intern and I am doing this portfolio not only as my requirement but also for my future 
            projects that I am going to make as an intern here.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/isaiah_profile.jpg"
              alt="Profile"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
