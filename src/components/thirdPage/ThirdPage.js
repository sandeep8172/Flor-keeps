import "./ThirdPage.css";
import image from "../assets/thirdPage/image.png"
import icon1 from "../assets/thirdPage/icon1.png"
import icon2 from "../assets/thirdPage/icon2.png"
import icon3 from "../assets/thirdPage/icon3.png"
import icon4 from "../assets/thirdPage/icon4.png"
import icon5 from "../assets/thirdPage/icon5.png"
import icon6 from "../assets/thirdPage/icon6.png"
import icon7 from "../assets/thirdPage/icon7.png"
import icon8 from "../assets/thirdPage/icon8.png"
import icon9 from "../assets/thirdPage/icon9.png"
import icon10 from "../assets/thirdPage/icon10.png"
import patternLeft from "../assets/thirdPage/patternLeft.png"
import patternMid from "../assets/thirdPage/patternMid.png"
import patternRight from "../assets/thirdPage/patternRight.png"


const ThirdPage = () => {
    return (
        <div className="thirdPage_wrapper">
            <div className="thirdPage_content">
                <section className="tp_left_content">
                    <div>
                        <img src={image} alt="flower" />
                        <p>Preserved flowers remain beautiful & unchained for months without water or sunlight -- virtually maintenance-free!</p>
                    </div>
                </section>
                <section className="tp_right_content">
                    <h1>What are<span> preserved <br />flowers?</span></h1>
                    <p>Our Preserved Roses are 100% real. Grown in South America, they are hand-cut once they've reached their true potential. Afterwards, we integrate the special preservation formula that allows each rose to keep it's natural look for over a year!</p>
                    <p>We're here provide a non-perishable product with a long self-life that is affordable, elegant, and versatile for any home or occasion -- making them for keeps!</p>
                    <section>
                        <div><img src={icon1} alt="" /><p>100% <br /> Natural</p></div>
                        <div><img src={icon2} alt="" /><p>Do not <br /> Water</p></div>
                        <div><img src={icon3} alt="" /><p>Avoid direct<br /> sunlight</p></div>
                        <div><img src={icon4} alt="" /><p>long <br />lasting</p></div>
                        <div><img src={icon5} alt="" /><p>do not<br /> consume</p></div>
                        <div><img src={icon6} alt="" /><p>handle with<br /> care</p></div>
                        <div><img src={icon7} alt="" /><p>indoor<br /> use only</p></div>
                        <div><img src={icon8} alt="" /><p>avoid crushing or<br /> folding patals</p></div>
                        <div><img src={icon9} alt="" /><p>storage <br />humidity</p></div>
                        <div><img src={icon10} alt="" /><p>100% preserved<br /> roses</p></div>
                    </section>
                </section>
            </div>
            <div className="tp_footer"><hr className="tp_hr" /><p>What are Preserved flowers</p></div>
            <img className="tp_patternLeft" src={patternLeft} alt="" />
            <img className="tp_patternMid" src={patternMid} alt="" />
            <img className="tp_patternRight" src={patternRight} alt="" />
        </div>
    )
}
export default ThirdPage;