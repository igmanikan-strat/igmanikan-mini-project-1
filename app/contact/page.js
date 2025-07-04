export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6f3ff] to-[#e9e4fa] px-6 py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-2">
          <h2 className="text-xl font-semibold text-[var(--brand-color)] font-poppins">
            My Email
          </h2>
          <p className="text-gray-700 break-words">i_isaiah.manikan@stratpoint.com</p>
        </div>

        {/* Contact Number Card */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-2">
          <h2 className="text-xl font-semibold text-[var(--brand-color)] font-poppins">
            My Contact Number
          </h2>
          <p className="text-gray-700">+63 995 170 3633</p>
        </div>

        {/* Address Card */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-2">
          <h2 className="text-xl font-semibold text-[var(--brand-color)] font-poppins">
            My Address
          </h2>
          <p className="text-gray-700">Globe Telecom Plaza Tower 1 Pioneer, cor Madison, Mandaluyong City, 1550 Metro Manila</p>
        </div>
      </div>
    </main>
  );
}
