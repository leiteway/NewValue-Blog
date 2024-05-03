import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SolidButton from "../components/solid-button/solid-button";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
    <Header />
    <SolidButton />
    <Outlet /> : <Navigate to = "/"/>
    <Footer />
    </>
  ) 
};

export default LayoutPrivate;

