import {Link} from "react-router-dom";
import { Link as ReacScrollLink}  from 'react-scroll';

export default function Navigation() {
    return (
            <nav className="nav-style">
                <div className="log-links">
                    <Link className="link" to="/logowanie">Zaloguj</Link>
                    <Link className="link" to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="navi-links">
                    <ReacScrollLink className="link-scroll" to="start-section">Start</ReacScrollLink>
                    <ReacScrollLink className="link-scroll" to="info-section">O co chodzi?</ReacScrollLink>
                    <ReacScrollLink className="link-scroll" to="about-section">O nas</ReacScrollLink>
                    <ReacScrollLink className="link-scroll" to="fund-and-org-section">Fundacja i organizacje</ReacScrollLink>
                    <ReacScrollLink className="link-scroll" to="contact-section">Kontakt</ReacScrollLink>
                </div>
            </nav>
    )
}