import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [checkMail, setcheckMail] = useState(localStorage.getItem('usertype'))


  useEffect(() => {
    if (checkMail == null) {
      navigate('/login');
    }
    if (checkMail == "admin") {
      navigate('/admin');
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('mail');
    localStorage.removeItem('usertype');
    setcheckMail(null)
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary-dark font-bold text-xl">WaitLess</span>
            </div>
          </div>

          <div className='btn-primary h-fit w-fit px-4 py-2 cursor-pointer mt-3' onClick={logout}>Logout</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
