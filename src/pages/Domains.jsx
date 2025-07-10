import React, { useState } from "react";
import { motion } from "framer-motion";

const domains = [
  { icon: "🤖", title: "Artificial Intelligence", desc: "Developing intelligent systems and applications." },
  { icon: "📶", title: "Internet of Things", desc: "Connecting devices and creating smart environments." },
  { icon: "🌱", title: "Green Energy", desc: "Innovating sustainable energy solutions." },
  { icon: "🏭", title: "Advanced Manufacturing", desc: "Transforming manufacturing processes with technology." },
  { icon: "🔋", title: "Energy Storage", desc: "Advancing battery technology for efficient energy storage." },
  { icon: "🧪", title: "Advanced Materials", desc: "Exploring new materials with enhanced properties." },
];

export default function Domains() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 text-center py-16 px-4 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-100 mb-4">
        Domains
      </h1>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-blue-300 mb-8 sm:mb-10 px-2">
        Explore the diverse fields of innovation and technology that KSRCE NEO
        supports and nurtures. Our focus spans across various sectors, driving
        advancements and fostering growth in each domain.
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            animate={active === index ? { scale: 1.05, rotate: [0, 1.2, -1.2, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1.2, -1.2, 0],
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            onClick={() => handleToggle(index)}
            className={`w-11/12 sm:w-64 p-5 sm:p-6 bg-white border border-blue-100 rounded-xl text-left shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
          >
            <div className="text-2xl sm:text-3xl mb-3">{domain.icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-1">
              {domain.title}
            </h3>
            <p className="text-xs sm:text-sm text-blue-600">{domain.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
