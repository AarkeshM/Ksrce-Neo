export default function Startups() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Startups @ KSRCE NEO</h2>
      <p className="text-gray-700 mb-4">
        Meet the brilliant startups incubated under NEO and explore their innovative solutions.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <li key={id} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">Startup {id}</h3>
            <p className="text-gray-600">Brief description about the startup and its domain.</p>
          </li>
        ))}
      </ul>
    </div>
  );
}