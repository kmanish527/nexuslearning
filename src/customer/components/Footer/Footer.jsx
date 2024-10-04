// eslint-disable-next-line no-unused-vars
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
              We offer a wide range of online courses to help you expand your skills and advance your career. Join our community of learners and start your journey today.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-gray-400">Courses</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Email: support@example.com</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400 mb-2">Address: 123 Main Street, City, Country</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <div className="w-6 h-6" fill="currentColor" viewBox="" ><FacebookIcon/></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <div className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" ><InstagramIcon/></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <div className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><XIcon/></div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
