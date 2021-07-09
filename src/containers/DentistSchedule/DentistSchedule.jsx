import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./DentistSchedule.css";
import axios from "axios";
import { SCHEDULE_CAL } from "../../redux/types";
import spinner from "../../img/spinner2.gif";

const DentistSchedule = (props) => {
  //HOOKS
  const [agenda, setDentistAgenda] = useState({
    data: [],
    date: "2010-05-06T22:00:00.000+00:00",
  });
  const [date, setDate] = useState("");

  useEffect(() => {
    searchAppointments();
  }, []);

  useEffect(() => {
    // updateSchedule();
  });

  // HANDLER
  const updateCredentials = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const updateAgenda = (e) => {
    setDentistAgenda({ ...agenda, [e.target.name]: e.target.value });
  };

  const searchAppointments = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.dentist;

      let body = {
        // date: Date.parse(dentistSchedule.date), //FALTA QUE FUNCIONE COGER EL DATE POR CALENDARIO
        dentist: user._id,
      };

      let res = await axios.post(
        "https://backclinic1.herokuapp.com/appointment/scheduleDentist",
        body,
        { headers: { authorization: "Bearer " + token } }
      );
      props.dispatch({ type: SCHEDULE_CAL, payload: res?.data });

      setDentistAgenda({ ...agenda, data: res?.data });
    } catch (error) {
      console.log(error);
    }
  };

  const convertDate = (date) => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date2 = day + "/" + month + "/" + year;
    return date2;
  };

  if (agenda?.data) {
    // si existe, mapeamos los resultados
    return (
      <div className="dentistScheduleContainer">
        <div className="appointImage">
          <div className="fondoclinics"></div>
          <p className="myAppoint">S C H E D U L E</p>
        </div>
                        
        <div className="appointmentsContainerDentist">
                              
          {agenda?.data.map((appointment, index) => (
            <div key={index} className="appointmentsCardDentist">
                                          
              <p>CLIENT : {appointment.clientName}</p>
              <p>CLINIC : {appointment.clinicName}</p>
              <p>PHONE : {appointment.clinicPhone}</p>
              <p>CITY : {appointment.city}</p>
              <p>DATE : {convertDate(agenda.date)}</p>
                                      
            </div>
          ))}
                          
        </div>
                    
      </div>
    );
  } else if (props.credentials?.dentist) {
    return (
      <div>
        <div>SELECCIONE LA FECHA</div>
        <input
          type="date"
          name="date"
          title="date"
          onChange={updateCredentials}
        />
                    
      </div>
    );
  } else {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <img src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  calendar: state.calendar,
  schedule: state.schedule,
}))(DentistSchedule);
