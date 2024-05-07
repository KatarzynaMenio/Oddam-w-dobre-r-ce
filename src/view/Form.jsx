import Navigation from "../components/Navigation.jsx";
import Contact from "../components/Contact.jsx";

export default function Form() {
    return (
        <div >
            <div className="content">
                <Navigation/>
                Form
            </div>
            <div className="footer-wrapper">
                <Contact/>
            </div>
        </div>
    )
}