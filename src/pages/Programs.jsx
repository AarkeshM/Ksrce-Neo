export default function Programs() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Pre-Incubation</h3>
          <p className="text-gray-600">Idea validation and project grooming support for students.</p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Incubation</h3>
          <p className="text-gray-600">Access to co-working space, seed fund, mentorship, and resources.</p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Acceleration</h3>
          <p className="text-gray-600">Short-term high-impact programs for scaling up innovations.</p>
        </li>
      </ul>
    </div>
  );
}