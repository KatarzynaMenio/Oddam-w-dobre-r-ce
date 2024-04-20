import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import home_page from "../assets/Home-Hero-Image.jpg"
import Start from "../components/Start.jsx";
import Info from "../components/Info.jsx";
import About from "../components/About.jsx";
import FundAndOrg from "../components/FundAndOrg.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
    return (
        <div style={{width:"100%"}}>
            <div style={{height: "100vh", display:"flex"}}>
                <div src={home_page} alt="home_page" style={{
                     width: "980px", background: "url("+home_page+")", backgroundPosition:"right", backgroundSize: "cover"
                }}/>
                <div style={{flex: "1 1 auto", marginRight:"150px"}}>
                    <Navigation/>

                </div>

            </div>
            <div>
                <Start/>
                <Info/>
                <About/>
                <FundAndOrg/>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}