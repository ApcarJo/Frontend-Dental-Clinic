import React, { useState, useEffect } from "react";
import "./ClientAppointments.css";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { APPOINTMENT } from "../../redux/types";
import spinner from '../../img/spinner2.gif'

const ClientAppointments = (props) => {

  let history = useHistory(); //hooks

  const [clientAppointment, setClientAppointment] = useState({});

  useEffect(() => {
    searchAppointments();
  }, []);

  useEffect(() => { 
  });

  const searchAppointments = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.client;

      let body = {
        client: user._id,
      };

      let res = await axios.post(
        "http://localhost:3006/appointment/client", body, {
        headers: { authorization: "Bearer " + token }
      });
      // console.log('here', res.data);
      setClientAppointment(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveAppointment = (appointment) => {
    let newApp = appointment;

    props.dispatch({ type: APPOINTMENT, payload: newApp });

    history.push("/updateappointments");
  };

  const deleteAppointment = async (appointment) => {

    let token = props.credentials?.token;
    let user = props.credentials?.client;

    let body = {
      id: appointment.id,
      client: user._id,
      clinic: appointment.clinicId
    };

    console.log(body)

    let res = await axios.post('http://localhost:3006/appointment/delete', body, {
      headers: { authorization: "Bearer " + token }
    });

    window.location.reload();

  }

  if (clientAppointment[0]?.id) {
    // si existe, mapeamos los resultados
    return (
      <div className="clientAllAppointmets">
        <div className="appointImage">
              <div className="fondoclinics"></div>
              <p className="myAppoint">A P P O I N T M E N T S</p>
        </div>

        <div className="appointmentsClientContainer">

          {clientAppointment.map((appointment, index) => (
           
                <div key={index} className="appointmentCard1">
    
                  <p> CLINIC : {appointment.clinicName} </p>
    
                  <p> PHONE : {appointment.clinicPhone} </p>
    
                  <p> EMAIL : {appointment.clinicEmail} </p>
    
                  <p> DENTIST : {appointment.dentistName} </p>
    
                  <p> DATE : {appointment.date} </p>
                  <div className="buttons1">
                    <div
                      className="buttonUpdateA"
                      onClick={() => saveAppointment(appointment)}
                    >
                      UPDATE
                    </div>
                    <div className="buttonDeleteA" onClick={() => deleteAppointment(appointment)}>REMOVE</div>
                  </div>
               
            </div>
          ))}

        </div>

      </div>
    );
  } else {
    
    return (
      <div className="spinnerContainer">
        <div className="spinner">
           <img  src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );  
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(ClientAppointments);
