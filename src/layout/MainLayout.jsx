import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
           <div className="w-3/4 mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;