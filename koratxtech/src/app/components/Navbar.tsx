import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              KoratXtech
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                News
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-300 hover:text-white">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com" className="text-gray-300 hover:text-white">
              <FaYoutube className="h-5 w-5" />
            </Link>
            <Link 
              href="/submit"
              className="bg-[#ff6b35] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ff8c35] transition-colors"
            >
              Submit Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 