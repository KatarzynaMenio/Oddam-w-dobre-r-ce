import decoration_img from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

export default function About() {
    return (
        <div id="about-section" className="about-section-style">
            <div className="about-left-side">
                <div className="about-content">
                    <h3>O nas</h3>
                    <img src={decoration_img} alt="decoration"/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <span><img src={signature} alt="signature"/></span>
                </div>
            </div>
            <div className="about-section-img"></div>
        </div>
    )
}