import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CreateAppointment.css";
import { connect } from "react-redux";
import imgAppointment from "../../assets/clinic/createAppointment.jpeg";
import spinner from "../../img/spinner2.gif";
import Calendar from "../../components/Calendar/Calendar";

const CreateAppointmnet = (props) => {
  let history = useHistory();

  //Hooks
  const [datos, setDatos] = useState({
    clinic: "",
    dentist: "",
    time: "",
    date: "",
    message: "",
    token: props.credentials?.token,
    user: props.credentials?.client,
  });

  const [dentist, setDentist] = useState([]);

  const [clinics, setClinics] = useState([]);

  const [errors, setErrors] = useState({
    eValidate: "",
  });

  useEffect(() => {
    allDentists();
    allClinics();
  }, []);

  useEffect(() => {});

  //Handlers
  const updateCredentials = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const crearCita = async () => {
    try {
      let token = datos.token;
      let user = datos.user;

      let body = {
        client: user._id,
        clinic: datos.clinic,
        dentist: datos.dentist,
        date: props.calendar?.date,
        message: datos.message,
      };
      console.log(props.calendar?.date, body);

      let res = await axios.post(
        "https://backclinic1.herokuapp.com/appointment",
        body,
        { headers: { authorization: "Bearer " + token } }
      );

      setTimeout(() => {
        history.push("/clientprofile");
      }, 250);
    } catch {
      setErrors({
        ...errors,
        eValidate: "Appointment could not be created, please try again",
      });
    }
  };

  const allDentists = async () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjBiYjk5MWJhOGIxZDIyYjFjYjkyYTg4IiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xNlQxMTo0MDozNS40OTJaIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjIzODQzNjM1fQ.3SQqq6rlsau6XEIf6dVe8VJIR9hXyeSjj8ouy3jjXCE";

    let result = await axios.get("https://backclinic1.herokuapp.com/dentists", {
      headers: { authorization: "Bearer " + token },
    });

    setDentist(result.data);
  };

  const allClinics = async () => {
    let result = await axios.get("https://backclinic1.herokuapp.com/clinics");

    setClinics(result.data);
  };

  if (props.credentials?.token) {
    return (
      <div className="contentAppointment">
        <img className="imgCreate" src={imgAppointment} alt="img" width="720" />
        <div className="cita">
          {/* <select type="name" name="clinic" title="clinic" onChange={updateCredentials}>
                <option value="">--Please Choose a Clinic-</option>
                  {clinics.map((clinic) => (
                <option value={clinic._id}>{clinic.name}</option>
                ))}
            </select> */}

          <form className="form7">
            <select
              className="input7"
              type="name"
              title="clinic"
              name="clinic"
              onChange={updateCredentials}
              required
            >
              {clinics.map((clinic) => (
                <option value={clinic._id}>{clinic.name}</option>
              ))}
            </select>
            <label className="lbl-nombre7">
              <span className="text-nomb7">Clinic</span>
            </label>
          </form>

          {/* <div className="inputDentist inputClient">
            <select type="name" name="dentist" title="dentist" onChange={updateCredentials}>
                <option value="">--Please Choose a Dentist-</option>
                     {dentist.map((dentist) => (
                <option value={dentist._id}>{dentist.name}</option>
                ))}
            </select>
          </div> */}

          <form className="form7">
            <select
              className="input7"
              type="name"
              title="dentist"
              name="dentist"
              onChange={updateCredentials}
              required
            >
              {dentist.map((dentist) => (
                <option value={dentist._id}>{dentist.name}</option>
              ))}
            </select>
            <label className="lbl-nombre7">
              <span className="text-nomb7">Dentist</span>
            </label>
          </form>

          <Calendar />
          {/* <div className="timeDate">

                <input className="dateTime" type="date" name="date" title="date" placeholder="Selecciona la Fecha" onChange={updateCredentials} lenght="30"/>

                <input  type="time" name="time" onChange={updateCredentials} />

          </div> */}

          <div>
            <input
              className="textArea"
              placeholder="Leave us a message"
              type="name"
              name="message"
              onChange={updateCredentials}
            />
          </div>

          <div className="createButton" onClick={() => crearCita()}>
            Create Appointment
          </div>

          <div className="errorsText">{errors.eValidate}</div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      history.push("/login");
    }, 500);

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
  calendar: state.calendar,
  credentials: state.credentials,
}))(CreateAppointmnet);
