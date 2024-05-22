import Navigation from "../components/Navigation.jsx";
import decoration_img from "../assets/Decoration.svg";


export default function LogIn() {
    return (
        <div>
            <div className="login-content">
                <Navigation/>

                <div style={{display: "flex"}}>
                    <div className="login-header" style={{
                        width: '100%',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <h3>Komu pomagamy?</h3>
                        <img src={decoration_img} alt="decoration" className="header-decor"/>

                        <form style={{display: "flex", flexDirection: "column"}}>
                            <label htmlFor="email">Name (4 to 8 characters):</label>
                            <input type="email" id="email" name="email" required minLength="4" maxLength="8" size="10"/>
                            <label htmlFor="password">Name (4 to 8 characters):</label>
                            <input type="text" id="password" name="password" required minLength="4" maxLength="8"
                                   size="10"/>

                            <div style={{display:"flex", justifyContent:"space-around"}}>
                                <button>Załóż konto</button>
                                <button>Zaloguj się</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}