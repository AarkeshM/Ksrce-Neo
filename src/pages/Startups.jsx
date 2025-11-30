import React from "react";
import { motion } from "framer-motion"; 
import {
  ArrowRight,
  Bot,
  Users,
  Sprout, // Replacing FaTractor
  Code,
  GraduationCap, // Replacing FaChalkboardTeacher
  Database,
  FlaskConical,
  ShoppingCart,
  Leaf,
  Factory,
  Droplets
} from "lucide-react";

import nexgen from "../photos/nexgen.png";
import neura from "../photos/neura.png";
import praskla from "../photos/praskla.jpg";
import azhien from "../photos/newlogo.jpg";
import aprina from "../photos/arpina.png";
import inzovate from "../photos/inzovate.jpg";
import grow from "../photos/grow.jpeg";
import attox from "../photos/attox.jpeg";
import way2grow from "../photos/way2grow.jpeg";
import creatersargo from "../photos/creatorsargo.jpeg"
import makilam from "../photos/makilam.jpeg";
import cfpl from "../photos/cfpl.jpeg";

const currentStartups = [
  {
    title: "NeuraAI Solutions Private Ltd",
    desc: "AI & ML club fostering innovation, collaboration, and real-world solutions in the artificial intelligence sector.",
    img: neura,
    icon: <Bot className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Arpina solutions Private Ltd",
    desc: "Driving innovation through BPO, IT placement, and training solutions for tomorrow’s workforce.",
    img: aprina,
    icon: <Users className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Azhizen Solutions (OPC) Private Ltd",
    desc: "Revolutionizing Agri & Dairy Tech with Precision Farming Solutions.",
    img: azhien,
    icon: <Sprout className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Praskla Technology",
    desc: "Driving growth through innovative SaaS solutions.",
    img: praskla,
    icon: <Code className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "NexGen Nextopia Private Ltd",
    desc: "Innovating in the Education & Industry 4.0 sector through technology and execution.",
    img: nexgen,
    icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Inzovate Technologies",
    desc: "AI-enabled SaaS solutions from CRM to ERP.",
    img: inzovate,
    icon: <Database className="w-6 h-6 text-amber-500" />,
  },
    {
    title: "Grow Your Farms",
    desc: "From farm to fork 360 degree tech driven agri tech solution.",
    img: grow,
    icon: <Sprout className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Attox Research Laboratories",
    desc: "Biomedical Sector: Developing advanced biosensors and diagnostic technologies.",
    img: attox,
    icon: <FlaskConical className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Creaters Agro Trading",
    desc: "Providing integrated agri trading and value chain solutions.",
    img: creatersargo,
    icon: <ShoppingCart className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Makilam Farmer Producer Company",
    desc: "Makilam FPCL: Farmer owned enterprise providing solutions from seed to harvest.",
    img: makilam,
    icon: <Leaf className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Chellam Foundries Private Limited",
    desc: "Chellam foundry tech firm offering precision metal casting.",
    img: cfpl,
    icon: <Factory className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Way2Grow",
    desc: "Specializes in hydroponic and vertical farming, using technology to produce fresh, local, and pesticide-free food year-round.",
    img: way2grow,
    icon: <Droplets className="w-6 h-6 text-amber-500" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, 
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Startups() {
  return (
    <div className="bg-slate-50 pt-28 pb-16 min-h-screen font-sans text-slate-900">
      
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-4">
          Our Startups
        </h1>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      <section className="px-4 sm:px-6 md:px-12">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {currentStartups.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8 }} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="h-56 bg-slate-100 flex items-center justify-center p-6 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src={s.img}
                  alt={s.title}
                  className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="pt-1 flex-shrink-0 bg-amber-50 p-2 rounded-lg border border-amber-100">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-lg text-blue-950 leading-tight group-hover:text-amber-600 transition-colors">
                    {s.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed pl-[3.25rem]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply Button */}
      <div className="flex justify-center mt-20 px-4">
        <a 
          href="/getinvolved" // Update this to your actual route if needed
          className="group"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full shadow-xl transition-all flex items-center gap-3 font-bold text-lg"
          >
            Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </a>
      </div>
    </div>
  );
}