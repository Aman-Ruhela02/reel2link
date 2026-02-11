export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <img src="/newlogo1.png" alt="Reel2Link" className="h-11 w-60"  />
          
        </div>

        <span className="text-sm text-gray-500 hidden md:block">
          Click the links Instagram won’t
        </span>
      </div>
    </nav>
  );
}
