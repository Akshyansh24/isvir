import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeStyle = {
    backgroundColor: '#03A9FA',
    color: 'white',
  };

  return (
    <div
      className="sidebar pt-3"
      style={{ height: '150px', width: '300px', backgroundColor: 'white' }}
    >
      <ul className="list-unstyled">
        {[
          { to: '/profile', label: 'My Profile' },
          { to: '/invoices', label: 'Invoices' },
          { to: '/library', label: 'Library' },
          { to: '/membership', label: 'Membership Payments' },
          { to: '/conference', label: 'Conference & Certificates' },
          { to: '/logout', label: 'Logout' },
        ].map(({ to, label }) => (
          <li key={to} className="mb-3">
            <NavLink
              to={to}
              className="btn w-100 text-start fw-bold"
              style={({ isActive }) => (isActive ? activeStyle : {
                backgroundColor: 'white', color: 'black', paddingLeft: '0.5rem',
                textAlign: 'left'
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
