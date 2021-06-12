
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Clinics.css';
import axios from 'axios';
import sala1 from '../../assets/clinic/sala1.png';
// import Map from '../../components/Map/Map';
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';

const Clinics = () => {

    let history = useHistory();

    const [ clinics, setClinics ] = useState([]);

    useEffect(() =>{
        getAllClinics();
    },[])

    const getAllClinics = async () => {
        try {
            let res = await axios.get("http://localhost:3006/clinics");
            setClinics(res.data);
        } catch (error) {
            console.log( { message: error.message} );
        }
    }

    const llevame = () => {
        history.push("/appointments");
    }

    if(clinics[0]?._id) {
        return (

            <div className="allContent">
            <ClientNavbar />
            {/* <div className="vistaLogin">
                <Boton destino="Login" path="/login"/>
                <Boton destino="Registers" path="registers"/>
                <Boton destino="/" path="clinics"/>
            </div> */}
                    <h1 className="clinicChoose">Selecciona tu clinica más cercana</h1>

                    <div className="clinicsContent">

                {clinics.map((clinic, index) => (

                    <div className="content">
                        <div className="" key={index}>
                            <div><img src={sala1} className="sala1" alt="sala1"/></div>
                            <div className="">
                                <p>Nombre: {clinic.name} </p>
                                <p>Ciudad: {clinic.city}</p>
                                <p>Dirección: {clinic.adress} </p>
                                <p>Correo: {clinic.email} </p>
                                <p>Teléfono: {clinic.phone} </p>
                            </div>
                            <div className="enviar" onClick={() => llevame()}>PEDIR CITA</div>
                            {/* <div className="map"><Map /></div> */}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
         );
    }
}

export default Clinics;