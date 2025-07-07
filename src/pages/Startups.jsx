import React from "react";

const successStories = [
  {
    title: "Yukthi Challenge finalists",
    desc: "Revolutionizing software development with cutting-edge AI solutions.",
    img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_522302116_2000134220009280265_299511.jpg",
  },
  {
    title: "Student teams gaining internships",
    desc: "Leading the way in sustainable energy solutions for a greener future.",
    img: "https://th.bing.com/th/id/OIP.MtPGROtETIlgAqYonESYaQHaDw?w=293&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    title: "Startups selected for external funding",
    desc: "Transforming digital marketing with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

const currentStartups = [
  {
    title: "HealthTech Innovations",
    desc: "Developing wearable tech for personalized health monitoring.",
    img: "https://th.bing.com/th/id/OIP.rXC1xwAmiRZ7MUc-qYvlngHaEL?w=277&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    title: "EduGrowth Solutions",
    desc: "Creating innovative platforms for online learning and skill development.",
    img: "https://th.bing.com/th/id/OIP.5PRPhf-N7kIz3QBx7_G61wHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    title: "AgriTech Pioneers",
    desc: "Revolutionizing agriculture with precision farming technologies.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FinTech Ventures",
    desc: "Building next-gen financial tools for seamless transactions.",
    img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SmartCity Systems",
    desc: "Designing smart solutions for urban living and sustainability.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Creative Minds Studio",
    desc: "Fostering creativity and innovation in digital content creation.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Startups() {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 min-h-screen text-white">
      <header className="text-4xl font-extrabold text-center py-16 tracking-wider text-blue-100">
        🚀 Startups
      </header>

      <section className="px-6 md:px-10">
        <h2 className="text-3xl font-bold mb-6 text-sky-300">✨ Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {successStories.map((s, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-sky-300 shadow-md rounded-none overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-sky-100">{s.title}</h3>
                <p className="text-sm text-sky-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-6">
        <h2 className="text-3xl font-bold mb-6 text-sky-300">🚧 Current Startups</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {currentStartups.map((s, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-sky-600 shadow-md rounded-none overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-sky-100">{s.title}</h3>
                <p className="text-sm text-sky-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-4 mt-8 pb-12">
        <button className="
          px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold shadow-lg
          hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-all rounded-none
        ">
          Apply Now
        </button>

        <button className="
          px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-semibold shadow-lg
          hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-all rounded-none
        ">
          Learn More
        </button>
      </div>
    </div>
  );
}
