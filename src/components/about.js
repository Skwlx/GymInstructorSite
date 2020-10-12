import React from "react";
import PhotoOfMe from "../images/Me.jpg"

import aboutMeStyles from "../styles/componentsStyles/aboutMe.module.scss";

const About = () => {
    return(
        <div className={aboutMeStyles.aboutMeContainer}>
        <div className={aboutMeStyles.aboutMeContent}>
        <h2 className={aboutMeStyles.aboutMeContentTitle} data-aos="fade-down">O mnie</h2>
        <img className={aboutMeStyles.aboutMePhoto} src={PhotoOfMe} alt="About Me" data-aos="fade-up"></img>
        <div className={aboutMeStyles.aboutMeContentText} data-aos="fade-up">
        <p>
        <span className={aboutMeStyles.aboutMeContentTextImportant}>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Sed feugiat sagittis ex,
        a finibus nisl venenatis a. <span className={aboutMeStyles.aboutMeContentTextImportant}> Proin et fringilla mi. Fusce ut enim justo.</span>
        Etiam condimentum dignissim libero, eget aliquet nulla condimentum ut.
        Quisque porta molestie arcu, ac ullamcorper urna eleifend vel. Aenean
        vitae justo velit. Cras vehicula ut orci lacinia dignissim.
        </p> consectetur adipiscing elit. Sed feugiat sagittis ex,
        a finibus <span className={aboutMeStyles.aboutMeContentTextImportant}>nisl venenatis a.</span> Fusce ut enim justo.
        Etiam condimentum dignissim libero, eget aliquet nulla condimentum ut.
        Quisque porta<span className={aboutMeStyles.aboutMeContentTextImportant}> molestie arcu, ac ullamcorper</span> urna eleifend vel. Aenean
        vitae justo velit. Cras vehicula ut orci lacinia dignissim.
        <p><br/>
        consectetur adipiscing elit. Sed feugiat sagittis ex,
        a finibus nisl venenatis a. <span className={aboutMeStyles.aboutMeContentTextImportant}> Proin et fringilla mi. Fusce ut enim justo.</span>
        Etiam condimentum dignissim libero, eget aliquet nulla condimentum ut.
        Quisque porta molestie arcu, ac ullamcorper urna eleifend vel. Aenean
        vitae justo velit. Cras vehicula ut orci lacinia dignissim.
        </p>
        </div>
        </div>
        <svg 
        className={aboutMeStyles.wave} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320">
        <path 
        fill-opacity="1" 
        d="M0,64L40,96C80,128,160,192,240,224C320,256,400,256,480,245.3C560,235,640,213,720,202.7C800,192,880,192,960,181.3C1040,171,1120,149,1200,165.3C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path></svg>
      </div>
    )
}

export default About;