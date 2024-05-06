import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer/footer.jsx";
import Navbar from "../components/Navbar/navbar.jsx";

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
    <Navbar />
    <Outlet /> : <Navigate to = "/"/>
    <Footer />
    </>
  ) 
};

export default LayoutPrivate;

