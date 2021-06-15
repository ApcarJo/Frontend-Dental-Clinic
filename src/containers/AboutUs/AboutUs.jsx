import React from "react";
import { useHistory } from 'react-router-dom';

import "./AboutUs.css";
import Team from '../../assets/clinic/team.png';
import Prevent from '../../assets/clinic/prevent.png';
import Vistas from '../../assets/clinic/vistas.jpeg';
import Reser from '../../assets/clinic/reser.jpeg';

const AboutUs = () => {

    let history = useHistory();

    let token = localStorage.getItem("token");

    const llevame = () => {

        if(token === null) {
            history.push("/register")
        } else {

            history.push("/appointments");
        }
    }

  return (

    <div className="aboutContainer">
      <div className="divUp">
        <div className="h1">
          <h1 className="title">Tu salud es nuestra prioridad</h1>
          <p className="p">
            Bienvenido a la clínica líder en Odontologia, contamos con más de 20
            años de experiencia en el sector, creciendo como familia y
            trasmitiendo de generación a generación nuestro objetivo final, el
            trato cercano a nuestra comunidad.
          </p>
          {/* <div className="buttonHome" onClick={() => goTo("/login")}>MAKE AN APPOINTMENT</div>  */}
        </div>

            <img className="team" src={Team} alt="home" />

        <div className="">
            <img  className="team2" src={Prevent} alt="surgeon" />
        </div>
      </div>

      <div className="divInfo">

        <div className="infoCards">
            <h3>EXPERIENCE</h3><br></br>
            <p className="experience"> Contamos con una sólida formación en Odontología estética general, y además nuestro equipo esta en una constante formacón para estar al día con los desarrollos de la industria. </p>
        </div>

        <div className="infoCards">
            <h3>QUALITY</h3><br></br>
            <p className="experience"> Apostamos por la calidad como clave fundamental, nos apoyamos en las normas que están asociadas al crecimiento, ya que nos ayuda a prestar un trato y servicio de alta calidad. </p>
        </div>

        <div className="infoCards">
            <h3>GUARANTEES</h3><br></br>
            <p className="experience"> En Trident contamos con profesionales con amplia experiencia y aseguramos exlentes resultados, ofrecemos los mejores tratamientos contando con los mejores materiales en la industria.</p>
        </div>

      </div>

            <div className="medidas">
                <h1>Medidas preventivas contra el COVID-19</h1>
                <div className="infoCards infoCards2">
                <p className="experience">En Trident, hemos tomado todas las medidas y protocolos necesarios para brindarte una alta protección y reducir al máximo el riesgo de contagio.</p><br></br><br></br>
                <p className="experience">Para que te sientas totalmente seguro en nuestras instalaciones.</p>
                </div>
            </div>

            <div>
                <h1 className="clinicas">Tu clinica dental de mayor confianza</h1>
                <div className=" infoCards3">
                    <p className="experience">Nuestros equipamientos disponen de todos los certificados de calidad y alto rendimiento para brindarte un servicio óptimo, profesionales con más de 15 años de experiencia sacando las mejores sonrisas de sus pacinetes.</p><br></br><br></br>
                    <p className="experience">¿A qué estás esperando para lucir tu mejor sonrisa?</p><br></br>
                    <p className="experience">Disfruta de tu primera visita totalmente gratis</p>
                </div>
                <img  className="team2 sala2" src={Vistas} alt="sala" />
            </div>

            <div>
                <h1 className="clinicas">Tu clinica dental de mayor confianza</h1>
                <div className=" infoCards3 reservaCard">
                    <p className="experience">Clinicas Trident </p><br></br>
                    <p className="experience">Especialistas disponibles: 4</p><br></br>
                    <div className="send" onClick={() => llevame()}>PEDIR CITA</div>
                </div>
                <img  className="team2 reserva" src={Reser} alt="sala" />
            </div>
    </div>
  );
};

export default AboutUs;
