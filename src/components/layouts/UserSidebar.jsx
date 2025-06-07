import React from 'react';
import { NavLink } from 'react-router-dom';

function UserSidebar() {
    const activeStyle = {
    backgroundColor: '#03A9FA',
    color: 'white',
  };
  return (
  <>
  <h4 className='up-sidebarHeading'>Menus</h4>
    <ul className="list-unstyled p-3" style={{ backgroundColor: "white" }}>
    {[
      { urlPasses: '/user/user-profile', label: 'My Profile' },
      { urlPasses: '/user/invoices', label: 'Invoices' },
      { urlPasses: '/user/library', label: 'Library' },
      { urlPasses: '/user/associative-members', label: 'Associative Membership Payments' },
      { urlPasses: '/user/conference', label: 'Conference & Certificates' },
      { urlPasses: '/user/logout', label: 'Logout' },
    ].map(({ urlPasses, label }) => (
      <li key={urlPasses} className="mb-2">
        <NavLink to={urlPasses} className="btn w-100 text-start fw-bold"
          style={({ isActive }) => (isActive ? activeStyle : { paddingLeft: '0.5rem', textAlign: 'left'  })}
        >
          {label}
        </NavLink>
      </li>
    ))}

    <li>

    </li>
  </ul>
  </>

  )
}

export default UserSidebar