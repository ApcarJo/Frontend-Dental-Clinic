import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTooth } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Footer = () => {

    let history = useHistory();

    return (
        <div>
            <footer>
                <div className="containerAll">
                    <div className="footerBody">
                        <div className="column1">
                            <h2 className="titleFooter">Práctica Dental de la mano del equipo Tridente</h2>
                            <p className="experience parFooter">Tridente, Clínica con más de 20 años de experiencia</p>
                        </div>
                        <div className="tooth" style={{fontSize:"2.5em"}}>
                            <FontAwesomeIcon icon={faTooth}/>
                        </div>
                        <div className="column2">
                            <div className="phone" style={{fontSize:"2em"}}>
                            <FontAwesomeIcon icon={faPhone}/> <a class="tlf" href="tel:+3495323123">95323123</a>
                            </div>
                            <div className="buttonContact" onClick={() => history.push("/contact")}>CONTACT</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
