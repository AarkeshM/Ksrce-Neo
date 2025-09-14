import React, { useState } from "react";
import { motion } from "framer-motion";

const domainSectors = [
  {
    title: "Deep Tech & Smart Engineering",
    textColor: "text-sky-800",
    border: "border-sky-500",
    domains: [
      { icon: "🤖", title: "Artificial Intelligence", desc: "Innovative AI-driven solutions and applications." },
      { icon: "📡", title: "IoT & Robotics", desc: "Smart connected devices and robotic innovations." },
      { icon: "🚗", title: "Smart Mobility & EVs", desc: "Next-gen transportation and electric vehicle solutions." },
      { icon: "🧬", title: "HealthTech & Biomedical Devices", desc: "Technology-driven healthcare and medical devices." },
    ],
  },
  {
    title: "Inclusive & Social Innovation",
    textColor: "text-blue-800",
    border: "border-blue-400",
    domains: [
      { icon: "🌍", title: "Social Entrepreneurship & Rural Innovation", desc: "Innovations that create social impact and empower rural communities." },
    ],
  },
  {
    title: "Green & Sustainable Technologies",
    textColor: "text-emerald-800",
    border: "border-emerald-400",
    domains: [
      { icon: "🌱", title: "Clean Energy & Sustainable Engineering", desc: "Eco-friendly solutions for a sustainable future." },
      { icon: "🐓", title: "AgriTech & PoultryTech", desc: "Smart agriculture and poultry innovations for better productivity." },
    ],
  },
];

export default function Domains() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50 text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-sky-800 mb-4">Focus Sectors</h1>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-sky-600 mb-8 sm:mb-10 px-2">
        Explore the diverse focus sectors at KSRCE NEO, driving innovation in
        Deep Tech, Social Impact, and Green Sustainable Technologies.
      </p>

      {domainSectors.map((sector, sectorIndex) => (
        <div key={sectorIndex} className="mb-12">
          <h2
            className={`text-2xl sm:text-3xl font-semibold mb-6 ${sector.textColor}`}
          >
            {sector.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {sector.domains.map((domain, index) => {
              const cardIndex = `${sectorIndex}-${index}`;
              const isActive = active === cardIndex;
              return (
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  animate={
                    isActive
                      ? { scale: 1.05, rotate: [0, 1.2, -1.2, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 1.2, -1.2, 0],
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  onClick={() => handleToggle(cardIndex)}
                  className={`w-full sm:w-64 p-5 sm:p-6 rounded-xl text-left shadow-md hover:shadow-xl 
                    border-t-4 ${sector.border} bg-white transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-3xl mb-3">{domain.icon}</div>
                  <h3 className={`text-lg font-semibold mb-1 ${sector.textColor}`}>
                    {domain.title}
                  </h3>
                  <p className="text-sm text-sky-700">{domain.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
