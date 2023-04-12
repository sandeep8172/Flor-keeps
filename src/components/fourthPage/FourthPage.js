import "./FourthPage.css";
import patternTop from "../assets/fourthPage/patternTop.png"
import patternLeft from "../assets/fourthPage/patternLeft.png"
import patternRight from "../assets/fourthPage/patternRight.png"
import image1 from "../assets/fourthPage/image1.png"
import image2 from "../assets/fourthPage/image2.png"
import arrowNext from "../assets/fourthPage/ArrowNext.png"

const FourthPage = () => {
    return (
        <div className="fourthPage_wrapper">
            <div className="fourthPage_content">
                <div className="four_image1"><img src={image1} alt="" /></div>
                <div className="four_image2"><img src={image2} alt="" /></div>


                <section className="four_right_content">
                    <h1>The <br /><span>Good Stuff</span></h1>
                    <p className="four_firstPara">our preserved rogers don't require water to stay beautiful in your home. That's why we are saving it for people who need it the most.</p>
                    <p>Flor keeps each partnering up with <b>well aware</b> to help provide sustainable & innovative solutions to water scarcity and contamination in both Kenya & Tanzania! Moving forward, with every stem sold, we will provide over 160 people with clean Water this year! MASSIVE steps forward towards a better world.</p>
                    <h3>Visit wellawareworld.org<img src={arrowNext} alt="" /></h3>
                </section>
            </div>
            <img className="four_patternTop" src={patternTop} alt="" />
            <img className="four_patternLeft" src={patternLeft} alt="" />
            <img className="four_patternRight" src={patternRight} alt="" />
        </div>
    )
}
export default FourthPage;