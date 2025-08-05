import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social Icons

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-blue-950 py-10 text-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <p className="text-2xl font-bold text-white">Contact Us</p>

          <p className="text-lg">
            <a
              href="mailto:neo@ksrce.ac.in"
              className="hover:text-blue-300 transition-colors"
            >
              neo@ksrce.ac.in
            </a>
          </p>

          <p className="text-lg">
            <a
              href="tel:+918220244951"
              className="hover:text-blue-300 transition-colors"
            >
              +91-8220244951
            </a>
          </p>

          <p className="text-lg">
            KSRCE Council For Innovation & Incubation, Tiruchengode, Tamil Nadu
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/ksrce-neo/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/ksrceneo_official?igsh=ZmZoc2NrOXhmcXht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white text-2xl transition-colors"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="border-t border-blue-600 mt-6 pt-4">
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()}{' '}
              <span className="font-medium">KSRCE NEO</span>. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right: Google Map */}
        <iframe
          title="KSRCE Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.718336285055!2d77.82532318503051!3d11.35878869587054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9640315f64525%3A0xb9ca1e5c305d3759!2sK.S.R.%20College%20of%20Engineerin!5e1!3m2!1sen!2sin!4v1752338375457!5m2!1sen!2sin" 
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-w-md shadow-lg"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
