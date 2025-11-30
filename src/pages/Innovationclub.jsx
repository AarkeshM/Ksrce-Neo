import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Lightbulb, 
  Hammer, 
  Rocket, 
  Compass, 
  Wrench, 
  Mic, 
  Users, 
  Target, 
  Star, 
  CheckCircle2,
  Sparkles
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
const activities = [
  {
    title: "Idea Clubs & Circles",
    desc: "Student groups explore real-world challenges and brainstorm tech-driven solutions.",
    icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Workshops & Bootcamps",
    desc: "Training in AI/ML, IoT, design thinking, rapid prototyping, and startup basics.",
    icon: <Hammer className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    title: "Hackathons & Challenges",
    desc: "Students prototype ideas, compete, and receive feedback from mentors.",
    icon: <Rocket className="w-6 h-6 text-rose-600" />,
    color: "bg-rose-50 border-rose-200"
  },
  {
    title: "Founder Talks",
    desc: "Interactions with campus founders, alumni entrepreneurs, and industry experts.",
    icon: <Compass className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-50 border-teal-200"
  },
  {
    title: "Prototype Support",
    desc: "Access to FabLab tools, software platforms, and incubation resources via KSRCE NEO.",
    icon: <Wrench className="w-6 h-6 text-slate-600" />,
    color: "bg-slate-100 border-slate-200"
  },
  {
    title: "Pitch Practice",
    desc: "Students learn how to pitch, present, and validate their ideas effectively.",
    icon: <Mic className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-200"
  }
];

const goals = [
  "Promote a strong student innovation culture on campus.",
  "Build a pipeline of high-potential ideas for Pre-Incubation.",
  "Train students in entrepreneurship & product development.",
  "Encourage interdisciplinary teamwork & creative thinking.",
  "Prepare students for hackathons & startup competitions."
];

const NeoSpark = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        {/* Abstract Spark Background (Light Mode) */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200 text-amber-600 font-bold text-sm uppercase tracking-wider mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" /> Student Innovation Club
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900"
          >
            Neo <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Spark</span> Team
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-5 leading-relaxed font-light"
          >
            Empowering students to explore ideas, develop solutions, and build real-world projects that shape the future.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </section>

      {/* --- PURPOSE & MISSION --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest mb-4 text-sm">
              <Zap className="w-5 h-5" /> Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Cultivating an Innovation Mindset
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Neo Spark Team acts as a bridge between students and the incubation ecosystem. We help transform curiosity and creativity into projects, prototypes, and potential startups.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-amber-500 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" /> What We Do
              </h4>
              <p className="text-slate-600">
                We provide the platform, support, and exposure needed to develop entrepreneurial skills and become active contributors to the innovation ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-orange-50 rounded-full filter blur-3xl opacity-60"></div>
             <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Creative Collaboration</h3>
                <p className="text-slate-500 leading-relaxed">
                  "Neo Spark inspires students to think creatively, collaborate across disciplines, and take their first steps toward becoming campus founders."
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- KEY ACTIVITIES --- */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Activities</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {activities.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 ${item.color}`}
              >
                <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- GOALS & ELIGIBILITY (Split View) --- */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Goals */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <div className="flex items-center gap-3 mb-6">
               <Target className="w-8 h-8 text-indigo-600" />
               <h2 className="text-3xl font-bold text-slate-900">Our Goals</h2>
             </div>
             <div className="space-y-4">
               {goals.map((goal, idx) => (
                 <div key={idx} className="flex items-start gap-3 p-5 rounded-xl bg-indigo-50/50 border border-indigo-100 hover:bg-indigo-50 transition-colors">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                   <p className="text-slate-700 font-medium">{goal}</p>
                 </div>
               ))}
             </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-indigo-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-[80px] -mr-10 -mt-10"></div>
             
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <Users className="w-6 h-6 text-indigo-300" /> Who Can Join?
             </h3>
             <p className="text-indigo-100 mb-6 text-lg">
               Open to all K.S.R. College of Engineering students who are:
             </p>
             <ul className="space-y-4 mb-8">
               {[
                 "Curious about innovation & tech",
                 "Interested in solving real-world problems",
                 "Eager to collaborate & build projects",
                 "Future startup founders"
               ].map((req, i) => (
                 <li key={i} className="flex items-center gap-3 text-indigo-50">
                   <CheckCircle2 className="w-5 h-5 text-amber-400" /> {req}
                 </li>
               ))}
             </ul>
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center border border-white/10">
               <p className="text-sm font-medium text-amber-300">
                 No prior experience required — just passion!
               </p>
             </div>
          </motion.div>

        </div>
      </section>

      {/* --- WHY JOIN SECTION --- */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-100">
               <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Why Neo Spark?</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Because great startups often begin with a spark — a simple idea, a curious mind, and a supportive community.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {["Discover Strengths", "Explore Tech", "Build Confidence", "Network / Mentors"].map((benefit, i) => (
                 <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-bold text-slate-700 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all">
                   {benefit}
                 </div>
               ))}
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default NeoSpark;