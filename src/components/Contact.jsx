import decoration_img from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

export default function Contact() {
    return (
        <div id="contact-section">
            <div className="contact-section-style">

                <div className="contact-form contact-content">
                    <div></div>
                    <div className="contact-form-details">
                        <h3>Skontaktuj się z nami</h3>
                        <img src={decoration_img} alt="decoration"/>

                        <div style={{display: "flex"}}>

                            <span style={{display: "flex", flexDirection: "column", width: "200px"}}>
                                <label htmlFor="name" className="label-style">Wpisz swoje imię</label>
                                <input type="text" id="name" name="name" className="input-style" placeholder="Łukasz"/>
                            </span>
                            <span style={{display: "flex", flexDirection: "column", width: "200px"}}>
                                <label htmlFor="name" className="label-style">Wpisz swój email</label>
                                <input type="email" id="email" name="name" className="input-style"
                                    placeholder="łukasz.abc@xyz.com"/>
                            </span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "400px"}}>
                            <label htmlFor="story" className="label-style">Wpisz swoją wiadomość</label>
                            <textarea id="story" name="story" rows="8" cols="40"
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            </textarea>
                            <button className="form-button">Wyślij</button>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-box"></div>
                        <div className="footer-box">Copyright by Coders Lab</div>
                        <div className="footer-box footer-icons">
                            <img src={facebook} alt="facebook"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}