import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Cpu, 
  Cloud, 
  UserCheck, 
  Banknote, 
  Briefcase, 
  Megaphone, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  TrendingUp
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
    transition: { staggerChildren: 0.1 }
  }
};

// --- Data ---
const offerings = [
  {
    title: "Physical Infrastructure",
    desc: "Access to co-working spaces, dedicated startup cubicles, meeting rooms, conference hall, and R&D facilities within an 18,000+ sq. ft. incubation ecosystem.",
    icon: <Building2 className="w-8 h-8 text-amber-500" />
  },
  {
    title: "FabLab & Prototyping",
    desc: "Facilities for electronics, IoT, mechanical, and digital prototyping to turn designs into tangible products.",
    icon: <Cpu className="w-8 h-8 text-teal-500" />
  },
  {
    title: "Software Infrastructure",
    desc: "Cloud credits, development platforms, and tools provided through partners including Zoho, AWS, and DeepTechVerse.",
    icon: <Cloud className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "Expert Mentoring",
    desc: "One-on-one guidance from industry leaders, domain experts, and ecosystem partners to refine business strategies.",
    icon: <UserCheck className="w-8 h-8 text-rose-500" />
  },
  {
    title: "Funding Support",
    desc: "Assistance and connections for StartupTN grants, MSME schemes, seed funds, and investor networks.",
    icon: <Banknote className="w-8 h-8 text-green-500" />
  },
  {
    title: "Business Support",
    desc: "Help with market validation, compliance, IPR, business model refinement, and go-to-market planning.",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Showcase Opportunities",
    desc: "Demo days, founder events, hackathons, and product launch platforms such as Hatch & Launch.",
    icon: <Megaphone className="w-8 h-8 text-purple-500" />
  }
];

const eligibility = [
  "Only registered startups (Pvt Ltd / LLP / OPC / Partnership / Registered Proprietorship).",
  "Founders seeking structured incubation, technical support, and ecosystem access.",
  "Ventures working in domains such as AI/ML, SaaS, IoT, AgriTech, HealthTech, EdTech, Industry 4.0, and other emerging fields."
];

const Incubation = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
       <section className="relative bg-gradient-to-r from-blue-950 to-blue-700 text-white pt-20 pb-16 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-sm uppercase tracking-wider mb-6">
              <Rocket className="w-4 h-4" /> KSRCE NEO
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Incubation Program
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-teal-100 max-w-3xl mx-auto mb-8">
              Supporting Registered Startups to <span className="font-semibold text-white">Build, Scale, and Succeed</span>
            </p>

            <p className="text-base md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed ">
              The Incubation Program at KSRCE NEO is designed for registered startups that are ready to build, validate, and scale their products or services. Join an ecosystem built for growth.
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
            World-class infrastructure and support to accelerate your startup journey.
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
              className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${index === offerings.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
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
              We focus on committed founders with registered entities ready to take the next big step.
            </p>
            
            <ul className="space-y-6">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-lg font-medium text-slate-100 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Program Outcomes Card */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold text-white">Program Outcomes</h3>
              </div>
              
              <p className="text-teal-50 mb-8 text-lg leading-relaxed">
                Startups gain access to a complete support system that strengthens their product development, business growth, market entry, and investor readiness.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-sm font-medium text-teal-100">
                  <span className="text-amber-300 font-bold">Note:</span> Graduated startups may also opt for continued engagement through Virtual Incubation.
                </p>
              </div>
              
              <a href= "https://forms.gle/xtUJMPLvaVZLBZ3o9" className="w-full mt-8 py-4 bg-white text-teal-900 font-bold rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 group">
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-16 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Ready to Scale?</h2>
        <p className="text-slate-500 mb-6">Reach out to the NEO Incubation team.</p>
        <a href="mailto:neo@ksrce.ac.in" className="text-teal-600 font-semibold hover:text-teal-800 underline decoration-2 underline-offset-4">
          neo@ksrce.ac.in
        </a>
      </section>

    </div>
  );
};

export default Incubation;