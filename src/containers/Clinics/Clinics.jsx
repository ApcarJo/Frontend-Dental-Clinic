
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Clinics.css';
import axios from 'axios';
import { connect } from 'react-redux';


const Clinics = (props) => {

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


    // const llevame = (token === null) ? history.push("/login") : history.push("/appointments");

    const llevame = () => {

        let token = props.credentials.token

        if(token === null) {
            history.push("/login")
        } else {

            history.push("/appointments");
        }
    }

    if(clinics[0]?._id) {
        return (

            <div className="allContent">

                    <div className="clinicsContent">

                {clinics.map((clinic, index) => (

                    <div className="content">
                        <div className="" key={index}>
                        <img src={clinic.image} className="salas" alt="salas"/>
                            <div className="texto">
                                <p>Nombre: {clinic.name} </p>
                                <p>Ciudad: {clinic.city}</p>
                                <p>Dirección: {clinic.adress} </p>
                                <p>Correo: {clinic.email} </p>
                                <p>Teléfono: {clinic.phone} </p>
                            </div>
                            <div className="enviar" onClick={() => llevame()}>PEDIR CITA</div>
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

export default connect((state) => ({

    credentials:state.credentials

}))(Clinics);