import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KoratXtech</h3>
            <p className="text-orange-100">
              Innovating Tomorrow's Technology Today
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-orange-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-orange-100 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-orange-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-orange-500 text-center text-orange-100">
          <p>&copy; {new Date().getFullYear()} KoratXtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;