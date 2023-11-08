import './App.css';
import { connect } from 'react-redux';
import { setPathname } from './redux/userSlice';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Navbar/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard';
import { useEffect } from 'react';
import Payroll from './components/Pages/Payroll';
import Adviser from './components/Pages/Adviser';
import Accounts from './components/Pages/Accounts';
import Contacts from './components/Pages/Contacts';
import Reports from './components/Pages/Reports';

function App({ setPathname, pathname }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setPathname(location.pathname)

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [location.pathname])

  return (
    <div className="App">
      <Header />
      <div class="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/adviser" element={<Adviser />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pathname: state.app.pathname
})
const mapDispatchToProps = {
  setPathname
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
