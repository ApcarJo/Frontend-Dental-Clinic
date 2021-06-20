import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
                            <p className="experience parFooter">Clinics with more than 25 years of experience</p>
                        </div>
                        {/* <div className="tooth">
                            <img src={logo} alt="logo"  width="70"/>
                        </div> */}
                        <div className="column2">
                            <div className="support">
                                <h3 className="tittle" onClick={() => history.push('/contact')}>SUPPORT</h3>
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
                                <a href="https://es-es.facebook.com/ " className="redes">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                    <p className="social" >Facebook</p>
                                </a>
                                <a href="https://twitter.com/?lang=es" className="redes">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                    <p className="social" >Twitter</p>
                                </a>
                               
                                <a href="https://www.instagram.com/ " className="redes">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                    <p className="social" >Instagram</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
