import React, { useState, useEffect } from "react";
import "./ClientAppointments.css";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { APPOINTMENT } from "../../redux/types";

const ClientAppointments = (props) => {
  let history = useHistory(); //hooks

  const [clientAppointment, setClientAppointment] = useState({});

  useEffect(() => {
    searchAppointments();
  }, []);

  useEffect(() => {}, []);

  const searchAppointments = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.client;

      let body = {
        client: user._id,
      };

      let res = await axios.post(
        "http://localhost:3006/appointment/client",
        body,
        { headers: { authorization: "Bearer " + token } }
      );
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

  if (clientAppointment[0]?.id) {
    // si existe, mapeamos los resultados
    return (
      <div className="clientAllAppointmets">
                        <h1>MY APPOINTMENTS</h1>
                        
        <div className="appointmentsContainer">
                              
          {clientAppointment.map((appointment, index) => (
            <div key={index} className="appointmentCard">
                                          
              <p> CLINIC : {appointment.clinicName} </p>
                                          
              <p> PHONE : {appointment.clinicPhone} </p>
                                          
              <p> EMAIL : {appointment.clinicEmail} </p>
                                          
              <p> DENTIST : {appointment.dentistName} </p>
                                          
              <p> DATE : {appointment.date} </p>
              <div className="buttons1">
                <div
                  className="buttonUpdateC1"
                  onClick={() => saveAppointment(appointment)}
                >
                  UPDATE
                </div>
                <div className="buttonLogoutC1">REMOVE</div>
              </div>
                                     
            </div>
          ))}
                          
        </div>
                    
      </div>
    );
  } else {
    return <div>                ESTOY CARGANDO             </div>;
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(ClientAppointments);
