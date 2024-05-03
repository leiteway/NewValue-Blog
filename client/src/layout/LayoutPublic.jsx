import React from 'react'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SolidButton from "../components/solid-button/solid-button";
import { Outlet } from "react-router-dom";


const LayoutPublic = () => {
  return (
    <>
    <Header />
    <SolidButton />
    <Outlet />
    <Footer />
    </>
  );
}

export default LayoutPublic;