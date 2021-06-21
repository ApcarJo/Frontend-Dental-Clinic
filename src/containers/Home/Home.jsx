import React from 'react';
import home from '../../assets/clinic/home.png';
import './Home.css';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {

    let history = useHistory();

    const goTo = (path) => {

        history.push(path);

    }

    if(props.credentials.client?.name){

        return(
            <div className="homeContainer">

                <div className="clinicHome">

                    <div className="contenedorTexto">
                            <h1>T R I D E N T</h1>
                            <p className="parrHome">In our clinics you will find the latest equipment to deliver the highest quality treatments, as well as comfortable atmosphere in order to make your stay more pleasant.</p>
                            <div className="buttonHome" onClick={() => goTo("/appointments")}>MAKE AN APPOINTMENT</div> 
                    </div>
                    <img className="fondo" src={home} alt="home" />

                </div>

                <div className="optionsHome">
                    <div className="option">
                        <p>CLINICS</p>
                        <p className="parrafos">We have more than 100 clinics with everything you need to make your stay as pleasant as possible and solve all your dental needs with the greatest comfort. </p>
                        <div className="buttonOption" onClick={() => goTo("/clinics")}></div>
                    </div>
                    <div className="option">
                        <p >CONTACT</p>
                        <p className="parrafos">If you have any questions, do not doubt to contact our customer service department. We will be glad to help you!</p>
                        <div className="buttonOption" onClick={() => goTo("/contact")}></div>
                    </div>
                    <div className="option">
                        <p>ABOUT US</p>
                        <p className="parrafos">25 years of experience learning every day to solve the problems of our patients and solving totally hopeless cases.</p>
                        <div className="buttonOption" onClick={() => goTo("/aboutus")}></div>
                    </div>
                </div>
            </div>
        )
    }

    else {

        return(
        <div className="homeContainer">

            <div className="clinicHome">

                <div className="contenedorTexto">
                        <h1>T R I D E N T</h1>
                        <p>In our clinics you will find the latest equipment to deliver the highest quality treatments, as well as comfortable atmosphere in order to make your stay more pleasant. We have also chosen the best suppliers to guarantee long lasting and solid treatments, delivered by a team of experienced professionals.</p>
                        <div className="buttonHome" onClick={() => goTo("/login")}>MAKE AN APPOINTMENT</div>
                </div>
                <img className="fondo" src={home} alt="home" />

            </div>

            <div className="optionsHome">
                    <div className="option">
                        <p>CLINICS</p>
                        <p className="parrafos">We have more than 100 clinics with everything you need to make your stay as pleasant as possible and solve all your dental needs with the greatest comfort. </p>
                        <div className="buttonOption" onClick={() => goTo("/clinics")}></div>
                    </div>
                    <div className="option">
                        <p >CONTACT</p>
                        <p className="parrafos">If you have any questions, do not doubt to contact our customer service department. We will be glad to help you!</p>
                        <div className="buttonOption" onClick={() => goTo("/contact")}></div>
                    </div>
                    <div className="option">
                        <p>ABOUT US</p>
                        <p className="parrafos">25 years of experience learning every day to solve the problems of our patients and solving totally hopeless cases.</p>
                        <div className="buttonOption" onClick={() => goTo("/aboutus")}></div>
                    </div>
                </div>
        </div>
    )
    }

}

export default connect((state) => ({

    credentials:state.credentials

    }))(Home);