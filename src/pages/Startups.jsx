// src/components/Startups.jsx
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
    desc: "At KSRCE NEO, innovation begins with students, ideas, and the right ecosystem. Our StartupSpotlight features Azhizen Solutions, founded by Mr. Bharathkumar Ramachandiran and team, who turned their vision into reality through incubation support. From idea validation and prototype development to investor pitching and scaling strategies, their journey reflects true innovation. Today, they have launched their market viable product ‘Easemilker’ and secured grants, proving that NEO is indeed a launchpad for entrepreneurial success.",
    video: vdo1,
  },
  {
    title: "NexGen Nextopia Pvt Ltd",
    desc: "NexGen Nextopia is an innovation-driven ecosystem that bridges education and industry, empowering students and entrepreneurs to transform ideas into impactful ventures. With expertise in IoT, AI & ML, web development, AR/VR, and digital marketing, it provides end-to-end support from ideation to execution. Through workshops, mentoring, prototype development, and investor pitching, NexGen Nextopia nurtures innovation and entrepreneurial growth. It is a launchpad for creating future-ready products, careers, and companies.",
    video: vdo2,
  },
];

const currentStartups = [
  {
    title: "NeuraAI Solutions Private Ltd",
    desc: "AI & ML club fostering innovation, collaboration, and real-world solutions in the artificial intelligence sector.",
    img: neura,
  },
  {
    title: "Arpina solutions Private Ltd",
    desc: "Driving innovation through BPO, IT placement, and training solutions for tomorrow’s workforce.",
    img: aprina,
  },
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "Revolutionizing Agri & Dairy Tech with Precision Farming Solutions.",
    img: azhien,
  },
  {
    title: "Praskla Technology",
    desc: "Driving growth through innovative SaaS solutions.",
    img: praskla,
  },
  {
    title: "NexGen Nextopia Private Ltd",
    desc: "Innovating in the Education & Industry 4.0 sector through technology and execution.",
    img: nexgen,
  },
  {
    title: "Inzovate Technologies",
    desc: "AI-enabled SaaS solutions from CRM to ERP.",
    img: inzovate,
  },
];

export default function Startups() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50 mt-5 min-h-screen text-blue-800">
      {/* Header */}
      <header className="text-4xl sm:text-5xl font-extrabold text-center py-16 tracking-wide text-blue-800">
        🚀 Startups
      </header>

      {/* Success Stories */}
      <section className="px-6 md:px-12 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">
          ✨ Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((s, i) => (
            <div
              key={i}
              className="group bg-blue-50 border border-blue-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Video section */}
              <div className="overflow-hidden bg-white">
                <video
                  src={s.video}
                  controls
                  className="w-full max-h-80 object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text section */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-blue-700 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Startups */}
      <section className="px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">
          🚧 Current Startups
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentStartups.map((s, i) => (
            <div
              key={i}
              className="group bg-blue-50 border border-blue-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-44 flex items-center justify-center bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  className="max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-blue-50">
                <h3 className="font-bold text-base text-blue-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-blue-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Button */}
      <div className="flex justify-center mt-16 pb-20">
        <a href="/getinvolved">
          <button className="px-10 py-3.5 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}
