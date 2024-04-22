import decoration_img from "../assets/Decoration.svg";
import t_shirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import loupe from "../assets/Icon-3.svg";
import arrow from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";

export default function Info() {
    return (
        <div id="info-section" className="info-section">
            <div className="info-header">
                <h3>Wystarczą 4 proste kroki</h3>
                <img src={decoration_img} alt="decoration" className="header-decor"/>
            </div>

            <div className="info-container">
                <div className="single-info">
                    <img src={t_shirt} alt="t_shirt" className="single-img"/>
                    <h4 className="single-header">Wybierz rzeczy</h4>
                    <hr/>
                    <p className="single-paragraph">ubrania, zabawki,<br/> sprzęt i inne</p>
                </div>
                <div className="single-info">
                    <img src={bag} alt="bag" className="single-img"/>
                    <h4 className="single-header">Spakuj je</h4>
                    <hr/>
                    <p className="single-paragraph">skorzystaj z<br/>  worków na śmieci</p>
                </div>
                <div className="single-info">
                    <img src={loupe} alt="loupe" className="single-img"/>
                    <h4 className="single-header">Zdecyduj komu<br/> chcesz pomóc</h4>
                    <hr/>
                    <p className="single-paragraph">wybierz zaufane<br/> miejsce</p>
                </div>
                <div className="single-info">
                    <img src={arrow} alt="arrow" className="single-img"/>
                    <h4 className="single-header">Zamów kuriera</h4>
                    <hr/>
                    <p className="single-paragraph">kurier przyjedzie<br/>  w dogodnym terminie</p>
                </div>
            </div>
            <div className="info-button">
                <Link to="/logowanie" className="single-button" >ODDAJ <br/>RZECZY</Link>
            </div>
        </div>
    )
}