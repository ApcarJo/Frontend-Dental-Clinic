import React from 'react';
import home from '../../assets/clinic/home.jpeg';
import './Home.css';
import {useHistory} from 'react-router-dom';



const Home = () => {

    let history = useHistory();

    const goTo = (path) => {

        history.push(path);

    }

    return(
        <div className="homeContainer">

            <div className="clinicHome">

                <div class="contenedorTexto">
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
                <p>REGISTER</p>
                    <div className="buttonOption" onClick={() => goTo("/register")}>CLICK HERE</div> 
                </div>
            </div>
        </div>
    )

}

export default Home;