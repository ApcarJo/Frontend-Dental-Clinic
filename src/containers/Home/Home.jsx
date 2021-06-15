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
                            <p>In our clinics you will find the latest equipment to deliver the highest quality treatments, as well as comfortable atmosphere in order to make your stay more pleasant. We have also chosen the best suppliers to guarantee long lasting and solid treatments, delivered by a team of experienced professionals.</p>
                            <div className="buttonHome" onClick={() => goTo("/appointments")}>MAKE AN APPOINTMENT</div> 
                    </div>
                    <img className="fondo" src={home} alt="home" />
                    
                </div>
    
                <div className="optionsHome">
                    <div className="option">
                        <p>CLINICS</p>
                        <div className="buttonOption" onClick={() => goTo("/clinics")}>CLICK HERE</div> 
                    </div>
                    <div className="option">
                    <p>CONTACT</p>
                        <div className="buttonOption" onClick={() => goTo("/contact")}>CLICK HERE</div> 
                    </div>
                    <div className="option">
                    <p>ABOUT US</p>
                        <div className="buttonOption" onClick={() => goTo("/aboutus")}>CLICK HERE</div> 
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
                    <div className="buttonOption" onClick={() => goTo("/clinics")}>CLICK HERE</div> 
                </div>
                <div className="option">
                <p>CONTACT</p>
                    <div className="buttonOption" onClick={() => goTo("/contact")}>CLICK HERE</div> 
                </div>
                <div className="option">
                <p>ABOUT US</p>
                    <div className="buttonOption" onClick={() => goTo("/aboutus")}>CLICK HERE</div> 
                </div>
            </div>
        </div>
    )
    }

}

export default connect((state) => ({

    credentials:state.credentials

    }))(Home);