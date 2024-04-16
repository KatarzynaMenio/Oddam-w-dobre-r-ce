import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navigation.jsx";

export default function Layout() {
    return (
        <div >
            <div className="content">
                <Navigation/>
                <Outlet/>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}