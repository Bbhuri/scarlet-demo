import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainTemplate = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="my-12 mx-20">
        <Outlet />
      </div>
      {/* <LoginFooter /> */}
    </div>
  );
}

export default MainTemplate