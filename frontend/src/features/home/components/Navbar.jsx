import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="logo.PNG" alt="logo" className="h-24 md:h-32 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-lime-400">
            Home
          </a>
          <a href="#" className="hover:text-lime-400">
            Programs
          </a>
          <a href="#" className="hover:text-lime-400">
            About
          </a>
          <a href="#" className="hover:text-lime-400">
            Trainers
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-medium">
            Contact Us
          </button>
          <button className="text-lime-400 px-4 py-2 border border-lime-400 rounded-md font-medium">
            Get Started
          </button>
          <Menu className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
