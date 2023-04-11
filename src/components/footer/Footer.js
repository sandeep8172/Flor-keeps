import "./Footer.css";
import backgroundLogo from "../assets/footer/backgroundLogo.png";
import arrowNext from "../assets/footer/ArrowNext.png";
import andSign from "../assets/footer/andSign.png";
import vector from "../assets/footer/Vector.png";

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_top">
                <h1>Contact Us</h1>
            </div>
            <div className="footer_mid">
                <h1>join our <span>mailing</span> list</h1>
                <section><p>your email</p><input type="text" /><p>Send <img src={arrowNext} alt="" /></p></section>
                <h2>Austin <img src={andSign} alt="" /> Texas</h2>
                <p className="website">info@florkeeps.com</p>
                <p className="address">130 Ralph Ablanedo Drive,Austin,Texas</p>
                <div className="footer_bottom">
                    <p>Copyright 2021 © Flor Keeps</p>
                    <p>POWERED BY <img src={vector} alt="" /> <span> glass full</span></p>
                </div>
                <img src={backgroundLogo} alt="" className="backLogo" />
            </div>

        </div >
    )
}
export default Footer