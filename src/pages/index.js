import React from "react"
import Layout from "../components/layout"

import indexStyles from "../styles/pagesStyles/index.module.scss";

import PhotoOfMe from "../images/Me.jpg"

const IndexPage = () =>{
  return (
    <Layout>
      <div className={indexStyles.jumbotron}>
        <div className={indexStyles.jumbotronContent}>
          <h3>Sebastian Zielonka</h3>
          <p>
          Razem zmienimy twoją sylwetkę
          </p>
        </div>
      </div>
      <div className={indexStyles.aboutMeContainer}>
      <div className={indexStyles.aboutMePhoto} data-aos="fade-right">
        <img src={PhotoOfMe} alt="About Me"></img>
      </div>
        <div className={indexStyles.aboutMeContent} data-aos="fade-left">
        <h3>O mnie</h3>
        <p>
        Cześć, nazywam się Sebastian i jestem Trenerem Online. 
        Studiuję dietetykę oraz prowadzę treningi personalne, 
        gdzie uczę z reguły osoby początkujące podstaw treningu siłowego.
        Część z was może mnie kojarzyć z social mediów,
        na których w prosty sposób staram się przekazywać wiedzę na temat dietetyki oraz treningu siłowego.
        </p>Tematem treningów oraz żywienia zacząłem interesować się już w 2012r.
        Od tamtego czasu stało się to moją pasją i postanowiłem rozwijać się w tym kierunku.
        Prowadzę ludzi online już od ok. 4 lat, dzięki temu nabrałem już bardzo dużo doświadczenia.
        Poza licznymi certyfikatami oraz zdobytym doświadczeniem posiadam dużą wiedzę,
        którą ciągle poszerzam, co przekłada się na lepszą współpracę z moimi podopiecznymi.
        Wszystkie plany treningowe oraz diety dobieram indywidualnie do możliwości podopiecznych,
        poza tym oferuję stały kontakt oraz naukę zdrowych nawyków żywieniowych,
        co gwarantuje brak efektu jojo. Pomagam ludziom w osiągnięciu wymarzonej sylwetki,    
        bez zbędnych restrykcji i pokazuję, że można jeść to na co ma się ochotę, to co się lubi, a przy tym mieć zadowalające efekty.
        <p>
        Moim głównym celem jest uświadomienie ludzi, że można jeść zwyczajnie, spotykać się ze znajomymi, wychodzić na imprezy, 
        a przy tym wszystkim cieszyć się dobrym zdrowiem, samopoczuciem i piękną sylwetką.
        </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;