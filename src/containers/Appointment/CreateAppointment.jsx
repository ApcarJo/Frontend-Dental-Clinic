import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CreateAppointment.css";
import { connect } from 'react-redux';
import imgAppointment from '../../assets/clinic/createAppointment.jpeg';
import spinner from '../../img/spinner2.gif';



const CreateAppointmnet = (props) => {

  let history = useHistory();

  //Hooks
  const [datos, setDatos] = useState({
    clinic: "",
    dentist: "",
    time: "",
    date: "",
    message: ""
  });

  const [dentist, setDentist] = useState([]);

  const [clinics, setClinics] = useState([]);

  const [msgError, setMensajeError] = useState(false);


  useEffect( () => {

    allDentists ();
    allClinics();

  }, []);

  useEffect( () => {

  });

  //Handlers
  const updateCredentials = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const crearCita = async () => {

    try{

      let token = props.credentials?.token;
      let user = props.credentials?.client;
    // let clinic = "60b653c5c75e9e233617715e";
    // let dentist = "60ba59f8b0dd4138d7bb2040";
    
    let body = {
      client: user._id,
      clinic: datos.clinic,
      dentist: datos.dentist,
      date: datos.date,
      message: datos.message
    };

    let res = await axios.post('http://localhost:3006/appointment', body, {headers:{'authorization':'Bearer ' + token}});

    setTimeout(()=>{
      history.push("/clientprofile");
    },750);

  } catch (err){
    console.log({message : err.message})
}

};

const allDentists = async () => {

  let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjBiYjk5MWJhOGIxZDIyYjFjYjkyYTg4IiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xNlQxMTo0MDozNS40OTJaIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjIzODQzNjM1fQ.3SQqq6rlsau6XEIf6dVe8VJIR9hXyeSjj8ouy3jjXCE";
  
  let result = await axios.get('http://localhost:3006/dentists', {headers:{'authorization':'Bearer ' + token}});

  setDentist(result.data)

}

const allClinics = async () => {

  let result = await axios.get('http://localhost:3006/clinics')

  setClinics(result.data)

}

if(props.credentials?.token) {
  return (
       
    <Fragment>

      <div className="contentAppointment">
      
        <img src={imgAppointment} alt="img" width="720" />
     
        <div className="cita">
        
          <div className="inputClinic inputClient">
            <select type="name" name="clinic" title="clinic" onChange={updateCredentials}>
                <option value="">--Please Choose a Clinic-</option>
                  {clinics.map((clinic) => (
                <option value={clinic._id}>{clinic.name}</option>
                ))}
            </select>
          </div>

          <div className="inputDentist inputClient">
            <select type="name" name="dentist" title="dentist" onChange={updateCredentials}>
                <option value="">--Please Choose a Dentist-</option>
                     {dentist.map((dentist) => (
                <option value={dentist._id}>{dentist.name}</option>
                ))}
            </select>
          </div>

          <div className="timeDate">

                <input className="dateTime" type="date" name="date" title="date" placeholder="Selecciona la Fecha" onChange={updateCredentials} lenght="30"/>

                <input  type="time" name="time" onChange={updateCredentials} />

          </div>

          <div>
              <input className="textArea" placeholder="Leave us a message" type="name" name="message" onChange={updateCredentials} />
          </div>

          <div className="createButton" onClick={() => crearCita()}>Create Appointment</div>

          {/*  <div>{msgError}</div> */}
        </div>
      </div>

      </Fragment>
  );
  } else {

    setTimeout(()=> {
      history.push('/login')
    },500)

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

  }))(CreateAppointmnet);
