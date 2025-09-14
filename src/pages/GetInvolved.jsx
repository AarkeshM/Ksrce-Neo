import React from "react";

export default function GetInvolved() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-white to-sky-50">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-blue-800 mb-14">
        Get Involved
      </h1>

      {/* Cards wrapper */}
      <div className="grid gap-10 sm:gap-10 md:grid-cols-1 lg:gap-12 max-w-6xl mx-auto">
        {/* Students */}
        <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            For Student Innovators
          </h2>
          <p className="text-blue-50 mb-5 leading-relaxed text-sm sm:text-base">
            Students can engage with KSRCE NEO through internships, project
            collaborations, workshops, and events — gaining hands-on experience,
            mentorship, and exposure to the startup ecosystem.
          </p>
          <a href="https://forms.gle/miZPmmZxsLgjoHrJ7">
            <button className="bg-white text-blue-700 font-semibold py-2 px-5 sm:px-6 rounded-lg shadow hover:bg-blue-50 hover:scale-105 transition">
              Explore Student Opportunities
            </button>
          </a>
        </div>

        {/* Startups */}
        <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">For Startups</h2>
          <p className="text-blue-50 mb-5 leading-relaxed text-sm sm:text-base">
            KSRCE NEO is the perfect launchpad for ambitious startups. Get
            access to labs, mentorship, networking, and resources to accelerate
            your business growth.
          </p>
          <a href="https://forms.gle/xtUJMPLvaVZLBZ3o9">
            <button className="bg-white text-blue-800 font-semibold py-2 px-5 sm:px-6 rounded-lg shadow hover:bg-blue-50 hover:scale-105 transition">
              Apply as a Startup
            </button>
          </a>
        </div>

        {/* Mentors */}
        <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">For Mentors</h2>
          <p className="text-blue-50 mb-5 leading-relaxed text-sm sm:text-base">
            Industry experts can guide startups and share their expertise,
            shaping the next generation of entrepreneurs.
          </p>
          <a href="https://forms.gle/Wc7M6TbAMW5C3JjHA">
            <button className="bg-white text-blue-800 font-semibold py-2 px-5 sm:px-6 rounded-lg shadow hover:bg-blue-50 hover:scale-105 transition">
              Become a Mentor
            </button>
          </a>
        </div>

        {/* Corporate Partners */}
        <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            For Corporate Partners
          </h2>
          <p className="text-blue-50 mb-5 leading-relaxed text-sm sm:text-base">
            Corporations can partner with KSRCE NEO to foster innovation,
            support cutting-edge technologies, and collaborate on exciting
            projects.
          </p>
          <a href="https://forms.gle/VBgGqVhkqPetoWqu8">
            <button className="bg-white text-blue-700 font-semibold py-2 px-5 sm:px-6 rounded-lg shadow hover:bg-blue-50 hover:scale-105 transition">
              Explore Partnership Opportunities
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
