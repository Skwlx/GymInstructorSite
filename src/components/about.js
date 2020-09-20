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
      </div>
    )
}

export default About;