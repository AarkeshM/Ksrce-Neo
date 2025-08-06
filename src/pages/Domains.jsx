import React, { useState } from "react";
import { motion } from "framer-motion";

const domainSectors = [
  {
    title: "Deep Tech & Smart Engineering",
    color: "from-white to-sky-200",
    textColor: "text-blue-300",
    domains: [
      { icon: "🤖", title: "Artificial Intelligence", desc: "Innovative AI-driven solutions and applications." },
      { icon: "📡", title: "IoT & Robotics", desc: "Smart connected devices and robotic innovations." },
      { icon: "🚗", title: "Smart Mobility & EVs", desc: "Next-gen transportation and electric vehicle solutions." },
      { icon: "🧬", title: "HealthTech & Biomedical Devices", desc: "Technology-driven healthcare and medical devices." },
    ],
  },
  {
    title: "Inclusive & Social Innovation",
    color: "from-sky-500 to-white",
    textColor: "text-cyan-300",
    domains: [
      { icon: "🌍", title: "Social Entrepreneurship & Rural Innovation", desc: "Innovations that create social impact and empower rural communities." },
    ],
  },
  {
    title: "Green & Sustainable Technologies",
    color: "from-teal-300 to-lime-500",
    textColor: "text-green-700",
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
    <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-100 mb-4">
        Focus Sectors
      </h1>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-blue-300 mb-8 sm:mb-10 px-2">
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

          {/* Mobile: Stack, Desktop: Row */}
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
                  onClick={() => handleToggle(cardIndex)} // Tap triggers hover animation on mobile
                  className={`w-full sm:w-64 p-5 sm:p-6 bg-white rounded-xl text-left shadow-md hover:shadow-xl border-t-4 
                    border-transparent hover:border-current transition-all duration-300 cursor-pointer
                    bg-gradient-to-br ${sector.color} bg-opacity-10`}
                >
                  <div className="text-3xl mb-3">{domain.icon}</div>
                  <h3 className={`text-lg font-semibold mb-1 ${sector.textColor}`}>
                    {domain.title}
                  </h3>
                  <p className="text-sm text-blue-600">{domain.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
