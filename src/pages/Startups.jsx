import React from "react";
import nexgen from "../photos/nexgen.png";
import neura from "../photos/neura.png";
import praskla from "../photos/praskla.jpg"
import azhien from "../photos/azhien.png";
import aprina from "../photos/arpina.png";

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
    title: "NeuraAi Solutions Pvt",
    desc: "Creating innovative platforms for online learning and skill development.",
    img: neura,
  },
  {
    title: "Arpina solutions Pvt",
    desc: "Designing smart solutions for urban living and sustainability.",
    img: aprina,
  },
  {
    title: "Azhizen Solutions Pvt Ltd",
    desc: "Building next-gen financial tools for seamless transactions.",
    img: azhien,
  },
  {
    title: "Praskla Technology",
    desc: "Revolutionizing agriculture with precision farming technologies.",
    img: praskla,
  },
  {
    title: "NexGen Nextopia Pvt",
    desc: "Developing wearable tech for personalized health monitoring.",
    img: nexgen,
  }
];

export default function Startups() {
  return (
    <div className="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-700 min-h-screen text-white">
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

        <div className="flex flex-wrap justify-center gap-16">
          {currentStartups.map((s, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-sky-600 shadow-md overflow-hidden 
                   transform hover:scale-105 hover:shadow-xl transition-all duration-500 w-68"
            >
              <div className="h-40 w-full flex items-center justify-center bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  className="max-h-36 max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-sky-600/20">
                <h3 className="font-bold text-base text-sky-100">{s.title}</h3>
                <p className="text-xs text-sky-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-4 mt-8 pb-12">
        <a href="/getinvolved">
          <button className="
          px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold shadow-lg
          hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-all rounded-none
        ">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}
