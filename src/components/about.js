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
        Cześć, nazywam się Sebastian i jestem <span className={aboutMeStyles.aboutMeContentTextImportant}>Trenerem Online.</span> 
        <span className={aboutMeStyles.aboutMeContentTextImportant}> Studiuję dietetykę oraz prowadzę treningi personalne</span>, 
        gdzie uczę z reguły osoby początkujące podstaw treningu siłowego.
        Część z was może mnie kojarzyć z social mediów,
        na których w prosty sposób staram się przekazywać wiedzę na temat dietetyki oraz treningu siłowego.
        </p>Tematem treningów oraz żywienia zacząłem interesować się już w 2012r.
        Od tamtego czasu stało się to moją pasją i postanowiłem rozwijać się w tym kierunku.
        <span className={aboutMeStyles.aboutMeContentTextImportant}> Prowadzę ludzi online już od ok. {new Date().getFullYear() - 2016} lat,</span> dzięki temu nabrałem już bardzo dużo doświadczenia.
        Poza licznymi certyfikatami oraz zdobytym doświadczeniem <span className={aboutMeStyles.aboutMeContentTextImportant}>posiadam dużą wiedzę</span>,
        którą ciągle poszerzam, co przekłada się na lepszą współpracę z moimi podopiecznymi.
        <p><br/>
        Wszystkie plany treningowe oraz diety dobieram <span className={aboutMeStyles.aboutMeContentTextImportant}>indywidualnie</span> do możliwości podopiecznych,
        poza tym oferuję stały kontakt oraz naukę zdrowych nawyków żywieniowych,
        co gwarantuje brak efektu jojo.  <span className={aboutMeStyles.aboutMeContentTextImportant}>Pomagam ludziom w osiągnięciu wymarzonej sylwetki</span>,    
        bez zbędnych restrykcji i pokazuję, że można jeść to na co ma się ochotę, to co się lubi, a przy tym mieć zadowalające efekty. 
        Moim głównym celem jest uświadomienie ludzi, że można jeść zwyczajnie, spotykać się ze znajomymi, wychodzić na imprezy, 
        a przy tym wszystkim <span className={aboutMeStyles.aboutMeContentTextImportant}>cieszyć się dobrym zdrowiem, samopoczuciem i piękną sylwetką.</span>
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