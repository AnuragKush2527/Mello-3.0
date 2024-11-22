import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  User,
  Calendar,
  Users,
  LogOut,
  Settings,
  Star,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import axios from "axios";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user', {
          headers: {
            Authorization: `${localStorage.getItem('token')}` // Assuming you're using JWT for auth
          }
        }); // Replace with your API endpoint
        setUser(response.data); // Assuming the API response contains { name, username }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: User, label: 'Your Profile', path: '/profile' },
    { icon: Calendar, label: 'Joined Events', path: '/dashboard/joined-events' },
    { icon: Star, label: 'Hosted Events', path: '/dashboard/hosted-events' },
    { icon: Users, label: 'My Buddies', path: '/dashboard/buddies' },
    { icon: MessageCircle, label: 'Community Chats', path: '/dashboard/chats' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 pt-16">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar - Desktop */}
      <div className={`
        fixed h-full bg-white shadow-lg transition-all duration-300 z-40
        lg:w-64 lg:left-0 lg:transform-none
        ${isMobileMenuOpen ? 'w-64 left-0' : 'w-64 -left-64'}
      `}>
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6 pt-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              {user ? (
                <>
                  <h2 className="font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">Loading...</p>
              )}
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive(item.path)
                  ? 'bg-primary-50 text-primary-600'
                  : 'hover:bg-gray-50 text-gray-700'
                  }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`
        flex-1 transition-all duration-300
        lg:ml-64
        ${isMobileMenuOpen ? 'ml-64' : 'ml-0'}
      `}>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}