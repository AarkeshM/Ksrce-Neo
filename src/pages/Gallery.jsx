import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
  {
    title: "AICTE IDEA Lab Selection",
    date: "2025",
    image: "/images/idea-lab.jpg",
    description: "KSRCE selected by AICTE for ₹90 Lakhs grant to establish IDEA Lab."
  },
  {
    title: "4-Star Recognition in Innovation",
    date: "2025",
    image: "/images/4star-award.jpg",
    description: "Awarded FOUR Star by the Innovation Cell, Ministry of Education."
  },
  {
    title: "Puthulir Award & AUSEC Chapter Launch",
    date: "2025",
    image: "/images/ausec-launch.jpg",
    description: "Honored with Puthulir Award and launched aerospace student chapter."
  },
  {
    title: "StartupTN Start-Step Smart Card",
    date: "Nov 2024",
    image: "/images/startup-tn-cards.jpg",
    description: "12 student teams received startup smart cards to access support services."
  },
  {
    title: "Student Incubatees Onboarded",
    date: "2025",
    image: "/images/neo-onboarding.jpg",
    description: "Student startups onboarded under KSRCE NEO for innovation incubation."
  },
  {
    title: "Dr. Balagurusamy Visits NEXGEN",
    date: "2025",
    image: "/images/balagurusamy-visit.jpg",
    description: "Appreciated efforts of alumni-led startup NEXGEN NEXTOPIA at KSRCE."
  },
  {
    title: "Tech Ignite Bootcamp",
    date: "March 2025",
    image: "/images/tech-ignite.jpg",
    description: "Hands-on training on building websites & apps with digital impact."
  },
  {
    title: "PRASKLA FUTURE X Hackathon",
    date: "April 2025",
    image: "/images/futurex-hackathon.jpg",
    description: "Students built apps in real-time during high-energy coding competition."
  },
  {
    title: "Grand Inauguration of KSRCE NEO",
    date: "April 2025",
    image: "/images/neo-inauguration.jpg",
    description: "Inauguration of KSRCE NEO Incubation Centre with StartupTN leadership."
  },
  {
    title: "Hatch & Launch – AZHIZEN Product Launch",
    date: "2025",
    image: "/images/azhizen-launch.jpg",
    description: "Student startup AZHIZEN officially launched under KSRCE NEO."
  },
  {
    title: "Azhizen’s Vision to Venture Launch",
    date: "2025",
    image: "/images/azhizen-founder.jpg",
    description: "Founder Bharathkumar launched his biomedical startup incubated at KSRCE."
  },
  {
    title: "KSR Matric Students Visit NEO",
    date: "2025",
    image: "/images/ksr-matric-visit.jpg",
    description: "11th standard students visited the incubation center to explore innovation."
  },
  {
    title: "Zoho Collaboration with KSRCE NEO",
    date: "2025",
    image: "/images/zoho-collab.jpg",
    description: "Startups received ₹1.86 Lakhs Zoho credits for business tool access."
  },
  {
    title: "Founder's Bench 1.0",
    date: "July 2025",
    image: "/images/founders-bench.jpg",
    description: "Entrepreneurs shared startup stories to inspire students."
  },
  {
    title: "Technical Advisory Committee (TAC) Meeting",
    date: "July 2025",
    image: "/images/tac-meeting.jpg",
    description: "Experts gathered to guide the direction of the innovation ecosystem."
  },
  {
    title: "Neo Spark Innovation Club Launch",
    date: "2025",
    image: "/images/neo-spark.jpg",
    description: "Student-led club launched to promote problem-solving and collaboration."
  },
  {
    title: "MSME Innovative Scheme Grant",
    date: "2025",
    image: "/images/msme-funding.jpg",
    description: "KSRCE recognized as Host Institute; students won ₹15 Lakhs grant."
  },
  {
    title: "Naan Mudhalvan – 18 Ideas Funded",
    date: "2025",
    image: "/images/naan-mudhalvan.jpg",
    description: "18 ideas funded with ₹1.8 Lakhs under state innovation scheme."
  },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="px-4 py-16 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700">
      <h2 className="text-3xl font-bold text-center text-blue-200 mb-12">KSRCE Innovation Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;