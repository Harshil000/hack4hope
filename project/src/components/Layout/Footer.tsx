import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-800">QueueWise Pro</h3>
            <p className="mt-2 text-sm text-neutral-600">
              AI-powered queue management for modern service centers.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-800 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {['Healthcare', 'Banking', 'Government', 'Retail'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-neutral-600 hover:text-primary-dark">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-800 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-neutral-600 hover:text-primary-dark">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-neutral-800 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {['Privacy', 'Terms', 'Cookies', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-neutral-600 hover:text-primary-dark">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} QueueWise Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-neutral-500 hover:text-primary-dark"
              >
                <span className="sr-only">{item}</span>
                <span className="text-sm">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;