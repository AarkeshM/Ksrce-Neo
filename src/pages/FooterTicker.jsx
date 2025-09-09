import React from "react";
import logo from "../photos/zoho.jpg"; // Replace with your logo path

export default function FooterTicker() {
  const text =
    "🚀 We're partnering with Zoho to supercharge startup growth. Startups get ₹1.86 Lakhs Zoho Wallet Credits valid for 360 days. Access Zoho's full suite of tools - CRM, finance, marketing & more! ";

  return (
    <div className="bg-sky-700 text-white py-2 sm:py-3 flex items-center gap-2 sm:gap-4 overflow-hidden relative">
      {/* Responsive Logo */}
      <a
        href="https://www.zoho.com/en-in/startups/founders-registration.html?src=ksrceneo&zredirect=f" 
        target="_blank"
        rel="noopener noreferrer"
      >
      
      <img
        src={logo}
        alt="Logo"
        className="w-16 sm:w-32 h-auto ml-2 sm:ml-4 flex-shrink-0"
      />
      </a>
      {/* Scrolling Text */}
      <div className="overflow-hidden w-full relative">
        <div className="flex animate-scroll whitespace-nowrap font-semibold text-xs sm:text-lg">
          <span className="mr-16">{text}</span>
          <span className="mr-16">{text}</span>
          <span className="mr-16">{text}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
