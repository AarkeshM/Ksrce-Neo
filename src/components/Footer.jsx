import React from "react";
import { motion } from "framer-motion";
// --- Added new icons for contact info ---
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      // --- Kept the dark blue background ---
      className="bg-blue-950 py-16 text-slate-200"
    >
      {/* --- Adjusted layout and gaps for better responsiveness --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          {/* --- Themed heading in gold --- */}
          <p className="text-3xl font-bold text-amber-500">Contact Us</p>

          {/* --- Added icons to contact details --- */}
          <a
            href="mailto:neo@ksrce.ac.in"
            className="flex items-center justify-center lg:justify-start gap-3 text-lg 
                       hover:text-amber-500 transition-colors"
          >
            <FaEnvelope />
            <span>neo@ksrce.ac.in</span>
          </a>

          <a
            href="tel:+918220244951"
            className="flex items-center justify-center lg:justify-start gap-3 text-lg 
                       hover:text-amber-500 transition-colors"
          >
            <FaPhoneAlt />
            <span>+91-8220244951</span>
          </a>

          <div className="flex items-start justify-center lg:justify-start gap-3 text-lg pt-2">
            <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
            <span className="text-left">
              KSRCE Council For Innovation & Incubation, Tiruchengode, Tamil Nadu
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start gap-5 pt-4">
            <motion.a
              href="https://www.linkedin.com/company/ksrce-neo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-amber-500 text-3xl transition-colors"
              whileHover={{ scale: 1.1, y: -2 }} // --- Added animation ---
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/ksrceneo_official?igsh=ZmZoc2NrOXhmcXht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-amber-500 text-3xl transition-colors"
              whileHover={{ scale: 1.1, y: -2 }} // --- Added animation ---
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="flex-1 w-full lg:max-w-lg">
          <iframe
            title="KSRCE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.718336285055!2d77.82532318503051!3d11.35878869587054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9640315f64525%3A0xb9ca1e5c305d3759!2sK.S.R.%20College%20of%20Engineerin!5e1!3m2!1sen!2sin!4v1752338375457!5m2!1sen!2sin"
            width="100%"
            height="300" // --- Increased height for better proportion ---
            style={{ border: 0, borderRadius: "16px" }} // --- Increased border radius ---
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-lg"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 mt-12 pt-8 text-center max-w-7xl mx-auto px-4">
        {/* --- Updated copyright text color --- */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-200">KSRCE NEO</span>. All
          rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
