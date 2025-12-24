import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Globe,
  Building2,
  Cpu,
  Cloud,
  CheckCircle2
} from "lucide-react";

import ancrew from "../photos/ancrew.jpeg";
import startuptn from "../photos/startuptn.jpeg";
import zoho from "../photos/zoho.jpg";
import myprobuddy from "../photos/myprobuddy.jpeg";
import cumma from "../photos/cumma.jpeg";
import mathworks from "../photos/mathworks.jpeg";

// --- Data ---
const partners = [
  {
    name: "StartupTN",
    category: "Government Nodal Agency",
    desc: "Collaborating to provide grants, TANSEED funding, and policy support for early-stage startups.",
    image: startuptn,
    icon: <Building2 className="w-5 h-5" />,
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    name: "Zoho for Startups",
    category: "Software Partner",
    desc: "KSRCE NEO is proud to partner with Zoho for Startups to empower ventures with world-class business tools and technology support.",
    image: zoho,
    icon: <Cloud className="w-5 h-5" />,
    color: "bg-yellow-50 text-yellow-600 border-yellow-100"
  },
  {
    name: "Cumma",
    category: "Infrastructure",
    desc: "This collaboration enables KSRCE NEO to extend facility access, innovation resources, and ecosystem support through a seamless digital platform powered by CUMMA.",
    image: cumma,
    icon: <Globe className="w-5 h-5" />,
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    name: "Ancrew",
    category: "Software Partner",
    desc: "KSRCE NEO is collaborating with Ancrew Globals to provide AWS credits and cloud support for our Incubated startups.",
    image: ancrew,
    icon: <Cpu className="w-5 h-5" />,
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    name: "MyProBuddy",
    category: "Funding Partner",
    desc: "Strategic collaboration for skills development and industry-ready technical training.",
    image: myprobuddy,
    icon: <Cpu className="w-5 h-5" />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    name: "MathWorks",
    category: "Sofware Partner",
    desc: "MathWorks for Startups, in collaboration with KSRCE NEO, provides incubated startups with free access to MATLAB® and Simulink® and expert technical support.",
    image: mathworks,
    icon: <Cpu className="w-5 h-5" />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
              <Handshake className="w-4 h-4 text-amber-500" /> Strategic Alliances
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Our Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Partners</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders, government bodies, and tech giants to provide our startups with world-class resources, funding, and mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PARTNERS GRID --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Logo Area */}
                <div className="h-48 bg-slate-50 flex items-center justify-center p-8 relative border-b border-slate-100 group-hover:bg-white transition-colors">
                  <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain relative z-10 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md border w-fit mb-3 ${p.color}`}>
                    {p.icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* "Become a Partner" Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-[60px] opacity-20 -mr-10 -mt-10"></div>

              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                <Handshake className="w-8 h-8 text-amber-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Join the Network</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Partner with KSRCE NEO to access top talent and drive innovation.
              </p>

              <a
                href="https://forms.gle/VBgGqVhkqPetoWqu8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                Partner With Us
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Collaboration Opportunities</h2>
          <p className="text-slate-500 mb-8">
            We are always open to new partnerships that bring value to our student entrepreneurs.
            <br className="hidden md:block" /> Reach out to discuss potential synergies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:neo@ksrce.ac.in" className="flex items-center gap-2 text-slate-900 font-bold bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-amber-500">
              neo@ksrce.ac.in
            </a>
            <span className="text-slate-300 hidden sm:block">|</span>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Open for Corporate Innovation</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}