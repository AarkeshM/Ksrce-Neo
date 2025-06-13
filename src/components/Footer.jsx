export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white text-center py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-semibold text-lg">Contact Us</p>
        <p>Email: info@ksrce.edu.in</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Address: K.S.R. College of Engineering, Tamil Nadu</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} KSRCE NEO. All rights reserved.</p>
      </div>
    </footer>
  );
}