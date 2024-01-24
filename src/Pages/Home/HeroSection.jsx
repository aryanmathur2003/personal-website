import ReactTyped from "react-typed";
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Aryan Mathur</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color"></span>{" "}
                        <br />
                            I am {" "}
                            <span className="hero--section-title--color--2">
                            <ReactTyped
                            strings={[" a Student", " an Entrepeneur", " a Developer"]}
                            typeSpeed={120}
                            backSpeed={20}
                            cursorChar=""
                            showCursor={true}
                            />
                            </span>
                    </h1>
                    <br />
                    <p className="hero--section-description">
                    Welcome to my website!
                        <br />I am a student, entrepeneur, developer
                    </p>
                </div>
                <Link
                    // onClick={closeMenu}
                    activeClass="hero--section-description"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    // duration={500}
                    to="Contact"
                    className="btn btn-primary"
                >
                    Get In Touch
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" 
                alt="Hero Section" />
            </div>
        </section>
     )
    
}