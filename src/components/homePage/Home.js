import "./Home.css";
import { useState, useEffect } from "react";
import menuLogo from "../assets/home/menuLogo.png";
import cross from "../assets/home/xIcon.png";
import homeLogo from "../assets/home/homeLogo.png";
import menuIcon from "../assets/home/menu_icon.png";
import homeImage from "../assets/home/home_image.png";
import nextArrow from "../assets/home/arrow_right.png";
import preArrow from "../assets/home/arrow_left.png";
import redArrow from "../assets/home/redArrow.png";
import leftPattern from "../assets/home/left_pattern.png";
import rose from "../assets/home/Rose.png";
import rightPattern from "../assets/home/right_pattern.png";
import roundText from "../assets/home/roundText.png";
import curvedText from "../assets/home/curvedText.png";

const Home = () => {
    const [toggle, setToggle] = useState(false)

    const toggleMenuHandler = () => {
        setToggle(true)
    }
    const toggleCrossHandler = () => {
        setToggle(false)
    }
    return (
        <div className="home_wrapper">
            <div className={toggle ? "show_menu_wrapper menu_wrapper" : "menu_wrapper"}>
                <div className="top_img">
                    <img className="top_logo" src={menuLogo} alt="logo" />
                    <img onClick={toggleCrossHandler} className="menu_icon" src={cross} alt="cross" />
                </div>
                <div className="menu_text">
                    <h1>Home</h1>
                    <hr className="menu_hr" />
                    <h1>About</h1>
                </div>
                <img className="curvedText" src={curvedText} alt="" />
                <img className="rondText" src={roundText} alt="" />
            </div>
            <div className="firstPage_wrapper">
                <div className="top_img">
                    <img className="top_logo" src={homeLogo} alt="logo" />
                    <img onClick={toggleMenuHandler} className="menu_icon" src={menuIcon} alt="cross" />
                </div>
                <div className="firstPage_content">
                    <section className="fp_left_content">
                        <h1>Give the <span>gift</span> <br /> <span className="slide_left">that is</span> <br /> <span>Flor Keeps</span></h1>
                        <p>our roses are harvested to the ideal point of natural beauty. It then enters a process to absorb a preservation formula that is <b>100% plant based & bio-degradable!</b> This leaves you with a beautiful & unchanged rose for months without water or sunlight-- Virtually maintenance-free!</p>
                        <h3>See More <img src={redArrow} alt="next" /> </h3>
                    </section>
                    <section className="fp_right_content">
                        <img src={homeImage} alt="homeImage" className="home_image" />
                        <p>The Classic <span><img src={preArrow} alt="pevious" /><img src={nextArrow} alt="next" /></span></p>
                    </section>
                </div>
                <div className="fp_footer"><hr className="home_hr" /><p>What are Preserved flowers</p></div>

                <img className="fp_leftPattern" src={leftPattern} alt="" />
                <img className="fp_rose" src={rose} alt="" />
                <img className="fp_rightPattern" src={rightPattern} alt="" />
            </div>
        </div>
    )
}
export default Home;