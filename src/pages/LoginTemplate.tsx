import Navbar from "../components/Navbar";
import loginBg from "../assets/bg-login.png";
import { Outlet } from "react-router-dom";

const LoginTemplate = () => {
  return (
    <>
      <Navbar />
      <img src={loginBg} alt="loginBg" className="w-full relative top-0" />
      <Outlet />
    </>
  );
};

export default LoginTemplate;
