import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="logo.PNG" alt="logo" className="h-24 md:h-32 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#Home" className="hover:text-lime-400">
            Home
          </a>
          <a href="#Discover" className="hover:text-lime-400">
            Discover
          </a>
          <a href="#Experience" className="hover:text-lime-400">
            Experience
          </a>
          <a href="#Success-Stories" className="hover:text-lime-400">
            Success Stories
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-medium hover:bg-transparent hover:text-lime-400 hover:border-lime-400 hover:border transition-colors">
            Contact Us
          </button>

          <Link
            to="/signup"
            className="text-lime-400 px-4 py-2 border border-lime-400 rounded-md font-medium hover:bg-lime-400 hover:text-black transition-colors"
          >
            Get Started
          </Link>
          <Menu className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
