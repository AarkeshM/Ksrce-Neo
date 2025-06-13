import React from "react";
import logo from "../assets/hero.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center -mt-16"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="text-center relative z-10 px-4 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Empowering the Next Generation Innovators
          </h1>
          <p className="text-lg md:text-xl mb-6">
            KSRCE NEO is an incubation center dedicated to nurturing startups
            by providing resources, mentorship, and funding support.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-10 bg-gray-100 max-w-6xl mx-auto rounded-xl -mt-24 shadow-lg relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">50+</h2>
          <p className="text-gray-600">Startups Incubated</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">$10M+</h2>
          <p className="text-gray-600">Funding Raised</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">200+</h2>
          <p className="text-gray-600">Jobs Created</p>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-gray-50 hover:bg-white shadow-md hover:shadow-lg rounded-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-green-700">
              Incubation Program
            </h3>
            <p className="text-gray-600">
              A comprehensive program for early-stage startups, with access to
              resources, mentorship, and funding opportunities.
            </p>
          </div>
          <div className="p-6 bg-gray-50 hover:bg-white shadow-md hover:shadow-lg rounded-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-green-700">
              Acceleration Program
            </h3>
            <p className="text-gray-600">
              Designed to help startups scale quickly with workshops,
              networking, and investor connects.
            </p>
          </div>
          <div className="p-6 bg-gray-50 hover:bg-white shadow-md hover:shadow-lg rounded-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-green-700">
              Mentorship Program
            </h3>
            <p className="text-gray-600">
              Connect with industry veterans for personalized guidance and
              strategic support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
