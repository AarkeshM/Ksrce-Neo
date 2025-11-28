import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  Share2, 
  Layers, 
  Briefcase, 
  CheckCircle2, 
  Rocket, 
  ArrowRight 
} from "lucide-react";

// --- Animation Config ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Data ---
const offerings = [
  {
    title: "Idea Validation",
    desc: "Guidance to refine the problem statement, solution approach, and market fit to ensure your concept has real-world potential.",
    icon: <Lightbulb className="w-8 h-8 text-amber-500" />
  },
  {
    title: "Mentorship Support",
    desc: "Access to expert mentors from industry, academia, and the startup ecosystem to guide you through hurdles.",
    icon: <Users className="w-8 h-8 text-teal-500" />
  },
  {
    title: "Ecosystem Connections",
    desc: "Direct links to ecosystem partners for technology, design, and business development support.",
    icon: <Share2 className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "MVP Development",
    desc: "Support and resources (labs, tools, and credits) to help you develop your Minimum Viable Product (MVP).",
    icon: <Layers className="w-8 h-8 text-rose-500" />
  },
  {
    title: "Company Formation",
    desc: "Assistance in registering your startup, understanding compliance, DPIIT registration, and funding pathways.",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />
  },
];

const eligibility = [
  "Students of K.S.R. College of Engineering from any department.",
  "Individuals or teams with innovative ideas or early concepts.",
  "Campus founders seeking structured support to turn ideas into startups."
];

const PreIncubation = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-teal-900 text-white pt-20 pb-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-sm uppercase tracking-wider mt-3 mb-6">
              <Rocket className="w-4 h-4" /> KSRCE NEO
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Pre-Incubation Program
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-teal-100 max-w-3xl mx-auto mb-8">
              Exclusively for <span className="font-semibold text-white">Student-Led Ventures</span>
            </p>

            <p className="text-base md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
              The Pre-Incubation Program at KSRCE NEO is designed exclusively for student innovators who are in the early ideation stage and aspire to build impactful startups. This <span className="text-amber-400 font-bold">six-month structured program</span> helps students turn raw ideas into validated concepts and early-stage prototypes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT WE OFFER SECTION --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">What We Offer</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A comprehensive support system designed to take you from "Idea" to "Startup".
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {offerings.map((offer, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-slate-100 transition-colors">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{offer.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- ELIGIBILITY SECTION --- */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Text */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-teal-400">
              Who Can Apply?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              We are looking for passionate problem solvers ready to commit to their entrepreneurial journey.
            </p>
            
            <ul className="space-y-6">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-lg font-medium text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
              <p className="text-teal-100 mb-8">
                Applications are open for the upcoming cohort. Don't miss the chance to build your future.
              </p>
              
              <button className="w-full py-4 bg-white text-teal-900 font-bold rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 group">
                Start Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-16 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Have questions?</h2>
        <p className="text-slate-500 mb-6">Contact the NEO E-Club coordinator for more details.</p>
        <a href="mailto:neo@ksrce.ac.in" className="text-teal-600 font-semibold hover:text-teal-800 underline decoration-2 underline-offset-4">
          neo@ksrce.ac.in
        </a>
      </section>

    </div>
  );
};

export default PreIncubation;