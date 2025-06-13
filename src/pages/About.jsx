export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">About KSRCE NEO</h1>
      <div className="space-y-4">
        <p className="text-gray-700 mb-4">
        KSRCE NEO is the incubation initiative by K.S.R. College of Engineering, aiming to foster innovation,
        entrepreneurship, and tech excellence among young minds.
      </p>
      <p className="text-gray-700">
        Our mission is to create an environment that nurtures startup culture, supports student-led ideas, and
        provides the tools necessary for success — mentoring, funding, infrastructure, and a dynamic network.
      </p>
        <h2 className="text-2xl font-semibold">Vision:</h2>
        <p>To become a leading hub for technological innovation and entrepreneurship that contributes to regional development and national progress.</p>
        <h2 className="text-2xl font-semibold">Mission:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To nurture a culture of innovation and creativity among students and faculty.</li>
          <li>To support early-stage startups with mentoring, technical guidance, and funding access.</li>
          <li>To build industry-academia linkages and foster entrepreneurial thinking.</li>
          <li>To enable inclusive development by supporting socially relevant innovations.</li>
        </ul>
      </div>
    </div>
  );
}