import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-lime-400 font-bold text-2xl">FitNation</span>
            <p className="text-gray-400 mt-2">
              Elevating fitness to an art form.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-lime-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-lime-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 FitNation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-lime-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
