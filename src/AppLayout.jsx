// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const AppLayout = () => {
    return (
       <>
       <Navbar/>
       <Outlet/>
       </>
    );
}

export default AppLayout;
