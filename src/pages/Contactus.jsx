import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // <--- 1. IMPORT EMAILJS

// --- ICON BASE COMPONENTS (HYBRID STYLES) ---
// (Your existing Icon components remain exactly the same...)
const OutlineIconBase = ({ className = "text-gray-400", size = "24", children, strokeWidth = "2" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>
);
const SolidIconBase = ({ className = "text-gray-400", size = "24", children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} aria-hidden="true">{children}</svg>
);

// --- SOLID ICONS ---
const IconUserSolid = (props) => (<SolidIconBase {...props}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm7 13a7.35 7.35 0 0 0-3.32-.87A11 11 0 0 0 12 14c-1.33 0-2.61.18-3.68.53a7.35 7.35 0 0 0-3.32.87c-3 1.25-4 4-4 7h24c0-3-1-5.75-4-7z"/></SolidIconBase>);
const IconMailSolid = (props) => (<SolidIconBase {...props}><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></SolidIconBase>);
const IconCheckSolid = (props) => (<SolidIconBase {...props}><path d="M9 16.17l-4.59-4.59L3 13l6 6L21 7l-1.41-1.41z"/></SolidIconBase>);
const IconAlertSolid = (props) => (<SolidIconBase {...props}><path d="M13 14H11V9h2m0 9H11v-2h2m-1-16L1 21h22L12 2z"/></SolidIconBase>);
const IconMessageSolid = (props) => (<SolidIconBase {...props}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></SolidIconBase>);

// --- OUTLINE ICONS ---
const IconPhoneOutline = (props) => (<OutlineIconBase {...props}><rect x="3" y="2" width="18" height="20" rx="2" ry="2" transform="rotate(0)"/><line x1="7" y1="2" x2="17" y2="2"/><line x1="7" y1="22" x2="17" y2="22"/><polyline points="12 16 12 18"/></OutlineIconBase>);
const IconMapPinOutline = (props) => (<OutlineIconBase {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></OutlineIconBase>);
const IconMailOutline = (props) => (<OutlineIconBase {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></OutlineIconBase>);
const IconWhatsappOutline = (props) => (<OutlineIconBase {...props}><path d="M22 4s-2 1-3 1-3 0-3 2c0 2 1 3 3 3s3-1 3-3V4z"/><path d="M15 12.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5z"/><path d="M21 15.2c0 2.2-1 4.5-3.5 4.5h-10c-3 0-4.5-2.5-4.5-5.5V9.5c0-3 1.5-5.5 4.5-5.5h6.5"/></OutlineIconBase>); 
const IconTwitterOutline = (props) => (<OutlineIconBase {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></OutlineIconBase>);
const IconLinkedinOutline = (props) => (<OutlineIconBase {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></OutlineIconBase>);

// Framer Motion Variants
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

// SVG Component
const IdeaExchangeSVG = () => (
    <svg className="w-full h-auto" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="70" y="40" width="160" height="120" rx="10" fill="#1e3a8a" className="fill-blue-900 opacity-80" />
        <rect x="80" y="50" width="140" height="100" rx="5" fill="#FFFFFF" className="fill-white" />
        <g transform="translate(130, 20)" className="fill-amber-500 text-amber-500" style={{ filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.4))' }}>
            <path d="M20 0a10 10 0 0 0-10 10v10a10 10 0 0 0 10 10h0a10 10 0 0 0 10-10V10a10 10 0 0 0-10-10z" transform="translate(10, 0)" fill="currentColor"/>
            <circle cx="20" cy="10" r="10" fill="currentColor" />
            <rect x="18" y="20" width="4" height="6" fill="currentColor" />
            <rect x="16" y="26" width="8" height="2" fill="#1e3a8a" className="fill-blue-900" />
        </g>
        <g transform="translate(30, 150)"><circle cx="10" cy="10" r="10" fill="#1e3a8a" className="fill-blue-900" /><rect x="0" y="20" width="20" height="20" rx="4" fill="#1e3a8a" className="fill-blue-900" /></g>
        <g transform="translate(250, 150)"><circle cx="10" cy="10" r="10" fill="#1e3a8a" className="fill-blue-900" /><rect x="0" y="20" width="20" height="20" rx="4" fill="#1e3a8a" className="fill-blue-900" /></g>
        <path d="M40 160 C 100 130, 100 110, 85 95" stroke="#fbbf24" strokeWidth="2" fill="none" strokeDasharray="4 4" className="stroke-amber-500" />
        <path d="M260 160 C 200 130, 200 110, 215 95" stroke="#fbbf24" strokeWidth="2" fill="none" strokeDasharray="4 4" className="stroke-amber-500" />
        <rect x="90" y="70" width="20" height="30" rx="3" fill="#bfdbfe" className="fill-blue-200" /><rect x="120" y="80" width="20" height="20" rx="3" fill="#bfdbfe" className="fill-blue-200" /><rect x="150" y="60" width="20" height="40" rx="3" fill="#bfdbfe" className="fill-blue-200" /><rect x="180" y="90" width="20" height="10" rx="3" fill="#bfdbfe" className="fill-blue-200" />
    </svg>
);


const ContactUs = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // --- UPDATED SEND EMAIL FUNCTION ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Replace the strings below with your actual EmailJS credentials
    const SERVICE_ID = "service_sbms0l6";
    const TEMPLATE_ID = "template_eojvqbn";
    const PUBLIC_KEY = "J5sX7hD7hNaUxqReK";

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("success");
          formRef.current?.reset();
          setIsSending(false);
          console.log(result.text);
        },
        (error) => {
          setStatus("error");
          setIsSending(false);
          console.error(error.text);
        }
      );
  };
  // -----------------------------------

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <motion.div
        className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row border border-blue-900/10 my-12"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Left Section: Information & Quick Links */}
        <div className="lg:w-1/3 p-2 lg:p-0 mb-10 lg:mb-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-blue-100">
          <motion.h2 variants={item} className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">Let's Collaborate.</motion.h2>
          <motion.div variants={item} className="mb-8 max-w-[180px] sm:max-w-xs mx-auto lg:mx-0"><IdeaExchangeSVG /></motion.div>
          <motion.p variants={item} className="text-gray-600 mb-8 text-base sm:text-lg">We're here to help you turn ideas into reality. Let's start a conversation!</motion.p>
          <div className="space-y-6">
            <motion.div variants={item} className="flex items-start group cursor-pointer transition transform duration-300 hover:-translate-y-0.5">
              <IconMailOutline className="mt-1 mr-4 text-2xl text-amber-500 group-hover:text-blue-900 transition" size="28" strokeWidth="2" />
              <div><p className="font-semibold text-gray-700">Email Us</p><a href="mailto:neo@ksrce.ac.in" className="text-sm text-gray-500 hover:text-amber-500 transition">neo@ksrce.ac.in</a></div>
            </motion.div>
            <motion.div variants={item} className="flex items-start group cursor-pointer transition transform duration-300 hover:-translate-y-0.5">
              <IconPhoneOutline className="mt-1 mr-4 text-2xl text-amber-500 group-hover:text-blue-900 transition" size="28" strokeWidth="2" />
              <div><p className="font-semibold text-gray-700">Call Us</p><a href="tel:+918220244951" className="text-sm text-gray-500 hover:text-amber-500 transition">+91 8220244951</a></div>
            </motion.div>
            <motion.div variants={item} className="flex items-start group cursor-pointer transition transform duration-300 hover:-translate-y-0.5">
              <IconMapPinOutline className="mt-1 mr-4 text-2xl text-amber-500 group-hover:text-blue-900 transition" size="28" strokeWidth="2" />
              <div><p className="font-semibold text-gray-700">Find Us</p><span className="text-sm text-gray-500">KSRCE Council For Innovation & Incubation, Tiruchengode, Tamil Nadu</span></div>
            </motion.div>
          </div>
          <motion.div variants={item} className="mt-10 pt-6 border-t border-blue-100">
            <p className="font-semibold text-gray-700 mb-3">Connect on Socials</p>
            <div className="flex space-x-5">
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-amber-500 transition-colors"><IconWhatsappOutline className="text-3xl" size="30" strokeWidth="2" /></motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-amber-500 transition-colors"><IconTwitterOutline className="text-3xl" size="30" strokeWidth="2" /></motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-400 hover:text-amber-500 transition-colors"><IconLinkedinOutline className="text-3xl" size="30" strokeWidth="2" /></motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-2/3 p-2 lg:p-0 lg:pl-12">
          <motion.h3 variants={item} className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Send us a quick message.</motion.h3>

          <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item} className="md:col-span-1">
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <div className="relative">
                <IconUserSolid className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size="20" />
                <input id="from_name" type="text" name="from_name" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300" placeholder="John Doe" />
              </div>
            </motion.div>

            <motion.div variants={item} className="md:col-span-1">
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <div className="relative">
                <IconMailSolid className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size="20" />
                <input id="reply_to" type="email" name="reply_to" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300" placeholder="you@example.com" />
              </div>
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <div className="relative">
                <IconMessageSolid className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size="20" />
                <input id="subject" type="text" name="subject" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300" placeholder="I have a project idea..." />
              </div>
            </motion.div>

            <motion.div variants={item} className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300 resize-none" placeholder="Type your message here..." />
            </motion.div>

            <motion.div variants={item} className="md:col-span-2 mt-2">
              <motion.button type="submit" disabled={isSending} whileHover={{ scale: 1.01, boxShadow: "0 8px 15px rgba(245, 158, 11, 0.4)" }} whileTap={{ scale: 0.98 }} className="w-full flex justify-center items-center bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold text-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
                {isSending ? (<><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</>) : ("Send Message Now")}
              </motion.button>
            </motion.div>

            <div className="md:col-span-2 mt-4">
              {status === "success" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-4 bg-amber-50 border border-amber-400 text-blue-900 rounded-xl shadow-sm flex items-center justify-center font-medium">
                  <IconCheckSolid className="text-2xl mr-3 fill-blue-900" size="24" /><p>Success! Your message has been sent. We'll be in touch!</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-4 bg-red-50 border border-red-400 text-red-700 rounded-xl shadow-sm flex items-center justify-center font-medium">
                  <IconAlertSolid className="text-2xl mr-3 fill-red-700" size="24" /><p>Oops! Failed to send. Please check your connection and try again.</p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;