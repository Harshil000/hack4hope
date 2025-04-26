import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, Calendar, User, BarChart3, Bell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Queue Status', path: '/', icon: <Clock className="w-5 h-5" /> },
    { name: 'Book Slot', path: '/booking', icon: <Calendar className="w-5 h-5" /> },
    { name: 'My Dashboard', path: '/dashboard', icon: <User className="w-5 h-5" /> },
    { name: 'Admin', path: '/admin', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary-dark font-bold text-xl">QueueWise Pro</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-dark text-white'
                    : 'text-neutral-600 hover:bg-primary/10 hover:text-primary-dark'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            {/* <button className="btn-primary">Log In</button> */}
            <Link to={'/login'}>Log In</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100 focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-primary-dark text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between px-3">
              <button
                className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </button>
              {/* <button className="btn-primary">Log In</button> */}
              <Link to={'/login'}>Log In</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
