import React from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { Outlet } from "react-router-dom";
import "../../App.css";

const Main = () => {
    console.log("main router");
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;