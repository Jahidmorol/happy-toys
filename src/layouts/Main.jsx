import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shered/Footer';
import NavBar from '../pages/shered/NavBar';

const Main = () => {

    const location = useLocation();
//   console.log(location);

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Happy Toys - Home`;
    } else {
      document.title = `Happy Toys ${location.pathname.replace("/", "- ")}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;