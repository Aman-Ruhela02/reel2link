import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <img src="/newlogo1.png" alt="Reel2Link" className="h-11 w-60" />
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/about" className="text-blue-400 hover:text-blue-800">
            About
          </Link><Link to="/privacy-policy" className="text-blue-400 hover:text-blue-800">
            Privacy-Policy
          </Link>
          <Link to="/blog" className="text-blue-400 hover:text-blue-800">
            Blog
          </Link>

          <span className="text-gray-500 hidden md:block">
            Click the links Instagram won’t
          </span>
        </div>
      </div>
    </nav>
  );
}
