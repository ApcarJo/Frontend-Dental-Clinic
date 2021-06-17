import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, facebook,  } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import logo from '../../img/logo.png'
const Footer = () => {

    let history = useHistory();

    return (
        <div>
            <footer>
                <div className="containerAll">
                    <div className="footerBody">
                        <div className="column1">
                            <h3 className="titleFooter">T R I D E N T</h3>
                            <p className="experience parFooter">Clínica con más de 20 años de experiencia</p>
                        </div>
                        {/* <div className="tooth">
                            <img src={logo} alt="logo"  width="70"/>
                        </div> */}
                        <div className="column2">
                            <div className="support">
                                <h3 className="tittle">SUPPORT</h3>
                                <div className="phone">
                                    <FontAwesomeIcon icon={faPhone}/> 
                                    <a className="tlf" href="tel:+3495323123">95323123</a>
                                </div>
                                <div className="phone">
                                    <FontAwesomeIcon icon={faEnvelope}/> 
                                    <a className="mail" href="mailto:info@trident.com">info@trident.com</a>
                                </div>
                            </div>
                            <div className="follow">
                                <h3 className="tittle">FOLLOW US</h3>
                                <div className="redes">
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <p className="social" >Facebook</p>
                                </div>
                                <div className="redes">
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <p className="social" >Twitter</p>
                                </div>
                                <div className="redes">
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <p className="social" >Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
