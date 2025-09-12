import React from "react";
import nexgen from "../photos/nexgen.png";
import neura from "../photos/neura.png";
import praskla from "../photos/praskla.jpg";
import azhien from "../photos/newlogo.jpg";
import aprina from "../photos/arpina.png";
import inzovate from "../photos/inzovate.jpg";
import vdo1 from "../photos/vdo1.mp4";
import vdo2 from "../photos/vdo 2.mp4";

const successStories = [
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "At KSRCE NEO, innovation begins with students, ideas, and the right ecosystem. Our StartupSpotlight features Azhizen Solutions, founded by Mr. Bharathkumar Ramachandiran and team, who turned their vision into reality through incubation support. From idea validation and prototype development to investor pitching and scaling strategies, their journey reflects true innovation. Today, they have launched their market viable product ‘Easemilker’ and secured grants, proving that NEO is indeed a launchpad for entrepreneurial success.",
    video: vdo1,
  },
  {
    title: "NexGen Nextopia Pvt Ltd",
    desc: "NexGen Nextopia is an innovation-driven ecosystem that bridges education and industry, empowering students and entrepreneurs to transform ideas into impactful ventures. With expertise in IoT, AI & ML, web development, AR/VR, and digital marketing, it provides end-to-end support from ideation to execution. Through workshops, mentoring, prototype development, and investor pitching, NexGen Nextopia nurtures innovation and entrepreneurial growth. It is a launchpad for creating future-ready products, careers, and companies.",
    video: vdo2,
  }
];

const currentStartups = [
  {
    title: "NeuraAI Solutions Private Ltd",
    desc: "AI & ML club fostering innovation, collaboration, and real-world solutions in the artificial intelligence sector.",
    img: neura,
  },
  {
    title: "Arpina solutions Private Ltd",
    desc: "Driving innovation through BPO, IT placement, and training solutions for tomorrow’s workforce.",
    img: aprina,
  },
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "Revolutionizing Agri & Dairy Tech with Precision Farming Solutions.",
    img: azhien,
  },
  {
    title: "Praskla Technology",
    desc: "Driving growth through innovative SaaS solutions.",
    img: praskla,
  },
  {
    title: "NexGen Nextopia Private Ltd",
    desc: "Innovating in the Education & Industry 4.0 sector through technology and execution",
    img: nexgen,
  },
  {
    title: "Inzovate Technologies",
    desc: "AI-enabled SaaS solutions from CRM to ERP",
    img: inzovate,
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
              {/* Video Section */}
              <div className="overflow-hidden">
                <video

                  src={s.video}
                  controls
                  className="w-full max-h-80 object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content */}
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
