import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Incubation',
    desc: 'Early‑stage support, funding & mentorship.',
  },
  {
    title: 'Acceleration',
    desc: 'Workshops, investor introductions.',
  },
  {
    title: 'Mentorship',
    desc: '1‑on‑1 guidance from industry experts.',
  },
];

const events = [
  { title: 'Hackathon: Air Summit', desc: 'Compete and innovate with cutting-edge tech.' },
  { title: 'Hackathon: Praskla Challenge', desc: 'Solve real-world problems with creativity.' },
  { title: 'Ideation Boot Camp', desc: 'Turn your idea into a solid business model.' },
  { title: 'Founder Talk Series', desc: 'Hear from successful founders and leaders.' },
  { title: 'IPR & Legal Workshop', desc: 'Understand patents, trademarks, and more.' },
  { title: 'Demo Days & Pitch Events', desc: 'Showcase your startup to investors & mentors.' },
];

export default function Programs() {
  return (
    <>

      <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 min-h-screen py-16 px-4 text-center text-blue-100">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-100">
          Programs & Events
        </h1>
        <p className="max-w-2xl mx-auto text-blue-300 mb-10 text-sm sm:text-base">
          We nurture innovation & entrepreneurship through impactful programs & events designed to empower creators, founders & students.
        </p>

        {/* Programs Section */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mb-12">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1.5, -1.5, 0],
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              className="bg-white/10 backdrop-blur-md border border-blue-300 p-6 rounded-lg shadow-md text-left hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-blue-100 mb-2">{prog.title}</h3>
              <p className="text-sm text-blue-300">{prog.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Events Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-100">
          Upcoming Events
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
              }}
              className="bg-white/10 backdrop-blur-md border border-blue-300 p-5 rounded-lg shadow-sm hover:shadow-md transition-all text-left cursor-pointer"
            >
              <h3 className="text-lg font-bold text-blue-100 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-blue-300">{event.desc}</p>
              <button
                className=" mt-2 inline-flex items-center justify-center
    text-xs sm:text-sm font-medium
    text-white
    bg-gradient-to-r from-blue-600 to-indigo-700
    hover:from-blue-700 hover:to-blue-800
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
    rounded-full px-4 py-2
    shadow-md hover:shadow-lg
    transform hover:-translate-y-0.5 active:scale-95
    transition-all duration-300 ease-in-out"

              >
                View Full Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>



            </motion.div>
          ))}
        </div>
      </div>

    </>
  );
}
