import React from "react";
import { motion } from "framer-motion";

// --- Added react-icons for the "Upcoming Events" section ---
import {
  FaCalendarCheck,
  FaCode,
  FaChalkboardTeacher,
  FaUsers,
  FaRocket,
  FaBullhorn,
} from "react-icons/fa";

// Image imports (no change)
import acite from "../photos/aicte.jpg";
import puthulir from "../photos/puthulir.jpg";
import smartcard from "../photos/smartcard.jpg";
import onboard from "../photos/onboard.jpg";
import bala from "../photos/visit.jpg";
import boot from "../photos/bootcamp1.jpg";
import hack from "../photos/hackathon1.jpg";
import neo from "../photos/neo.jpg";
import hatch from "../photos/hatch.jpg";
import azhizen from "../photos/azhienlaunch.jpg";
import student from "../photos/student.jpg";
import zoho from "../photos/zohoevent.jpg";
import founder from "../photos/founder.jpg";
import meeting from "../photos/meeting.jpg";
import msme from "../photos/msme.jpg";
import team from "../photos/team.jpg";

// Past events data (no change)
const events = [
  { title: "AICTE IDEA Lab Selection", date: "2025", image: acite, description: "KSRCE selected by AICTE for ₹90 Lakhs grant to establish IDEA Lab." },
  { title: "Puthulir Award & AUSEC Student Chapter Launch", date: "2025", image: puthulir, description: "Honored with Puthulir Award and launched aerospace student chapter." },
  { title: "KSRCE Students Receive StartupTN Start-Step Smart Card", date: "Nov 2024", image: smartcard, description: "12 student teams received startup smart cards to access support services." },
  { title: "Student Incubatees Onboarded under KSRCE NEO", date: "2025", image: onboard, description: "Student startups onboarded under KSRCE NEO for innovation incubation." },
  { title: "Dr. Balagurusamy Visits NEXGEN NEXTOPIA at KSRCE", date: "2025", image: bala, description: "Appreciated efforts of alumni-led startup NEXGEN NEXTOPIA at KSRCE." },
  { title: "Tech Ignite Bootcamp-Building Digital Skills at KSRCE", date: "March 2025", image: boot, description: "Hands-on training on building websites & apps with digital impact." },
  { title: "PRASKLA FUTURE X 2025-Hackathon at KSRCE", date: "April 2025", image: hack, description: "Students built apps in real-time during high-energy coding competition." },
  { title: "Grand Inauguration of KSRCE NEO-Incubation Center", date: "April 2025", image: neo, description: "Inauguration of KSRCE NEO Incubation Centre with StartupTN leadership." },
  { title: "Hatch & Launch at KSRCE NEO", date: "2025", image: hatch, description: "Student startup AZHIZEN officially launched under KSRCE NEO." },
  { title: "From Vision to Venture: Azhizen's Launch at KSRCE NEO", date: "2025", image: azhizen, description: "Founder Bharathkumar launched his biomedical startup incubated at KSRCE." },
  { title: "Inspiring Young Minds", date: "2025", image: student, description: "11th standard students visited the incubation center to explore innovation." },
  { title: "KSRCE NEO Collaborates with Zoho", date: "2025", image: zoho, description: "Startups received ₹1.86 Lakhs Zoho credits for business tool access." },
  { title: "Founder's Bench 1.0", date: "July 2025", image: founder, description: "Entrepreneurs shared startup stories to inspire students." },
  { title: "Technical Advisory Committee Meeting", date: "July 2025", image: meeting, description: "Experts gathered to guide the direction of the innovation ecosystem." },
  { title: "Neo Spark Innovation Club Launch", date: "2025", image: team, description: "Student-led club launched to promote problem-solving and collaboration." },
  { title: "MSME Innovative Scheme Grant", date: "2025", image: msme, description: "KSRCE recognized as Host Institute; students won ₹15 Lakhs grant." }
];

// --- Updated Upcoming Events data with new icons and mock dates ---
const UpcomingEvents = [
  {
    title: "Idea Clinic",
    desc: "Compete and innovate with cutting-edge tech.",
    date: "Dec 10, 2025",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Hackathon",
    desc: "Solve real-world problems with creativity.",
    date: "Dec 15, 2025",
    icon: <FaCode />,
  },
  {
    title: "Boot Camp",
    desc: "Turn your idea into a solid business model.",
    date: "Jan 05, 2026",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Founder Talk Series",
    desc: "Hear from successful founders and leaders.",
    date: "Jan 12, 2026",
    icon: <FaUsers />,
  },
  {
    title: "Hatch & Launch Series",
    desc: "Understand patents, trademarks, and more.",
    date: "Jan 20, 2026",
    icon: <FaRocket />,
  },
  {
    title: "Demo Days & Pitch Events",
    desc: "Showcase your startup to investors & mentors.",
    date: "Feb 01, 2026",
    icon: <FaBullhorn />,
  },
];

// --- Animation variant for staggering cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Staggered delay
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// --- Animation variant for the main page titles ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Events = () => {
  // Removed AOS.init()
  return (
    // --- Updated background and padding ---
    <div className="bg-slate-50 px-4 sm:px-6 lg:px-10 mt-16 py-20">
      {/* Upcoming Events */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-blue-950 mb-4">
          Upcoming Events
        </h2>
        {/* --- Added gold underline --- */}
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {UpcomingEvents.map((event, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }} // --- Consistent lift animation ---
            // --- Applied new card styling with blue/gold border ---
            className="bg-white p-8 rounded-xl shadow-lg transition-all 
                       duration-300 border-b-8 border-blue-900 
                       hover:border-amber-500 text-left"
          >
            {/* --- Styled the new icon in gold --- */}
            <div className="text-5xl mb-4 text-amber-500">{event.icon}</div>
            {/* --- Added new date element in gold --- */}
            <p className="text-sm font-semibold text-amber-500 mb-2">
              {event.date}
            </p>
            {/* --- Themed card title --- */}
            <h3 className="text-xl font-bold text-blue-950 mb-2">
              {event.title}
            </h3>
            {/* --- Themed card description --- */}
            <p className="text-sm text-slate-600">{event.desc}</p>
            {/* Removed button for a cleaner, consistent look */}
          </motion.div>
        ))}
      </div>

      {/* Past Events */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-blue-950 mb-4">
          Past Events
        </h2>
        {/* --- Added gold underline --- */}
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
        {events.map((event, index) => (
          // --- Replaced AOS with framer-motion ---
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }} // --- Consistent lift animation ---
            className="bg-white border border-slate-200 rounded-xl shadow-lg 
                       transition-all duration-300 overflow-hidden group"
          >
            {/* --- Modernized image container --- */}
            <div
              className="aspect-video w-full overflow-hidden bg-slate-100"
            >
              <img
                src={event.image}
                alt={event.title}
                // --- Added zoom-on-hover effect ---
                className="object-cover w-full h-full transition-transform 
                           duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              {/* --- Themed card title --- */}
              <h3 className="text-lg font-semibold text-blue-950 mb-1">
                {event.title}
              </h3>
              {/* --- Themed date in gold --- */}
              <p className="text-xs text-amber-500 font-semibold mb-2">
                {event.date}
              </p>
              {/* --- Themed description --- */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
