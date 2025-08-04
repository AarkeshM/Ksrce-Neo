import React from "react";
import { motion } from "framer-motion";
import fablab from "../photos/fab-lab.jpg";
import incubation1 from "../photos/incubation space-1.jpg";
import meeting from "../photos/meeting hall.jpg";
import working from "../photos/co working space.jpg";

const facilities = [
  {
    name: "FAB Lab",
    description: "The 3-seater Individual Cabin at KSCRE NEO offers a private, professional workspace designed for focused productivity and small team collaboration.",
    features: [
      "Comfortable 3-person seating with ergonomic chairs and spacious tables",
      "High-speed internet connectivity for seamless workflow",
      "Ideal for startups, co-founders, or project-based teams needing privacy",
      "Access to shared amenities and incubation support from KSCRE NEO"],
    seatings: 50,
    photo: fablab,
  },
  {
    name: "Incubation Space I",
    description: "The 3-seater Individual Cabin at KSCRE NEO offers a private, professional workspace designed for focused productivity and small team collaboration.",
    features: [
      "Comfortable 3-person seating with ergonomic chairs and spacious tables",
      "High-speed internet connectivity for seamless workflow",
      "Ideal for startups, co-founders, or project-based teams needing privacy",
      "Access to shared amenities and incubation support from KSCRE NEO"],
    seatings: 30,
    photo: incubation1,
  },
  {
    name: "Co-Working Space",
    description: "Modern co-working area with high-speed WiFi, ergonomic furniture, and plenty of power outlets.",
    features: [
    "Flexible seating with high-speed internet",
"Dedicated workstations and private cabins"
    ],
    seatings: 70,
    photo: working,
  },
  {
    name: "Meeting Hall",
    description: "The Meeting Room at KSCRE NEO is a fully equipped, professional space designed for team discussions, client meetings, interviews, and brainstorming sessions.",
features: 
["Comfortable seating for 30 participants",
"High-speed internet and power backup",
"Projector/LED display and whiteboard for presentations",
"Suitable for team reviews, virtual meetings, and strategy sessions",
"Booking available for members and registered guests"],
    seatings: 30,
    photo: meeting,
  },
];

// Animation variants for fade & slide up on scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Facilities = () => (
  <section className="w-full px-4 py-16 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-200 mb-10">
      Our Incubation Facilities
    </h2>
    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
      {facilities.map((facility, index) => (
        <motion.div
          key={facility.name}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(31,39,80,0.25)" }}
          whileTap={{ scale: 0.98 }}
          className={`group flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl shadow-xl p-6
            bg-white/10 backdrop-blur-md border border-blue-300 text-left cursor-pointer transition-all
            ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          {/* LEFT: Info */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
  <h3 className="text-2xl font-semibold text-blue-100 mb-2">{facility.name}</h3>
  
  <p className="text-xl font-semibold text-cyan-950">About this Space:</p>
  <p className="text-cyan-50 mb-3">{facility.description}</p>
  
   {facility.features && (
  <>
    <p className="text-xl font-semibold text-cyan-950 mt-4 mb-2">Features:</p>
    <ul className="list-disc list-inside text-cyan-50 mb-3 space-y-1">
      {facility.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </>
)}
  <div className="flex items-center mb-6">
    <span className="inline-block w-3 h-3 bg-blue-300 rounded-full mr-2" />
    <span className="font-medium text-blue-100">{facility.seatings} Seatings</span>
  </div>
  
  <div className="w-full flex justify-center md:justify-start">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition">
      Book Now
    </button>
  </div>
</div>

          {/* RIGHT: Image */}
          <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-lg shadow-lg">
            <motion.img
              src={facility.photo}
              alt={facility.name}
              className="w-full max-w-[600px] max-h-[600px] object-cover aspect-video rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Facilities;
