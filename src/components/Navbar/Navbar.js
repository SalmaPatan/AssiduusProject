import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountsIcon from '@mui/icons-material/AccountBalanceWallet';
import PayrollIcon from '@mui/icons-material/AttachMoney';
import ReportsIcon from '@mui/icons-material/Description';
import AdvisorIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import { connect } from 'react-redux';

const NavOptions = [
  {
    name: 'Dashboard',
    pathname: "/",
    isActive: true,
    icon: <DashboardIcon />
  },
  {
    name: 'Accounts',
    pathname: "/accounts",
    isActive: false,
    icon: <AccountsIcon />

  },
  {
    name: 'Payroll',
    pathname: "/payroll",
    isActive: false,
    icon: <PayrollIcon />

  },
  {
    name: 'Reports',
    pathname: "/reports",
    isActive: false,
    icon: <ReportsIcon />

  },
  {
    name: 'Adviser',
    pathname: "/adviser",
    isActive: false,
    icon: <AdvisorIcon />

  },
  {
    name: 'Contacts',
    pathname: "/contacts",
    isActive: false,
    icon: <ContactsIcon />

  },

]

const Navbar = ({ pathname }) => {
  return (
    <div class="width-200 mt-10 bg-white">
      <nav>
        <ul>
          {NavOptions.map((option, index) =>
            <li
              key={index}
              class={`h-12 w-52 flex px-10 items-center pointer ${option.pathname === pathname ? 'bg-green-500 text-white' : ''}`}
            >
              {option.icon}
              <a href={`${option.pathname}`} class="m-2">{option.name}</a></li>
          )}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pathname: state.app.pathname
})

export default connect(mapStateToProps, null)(Navbar);