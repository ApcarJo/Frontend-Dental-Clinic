import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllAppointments.css";
import spinner from "../../../img/spinner2.gif";
import { connect } from "react-redux";

const AllAppointments = (props) => {
  const [allAppointments, setAppointments] = useState([]);

  useEffect(() => {
    findAppointments();
  }, []);

  useEffect(() => {
    findAppointments();
  });

  const findAppointments = async () => {
    try {
      let token = props.credentials?.token;

      let res = await axios.get(
        "https://backclinic1.herokuapp.com/appointment",
        { headers: { authorization: "Bearer " + token } }
      );
      setAppointments(res.data);
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
  const deleteAppointment = async (appointment) => {
    console.log(appointment);
    let token = props.credentials?.token;
    let user = props.credentials?.client;

    let body = {
      id: appointment._id,
      clinic: appointment.clinicId,
    };

    console.log(body);

    let res = await axios.post(
      "https://backclinic1.herokuapp.com/appointment/delete",
      body,
      {
        headers: { authorization: "Bearer " + token },
      }
    );

    window.location.reload();
  };

  if (allAppointments[0]?._id) {
    return (
      <div className="findAppointments">
        <h2>All Appointments</h2>

        <div className="appointmentContent">
          {allAppointments.map((appointments, index) => (
            <div key={index} className="appointmentCards">
              <p className="texto"> CLIENT : {appointments.client.name} </p>
              <p className="texto">
                {" "}
                <a class="mailClient" href="tel:+3495323123">
                  {" "}
                  PHONE : {appointments.client.phone}{" "}
                </a>
              </p>
              <p className="texto"> CLINIC : {appointments.clinic.name} </p>
              <p className="texto">
                {" "}
                <a class="mailClient" href="tel:+3495323123">
                  {" "}
                  PHONE : {appointments.clinic.phone}{" "}
                </a>
              </p>
              <p className="texto"> CITY : {appointments.clinic.city} </p>
              <p className="texto"> DENTIST : {appointments.dentist.name} </p>
              <p className="texto"> DATE : {convertDate(appointments.date)} </p>

              <div
                className="buttonDeleteA"
                onClick={() => deleteAppointment(appointments)}
              >
                REMOVE
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
          <img src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  calendar: state.calendar,
}))(AllAppointments);
