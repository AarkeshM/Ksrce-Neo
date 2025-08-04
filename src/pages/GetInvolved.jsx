import React from 'react';

export default function GetInvolved() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-sky-300 mb-12">
        Get Involved
      </h1>

      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Students */}
        <div className="bg-blue-800/20 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-sky-300 mb-3">
            For Student Innovators
          </h2>
          <p className="text-blue-100 mb-4 leading-relaxed">
            Students can engage with KSRCE NEO through various avenues, including internships,
            project collaborations, and participation in workshops and events. These opportunities
            provide hands-on experience, mentorship, and exposure to the startup ecosystem.
          </p>
          <a href='https://forms.gle/miZPmmZxsLgjoHrJ7'>
            <button className="
            relative inline-block bg-gradient-to-r from-sky-500 to-blue-700 
            text-white font-semibold py-2 px-5 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition transform
            before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-10 before:rounded-lg before:transition
          ">
              Explore Student Opportunities
            </button>
          </a>
        </div>

        <div className="bg-blue-800/20 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-sky-300 mb-3">
            For StartUps
          </h2>
          <p className="text-blue-100 mb-4 leading-relaxed">
            KSRCE NEO is the perfect launchpad for ambitious startups to bring their ideas to life.
            Gain access to innovation labs, expert mentorship, networking opportunities, and the
            resources you need to accelerate your business growth. Join us and turn your vision
            into a successful venture.
          </p>
          <a href='https://forms.gle/Wc7M6TbAMW5C3JjHA'>
            <button className="relative inline-block bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition transform before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-10 before:rounded-lg before:transition"
            >
              Apply as a Startup
            </button>
          </a>
        </div>

      {/* Mentors */}
      <div className="bg-blue-800/20 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-bold text-sky-300 mb-3">
          For Mentors
        </h2>
        <p className="text-blue-100 mb-4 leading-relaxed">
          Experienced professionals and industry experts can contribute to KSRCE NEO as mentors,
          guiding startups and sharing their knowledge. Mentors play a crucial role in shaping
          the next generation of entrepreneurs.
        </p>
        <a href='https://forms.gle/Wc7M6TbAMW5C3JjHA'>
          <button className="
            relative inline-block bg-gradient-to-r from-sky-500 to-blue-700 
            text-white font-semibold py-2 px-5 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition transform
            before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-10 before:rounded-lg before:transition
          ">
            Become a Mentor
          </button>
        </a>
      </div>

      {/* Corporate Partners */}
      <div className="bg-blue-800/20 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-bold text-sky-300 mb-3">
          For Corporate Partners
        </h2>
        <p className="text-blue-100 mb-4 leading-relaxed">
          Corporations can partner with KSRCE NEO to foster innovation, access cutting-edge technologies,
          and engage with startups. Collaboration opportunities include sponsoring events, providing
          resources, and participating in joint projects.
        </p>
        <a href='https://forms.gle/VBgGqVhkqPetoWqu8'>
          <button className="
            relative inline-block bg-gradient-to-r from-sky-500 to-blue-700 
            text-white font-semibold py-2 px-5 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition transform
            before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-10 before:rounded-lg before:transition
          ">
            Explore Partnership Opportunities
          </button>
        </a>
      </div>
    </div>
    </div >
  );
}
