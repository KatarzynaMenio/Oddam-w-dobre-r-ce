import decoration_img from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
export default function StartHelp() {
    return (
        <div className="main-container">
            <div className="main-content">
                <h2 className="header-style" >Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce </h2>
                <span>
                    <img src={decoration_img} alt="decoration"/>
                </span>
            </div>
            <div className="main-button">
                <Link to="/logowanie" className="single-button" >ODDAJ <br/>RZECZY</Link>
                <Link to="/logowanie" className="single-button">ZORGANIZUJ <br />ZBIÓRKĘ</Link>
            </div>
        </div>
    )
}