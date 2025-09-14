import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

const Upcomingevents = [
  { title: "Idea Clinic", desc: "Compete and innovate with cutting-edge tech." },
  { title: "Hackathon", desc: "Solve real-world problems with creativity." },
  { title: "Boot Camp", desc: "Turn your idea into a solid business model." },
  { title: "Founder Talk Series", desc: "Hear from successful founders and leaders." },
  { title: "Hatch & Launch Series", desc: "Understand patents, trademarks, and more." },
  { title: "Demo Days & Pitch Events", desc: "Showcase your startup to investors & mentors." }
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50 px-4 sm:px-6 lg:px-10 py-16">
      {/* Upcoming Events */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-10">
        Upcoming Events
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {Upcomingevents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-blue-900 mb-1">{event.title}</h3>
            <p className="text-sm text-blue-700">{event.desc}</p>
            <button className="mt-4 inline-flex items-center text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-sky-700 hover:from-blue-700 hover:to-sky-800 px-4 py-2 rounded-full shadow transition">
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

      {/* Past Events */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-12">
        Past Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-blue-50 border border-blue-200 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center items-center bg-white p-4" style={{ minHeight: "200px" }}>
              <img
                src={event.image}
                alt={event.title}
                className="object-contain max-h-56 w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{event.title}</h3>
              <p className="text-xs text-blue-500 mb-1">{event.date}</p>
              <p className="text-sm text-blue-700 leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
