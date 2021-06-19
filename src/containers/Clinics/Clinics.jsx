
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Clinics.css';
import axios from 'axios';
import { connect } from 'react-redux';
import spinner from '../../img/spinner2.gif';


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

    const llevame = () => {

        let token = props.credentials?.token;

        if(!token) {
            history.push("/login")
        } else {

            history.push("/appointments");
        }
    }

    if(clinics[0]?._id) {
        return (

            <div className="allContent">

                <div className="ClinicImage">
                    <div className="fondoclinics"></div>
                    <p className="ourClinics">C L I N I C S</p>
                </div>

                <div className="clinicsContent">

                    {clinics.map((clinic, index) => (
    
                        <div className="content">
                            <div className="content2" key={index}>
                            <img src={clinic.image} className="salas" alt="salas"/>
                             
                                    <p>Nombre: {clinic.name} </p>
                                    <p>Ciudad: {clinic.city}</p>
                                    <p>Dirección: {clinic.adress} </p>
                                    <p>Correo: {clinic.email} </p>
                                    <p>Teléfono: {clinic.phone} </p>
                              
                                <div className="enviar" onClick={() => llevame()}>PEDIR CITA</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (

            <div className="spinnerContainer">
              <div className="spinner">
                 <img  src={spinner} alt="spinner" width="60" />
              </div>
            </div>
        ); 
    }
}

export default connect((state) => ({

    credentials:state.credentials

}))(Clinics);