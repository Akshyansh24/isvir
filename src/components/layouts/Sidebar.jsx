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
          { urlPasses: '/profile', label: 'My Profile' },
          { urlPasses: '/invoices', label: 'Invoices' },
          { urlPasses: '/library', label: 'Library' },
          { urlPasses: '/membership', label: 'Membership Payments' },
          { urlPasses: '/conference', label: 'Conference & Certificates' },
          { urlPasses: '/logout', label: 'Logout' },
        ].map(({ urlPasses, label }) => (
          <li key={urlPasses} className="mb-3">
            <NavLink
              to={urlPasses}
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
