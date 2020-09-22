import React, { useEffect } from "react";
import { Link } from "gatsby"
import offertStyles from "../styles/componentsStyles/offert.module.scss";

const Offert = () =>{

    const priceChange = () =>{
        const selectBox = document.querySelector(`.${offertStyles.offertSelect}`);
        let price = document.querySelectorAll(`.${offertStyles.offertBoxPrice}`);

        if(selectBox.value === "3 mies"){
            [...price][0].innerHTML = "190zł/mies";
            [...price][1].innerHTML = "145zł/mies";
            [...price][2].innerHTML = "295zł/mies";
        }
        else if(selectBox.value === "6 mies"){
            [...price][0].innerHTML  = "185zł/mies";
            [...price][1].innerHTML  = "140zł/mies";
            [...price][2].innerHTML  = "290zł/mies";
        }
        else{
            [...price][0].innerHTML  = "200zł/mies";
            [...price][1].innerHTML  = "150zł/mies";
            [...price][2].innerHTML  = "300zł/mies";
        }
    }

    return(
        <div className={offertStyles.offert}>
            <div className={offertStyles.offertHolder}>
            <h2 className={offertStyles.offertHolderTitle}>OFERTA</h2>
            <div className={offertStyles.offertBox}>
                <h2 className={offertStyles.offertBoxTitle}>Prowadzenie treningowe</h2>
                <p className={offertStyles.offertBoxPrice}>
                200zł/mies
                </p>
                <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                </ul>
                <div className={offertStyles.offertBoxContactContent}>
                <p>Umów wybrany pakiet:</p>
                <Link to="/contact" className={offertStyles.offertBoxContactButton}>Skontaktuj się</Link>
                </div>
            </div>
            <div className={offertStyles.offertBox}>
            <h2  className={offertStyles.offertBoxTitle}>Prowadzenie dietetyczne</h2>
            <p className={offertStyles.offertBoxPrice}>
                150zł/mies
                </p>
                <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                </ul>
            </div>
            <div className={offertStyles.offertBox}>
            <h2  className={offertStyles.offertBoxTitle}>Prowadzenie dietetyczno-treningowe</h2>
            <p className={offertStyles.offertBoxPrice}>
                300zł/mies
                </p>
                <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                </ul>
            </div>
            </div>
            <div className={offertStyles.offertSelectBox}>
            <h3>Wybierz czas trwania treningu/diety:</h3>
            <select className={offertStyles.offertSelect} onChange={priceChange}>
                <option>1 mies</option>
                <option>3 mies</option>
                <option>6 mies</option>
            </select>
            </div>
        </div>
    )
}

export default Offert;