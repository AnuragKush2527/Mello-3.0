import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UsersRound } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <UsersRound
                className={`h-8 w-8 text-purple-600 transition-all duration-500 ease-in-out`}
              />
              <span className="ml-2 text-2xl font-bold">mellow</span>
            </div>
            <p className="text-gray-400">
              Breaking screen barriers to create real connections through local community events.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Find Events
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Host Event
                </Link>
              </li>
              <li>
                <Link to="/groups" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Join Groups
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@mellow.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mellow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}