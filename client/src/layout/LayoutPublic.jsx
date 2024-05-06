import React from 'react'
import Navbar from "../components/Navbar/navbar.jsx";
import Footer from "../components/Footer/footer.jsx";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default LayoutPublic;