import React from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSmile, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "./AboutUs.css";
import Team from '../../assets/clinic/team.png';
import Prevent from '../../assets/clinic/prevent.png';
import Vistas from '../../assets/clinic/vistas.jpeg';
import Reser from '../../assets/clinic/reser.jpeg';
import logo from '../../img/logo.png';
import { connect } from 'react-redux';


const AboutUs = (props) => {

    let history = useHistory();

    

    const llevame = () => {
        
        let token = props.credentials?.token;

        if(!token) {
            history.push("/login")
        } else {

            history.push("/appointments");
        }
    }

  return (

    <div className="aboutContainer">
      <div className="divUp">
        <div className="h1">
            <h1 className="title">Your Health is our Priority</h1>
            <p className="p experience">
                Welcome to the leading dental clinic, we have more than 20 years of experience in the sector, growing as a family and transmitting through generations our final goal, to establish a close relationship with our community.
            </p>
        </div>
            <div className="image1">
                <img className="team" src={Team} alt="home" />
            </div>
      </div>

      <div className="divInfo">

        <div className="infoCards">
            <h3>EXPERIENCE</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faSmile}/>
            </div>
            <p className="experience">We have a solid training in general aesthetic dentistry in addition to our team's continuous training to keep up with new industry developments. </p>
        </div>

        <div className="infoCards">
            <h3>QUALITY</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
            <p className="experience"> We are committed to quality as a fundamental key, we rely on the standards that are associated with growth, since it helps us to provide high-quality treatment and service. </p>
        </div>

        <div className="infoCards">
            <h3>GUARANTEES</h3><br></br>
            <div className="icon" style={{fontSize:"2.5em"}}>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </div>
            <p className="experience"> At Trident we count on professionals with wide experience and we ensure excellent results, we offer the best treatments using the best materials in the industry.</p>
        </div>

      </div>

        <div className="divMiddle">
            <div className="medidas h1">
                <h1 className="title2">Preventive measures against COVID-19</h1>
                <p className="parMiddle experience"> We have taken all the necessary measures and protocols to provide you with high protection and minimize the risk of contagion.</p><br></br><br></br>
                <p className="parMiddle experience">So that you feel totally safe in our facilities.</p>
            </div>
            <div className="image2">
                <img  className="team2" src={Prevent} alt="surgeon" />
            </div>
        </div>

            <div className="takeDate">
                <div className=" infoCards3">
                    <h1 className="title3">Your most trusted dental clinic</h1>
                    <p className="pardown experience">Our team has all the quality and high performance certificates to offer you an optimal service, professionals with more than 15 years experience to obtain the best smiles from their patients.</p><br></br><br></br>
                    <p className="pardown experience">What are you waiting for to show your best smile?</p><br></br>
                    <p className="pardown experience">Enjoy your first visit totally free!</p>
                </div>
                <div className="image3">
                    <img  className="team3" src={Vistas} alt="sala" />
                </div>
            </div>

            <div className="end">
                <div className="reservaCard">
                    <img  className="logo2" src={logo} alt="logo" />
                    <p className="experience clinics">Trident Clinics </p><br></br>
                    <p className="experience clinics2"> Available specialists</p><br></br>
                    <p className="experience clinics3"> Make an appointment at your nearest clinic</p><br></br>
                    <div className="send" onClick={() => llevame()}>Make An Appointment</div>
                </div>
                <div className="imagen4">
                    <img  className="team4" src={Reser} alt="sala" />
                </div>
            </div>
    </div>
  );
};

export default connect((state) => ({

    credentials:state.credentials

}))(AboutUs);
