import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-5xl mx-auto px-4 flex space-x-6">
        <Link to="/" className="hover:underline">Beranda</Link>
        <Link to="/about" className="hover:underline">Video</Link>
        <Link to="/products" className="hover:underline">Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;
