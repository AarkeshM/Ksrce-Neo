import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-blue-950 py-10 text-center text-blue-100 "
    >
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p className="text-xl font-semibold text-white">Contact Us</p>
        <p>
          <a
            href="mailto:info@ksrce.edu.in"
            className="hover:text-blue-300 transition-colors"
          >
            info@ksrce.edu.in
          </a>
        </p>
        <p>
          <a
            href="tel:+919XXXXXXXXX"
            className="hover:text-blue-300 transition-colors"
          >
            +91-XXXXXXXXXX
          </a>
        </p>
        <p>K.S.R. College of Engineering, Tamil Nadu</p>

        <div className="border-t border-blue-600 mt-6 pt-4">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} <span className="font-medium">KSRCE NEO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
