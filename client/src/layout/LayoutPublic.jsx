import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SolidButton from "../components/Solid-button/Solid-button";
import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
  return (
    <>
    <Navbar />
    <SolidButton />
    <Outlet />
    <Footer />
    </>
  );
}

export default LayoutPublic;