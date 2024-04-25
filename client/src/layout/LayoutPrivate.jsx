import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SolidButton from "../components/Solid-button/Solid-button";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
    <Navbar />
    <SolidButton />
    <Outlet /> : <Navigate to = "/"/>
    <Footer />
    </>
  ) 
};

export default LayoutPrivate;

