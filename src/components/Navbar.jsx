import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/ksrce-neo-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white via-purple-500 to-indigo-500 text-black fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="KSRCE NEO" className="w-16 h-16 rounded-full border border-transparent" />
          <span className="text-xl font-bold tracking-wider">KSRCE NEO</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to='/programs' className="hover:text-yellow-300">Program</Link>
          <Link to="/services" className="hover:text-yellow-300">Services</Link>
          <Link to="/startups" className="hover:text-yellow-300">Startups</Link>
          <Link to="/domains" className="hover:text-yellow-300">Domains</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
        <Link to="/apply" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Apply Now</Link>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-950">
          <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="block" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" className="block" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/support" className="block" onClick={() => setOpen(false)}>Support</Link>
          <Link to="/domains" className="block" onClick={() => setOpen(false)}>Domains</Link>
          <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}