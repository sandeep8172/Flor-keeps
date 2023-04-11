import "./FifthPage.css";
import preArrow from "../assets/fifthPage/preArrow.png";
import nextArrow from "../assets/fifthPage/nextArrow.png";
import rose1 from "../assets/fifthPage/rose1.png";
import rose2 from "../assets/fifthPage/rose2.png";
import rose3 from "../assets/fifthPage/rose3.png";
import rose4 from "../assets/fifthPage/rose1.png";
import rose5 from "../assets/fifthPage/rose5.png";
import curvedText from "../assets/fifthPage/curvedText.png";
import rose3Background from "../assets/fifthPage/rose3Background.png";



const FifthPage = () => {
    return (
        <div className="fifthPage_wrapper">
            <div className="fifthPage_content">
                <section className="fifth_button">
                    <img className="fifth_prev" src={preArrow} alt="" />
                    <img className="fifth_next" src={nextArrow} alt="" />
                </section>
                <section className="fifth_roses">
                    <div className="rose1"><img src={rose1} alt="" /></div>
                    <div className="rose2"><img src={rose2} alt="" /></div>
                    <div className="rose3"><img src={rose3} alt="" /></div>
                    <div className="rose4"><img src={rose4} alt="" /></div>
                    <div className="rose5"><img src={rose5} alt="" /></div>
                </section>
                <h3>Trick or Treat Rose</h3>
                <p>The preservation liquid replaces the sap & water to <br />create a unique & 100%</p>
            </div>
            <img className="fifth_curvedText" src={curvedText} alt="" />
            <img className="rose3_backgrond" src={rose3Background} alt="" />
        </div>
    )
}
export default FifthPage