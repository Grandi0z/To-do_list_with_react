import React, { useRef, useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import useOnClickOutside from './utils/useOnClickOutside';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  const [dropdown, setDropdown] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];

  return (
    <>
      <nav>
        <ul className="nav-links">
          {links.map((link) => (
            <React.Fragment key={link.text}>
              {(() => {
                if (link.path === 'login') {
                  if (!user) {
                    return (
                      <li>
                        <NavLink to={link.path}>{link.text}</NavLink>
                      </li>
                    );
                  }
                } else if (link.path === 'profile') {
                  if (user) {
                    return (
                      <li>
                        <NavLink to={link.path}>
                          {link.text}
                        </NavLink>
                      </li>
                    );
                  }
                } else {
                  return (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  );
                }
                return <></>;
              })()}
            </React.Fragment>

          ))}

          <li ref={ref}>
            <button type="button" onClick={() => setDropdown((prev) => !prev)}>
              Services
              {' '}
              <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )}
          </li>
          {!user && (
          <li className="log-in">
            <span className="log-to-edit-message">Log in to edit to-dos</span>
          </li>
          )}
        </ul>
      </nav>
      {user && (
      <div className="logout">
        <p>{user}</p>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      )}
    </>

  );
};

export default Navbar;
