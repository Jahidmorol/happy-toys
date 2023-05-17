import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shered/Footer';
import NavBar from '../pages/shered/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;