import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRocket } from "react-icons/fa";

import fablab from "../photos/fab-lab.jpg";
import incubation1 from "../photos/incubation space-1.jpg";
import meeting from "../photos/meeting hall.jpg";
import working from "../photos/co working space.jpg";

const facilities = [
  {
    name: "FAB Lab",
    description:
      "The NEO Fab Lab at KSRCE is a dedicated innovation space equipped with tools for prototyping, fabrication, and research. It serves as a hub for students, faculty, and startups to translate ideas into scalable solutions.",
    features: [
      "Guide students in prototype design and product development.",
      "Support applied R&D and industry collaboration.",
      "Facilitate technology transfer and innovation.",
      "Link Fab Lab outcomes with the NEO Pre-Incubation Centre for startups.",
    ],
    seatings: 50,
    photo: fablab,
  },
  {
    name: "Incubation Space I",
    description:
      "The 3-seater Individual Cabin at KSCRE NEO offers a private, professional workspace designed for focused productivity and small team collaboration.",
    features: [
      "Comfortable 3-person seating with ergonomic chairs and spacious tables",
      "High-speed internet connectivity for seamless workflow",
      "Ideal for startups, co-founders, or project-based teams needing privacy",
      "Access to shared amenities and incubation support from KSCRE NEO",
    ],
    seatings: 30,
    photo: incubation1,
  },
  {
    name: "Co-Working Space",
    description:
      "Modern co-working area with high-speed WiFi, ergonomic furniture, and plenty of power outlets.",
    features: [
      "Flexible seating with high-speed internet",
      "Dedicated workstations and private cabins",
    ],
    seatings: 70,
    photo: working,
  },
  {
    name: "Meeting Hall",
    description:
      "The Meeting Room at KSCRE NEO is a fully equipped, professional space designed for team discussions, client meetings, interviews, and brainstorming sessions.",
    features: [
      "Comfortable seating for 30 participants",
      "High-speed internet and power backup",
      "Projector/LED display and whiteboard for presentations",
      "Suitable for team reviews, virtual meetings, and strategy sessions",
      "Booking available for members and registered guests",
    ],
    seatings: 30,
    photo: meeting,
  },
];

// --- Animation variant for the main page titles ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Facilities = () => (
  // --- Updated background and padding ---
  <section className="w-full px-4 sm:px-6 lg:px-8 mt-16 py-20 bg-slate-50">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-center text-blue-950 mb-4">
        Our Incubation Facilities
      </h2>
      {/* --- Added gold underline --- */}
      <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
    </motion.div>

    <div className="flex flex-col gap-12 max-w-6xl mx-auto">
      {facilities.map((facility, index) => (
        <motion.div
          key={facility.name}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8 }} // --- Consistent lift animation ---
          // --- Updated card styling with new border theme ---
          className={`group flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl shadow-lg p-6 md:p-8 border border-slate-200 bg-white transition-all 
                     ${
                       index % 2 === 1
                         ? "md:flex-row-reverse border-r-8 border-blue-900 hover:border-amber-500"
                         : "border-l-8 border-blue-900 hover:border-amber-500"
                     }`}
        >
          {/* LEFT/RIGHT: Info */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-blue-950 mb-3">
              {facility.name}
            </h3>

            <p className="text-base text-slate-600 mb-4">
              {facility.description}
            </p>

            {facility.features && (
              <>
                <p className="text-lg font-semibold text-blue-950 mt-4 mb-2">
                  Features:
                </p>
                {/* --- Updated list with new icons --- */}
                <ul className="text-slate-600 mb-4 space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaRocket className="text-amber-500 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex items-center mb-8 gap-2">
              {/* --- Added FaUsers icon --- */}
              <FaUsers className="text-amber-500 text-xl" />
              <span className="font-semibold text-slate-600 text-lg">
                {facility.seatings} Seatings
              </span>
            </div>

          </div>

          {/* RIGHT/LEFT: Image */}
          <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-lg shadow-lg">
            <motion.img
              src={facility.photo}
              alt={facility.name}
              className="w-full max-w-[600px] max-h-[600px] object-cover aspect-video rounded-lg"
              whileHover={{ scale: 1.05 }} // --- Kept image zoom ---
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Facilities;
