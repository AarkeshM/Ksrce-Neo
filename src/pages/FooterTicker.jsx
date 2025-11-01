import React from "react";
import logo from "../photos/zoho.jpg";
import { FaStar } from "react-icons/fa"; // Added for a premium icon

export default function FooterTicker() {
  // --- Updated text to use a span for the gold accent ---
  const textContent = (
    <>
      We're partnering with Zoho to supercharge startup growth. Startups get{" "}
      <span className="font-bold text-amber-500">
        ₹1.86 Lakhs Zoho Wallet Credits
      </span>{" "}
      valid for 360 days. Access Zoho's full suite of tools - CRM, finance,
      marketing & more!
    </>
  );

  return (
    // --- Changed to the dark blue/gold theme ---
    <div className="bg-blue-950 text-slate-200 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 overflow-hidden relative">
      {/* Responsive Logo */}
      <a
        href="https://www.zoho.com/en-in/startups/founders-registration.html?src=ksrceneo&zredirect=f"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 ml-4 sm:ml-6"
      >
        <img
          src={logo}
          alt="Logo"
          // --- Adjusted size slightly for balance ---
          className="w-20 sm:w-28 h-auto"
        />
      </a>

      {/* --- Added a static gold star icon --- */}
      <FaStar className="text-amber-500 text-2xl sm:text-3xl flex-shrink-0" />

      {/* Scrolling Text */}
      <div className="overflow-hidden w-full relative">
        <div className="animate-scroll flex whitespace-nowrap font-semibold text-sm sm:text-lg">
          {/* --- Using two spans for a perfect loop --- */}
          <span className="mr-16">{textContent}</span>
          <span className="mr-16" aria-hidden="true">
            {textContent}
          </span>
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
          /* --- Slowed down animation and added hover-pause --- */
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
