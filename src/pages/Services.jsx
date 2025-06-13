export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Services & Offerings</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Idea Validation & Mentoring</h2>
          <p>Expert guidance to refine your startup idea from ideation to execution.</p>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Infrastructure & Co-Working Space</h2>
          <p>Access to labs, internet, co-working space, and prototyping tools.</p>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Seed Funding Support</h2>
          <p>Connection to government schemes and angel investors.</p>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Workshops & Training</h2>
          <p>Bootcamps, hackathons, design thinking, and upskilling events.</p>
        </li>
        <li className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Networking & Exposure</h2>
          <p>Startup expos, alumni interaction, and collaboration platforms.</p>
        </li>
      </ul>
    </div>
  );
}