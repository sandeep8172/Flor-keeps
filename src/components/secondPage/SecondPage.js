import "./SecondPage.css"
import nextRedArrow from "../assets/secondPage/nextRedArrow.png"
import image from "../assets/secondPage/image.png"
import prevArrow from "../assets/secondPage/prevArrow.png"
import nextArrow from "../assets/secondPage/nextArrow.png"
import pattern from "../assets/secondPage/pattern.png"

const SecondPage = () => {
    return (
        <div className="second_wrapper">
            <div className="secondPage_content">
                <section className="sp_left_content">
                    <h1>Built in <span> ATX</span></h1>
                    <p>Here in Austin, Texas We aim to inspire others to have the courage to live out their wildest dreams and find out what ignites their spark. It's not about reinventing the wheel. It's about changing what we once knew about flowers and elevating it into something impossible to ignore.</p>
                    <p>The city that raised us emphasizes the essence of being selfless, daring and weird. These are the values that help us redefine the ordinary and create excitement behind Flor Keeps.</p>
                    <h3>See More<img src={nextRedArrow} alt="next" /></h3>
                </section>
                <section className="sp_right_content">
                    <img className="sp_image" src={image} alt="" />
                    <aside><img src={prevArrow} alt="previous" /><img src={nextArrow} alt="next" /></aside>
                </section>
            </div>
            <div className="sp_footer"><hr className="sp_hr" /><p>Built in ATX</p></div>
            <h1 className="sp_text">ATX</h1>
            <img className="sp_pattern" src={pattern} alt="" />
        </div>
    )
}
export default SecondPage;