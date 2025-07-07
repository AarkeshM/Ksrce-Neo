const startupSpotlight = [
  {
    title: "Tech Innovators Inc.",
    desc: "Accelerating innovation with cutting-edge AI solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpU2z8ZT0zhVrRAaop470uzpZTkRospjf0OA&s",
  },
  {
    title: "Eco Solutions Ltd.",
    desc: "Sustainable energy solutions for a greener future.",
    image: "/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDVgc3Gchg7jzz_rLUD4IxWqRTmxA7Lp6hw&s",
  },
  {
    title: "Digital Dynamics Co.",
    desc: "Enhancing productivity with data-driven strategies.",
    image: "https://gingermediagroup.com/wp-content/uploads/2022/09/Untitled-1-1024x576.jpg",
  },
];

const currentStartups = [
  { title: "HealthTech Innovations", desc: "Revolutionizing wearable health monitoring tech.", image: "/images/c1.jpg" },
  { title: "EduGrowth Solutions", desc: "Smart learning tools for skill development.", image: "/images/c2.jpg" },
  { title: "AgriTech Pioneers", desc: "AI-driven farming tech for smart agriculture.", image: "/images/c3.jpg" },
  { title: "FinTech Ventures", desc: "Simplifying finance through seamless solutions.", image: "/images/c4.jpg" },
  { title: "SmartCity Systems", desc: "Designing intelligent urban infrastructure.", image: "/images/c5.jpg" },
  { title: "Creative Minds Studio", desc: "Fostering creative content creation tools.", image: "/images/c6.jpg" },
];

const successMetrics = [
  {
    title: "Growth in User Base",
    desc: "User base increased by 200% in the last quarter.",
    image: "/images/m1.jpg",
  },
  {
    title: "Team Expansion",
    desc: "Expanded core team by 50% to support growth.",
    image: "/images/m2.jpg",
  },
  {
    title: "Successful Product Launches",
    desc: "Multiple successful products in the market.",
    image: "/images/m3.jpg",
  },
];

export default function StartupsPage() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-[#0D1B2A]">
      <h2 className="text-3xl font-bold mb-10 text-[#E76F51]">Startups</h2>

      {/* Spotlight */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Startup Spotlight</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {startupSpotlight.map((item, i) => (
            <div key={i} className="bg-[#F9F4EF] rounded-xl overflow-hidden shadow">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Startups */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Current Startups</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {currentStartups.map((item, i) => (
            <div key={i} className="bg-[#EDF2F4] rounded-xl overflow-hidden shadow">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Success Metrics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {successMetrics.map((item, i) => (
            <div key={i} className="bg-[#F4F1DE] rounded-xl overflow-hidden shadow">
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-800">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <button className="bg-[#E76F51] text-white px-6 py-2 rounded-full hover:bg-[#d75a3f]">Apply Now</button>
          <button className="bg-[#0D1B2A] text-white px-6 py-2 rounded-full hover:bg-[#142f4c]">Learn More</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10 border-t text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <p>&copy;2024 KSRCE NEO. All rights reserved.</p>
      </footer>
    </section>
  );
}
