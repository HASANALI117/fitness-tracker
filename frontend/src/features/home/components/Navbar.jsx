import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate();
  // const isAuthenticated = localStorage.getItem("token");

  // // Check if user is already logged in and redirect if needed
  // const handleAuthClick = (e) => {
  //   if (isAuthenticated) {
  //     e.preventDefault();
  //     navigate("/dashboard");
  //   }
  // };

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
