import {Link} from "react-router-dom";
import { Link as ReacScrollLink}  from 'react-scroll';

export default function Navigation() {
    return (
            <nav style={{width:"100%", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <div>
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <div>
                    <ReacScrollLink to="start-section">Start</ReacScrollLink>
                    <ReacScrollLink to="info-section">O co chodzi?</ReacScrollLink>
                    <ReacScrollLink to="about-section">O nas</ReacScrollLink>
                    <ReacScrollLink to="fund-and-org-section">Fundacja i organizacje</ReacScrollLink>
                    <ReacScrollLink to="contact-section">Kontakt</ReacScrollLink>
                </div>


            </nav>
    )


}