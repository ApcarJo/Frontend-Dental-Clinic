
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Clinics.css';
import axios from 'axios';
import sala1 from '../../assets/clinic/sala1.png';
import Map from '../../components/Map/Map';

const Clinics = () => {

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
    let history = useHistory();

    const llevame = () => {
        history.push("/appointments");
    }

    if(clinics[0]?._id) {
        return (
            <div className="test">
            {/* <div className="vistaLogin">
                <Boton destino="Login" path="/login"/>
                <Boton destino="Registers" path="registers"/>
                <Boton destino="/" path="clinics"/>
            </div> */}
                    <Map/>
                    <h1 className="clinicChoose">Selecciona tu clinica más cercana</h1>
                {clinics.map((clinic, index) => (
                    <div className="content">
                        <div className="card3" key={index}>
                            <div><img src={sala1} className="sala1" alt="sala1"/></div>
                            <p className="clinicInfo">Nombre: {clinic.name} </p>
                            <p className="clinicInfo">Ciudad: {clinic.city}</p>
                            <p className="clinicInfo">Dirección: {clinic.adress} </p>
                            <p className="clinicInfo">Correo: {clinic.email} </p>
                            <p className="clinicInfo">Teléfono: {clinic.phone} </p>
                            <div className="enviar" onClick={() => llevame()}>PEDIR CITA</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
         );
    }
}

export default Clinics;