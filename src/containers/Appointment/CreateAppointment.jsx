import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CreateAppointment.css";


const CreateAppointmnet = () => {

  let history = useHistory();

  //Hooks
  const [datos, setDatos] = useState({
    client: "",
    clinic: "",
    dentist: "",
    date: "",
    message: ""
  });

//   const [userData, setUserData] = useState({

//     client: JSON.parse(localStorage.getItem("client")),
//     token: localStorage.getItem("token")
// });

  useEffect( () => {

  }, []);

  useEffect( () => {

    crearCita();
  });

  //Handlers
  const updateCredentials = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const crearCita = async () => {

    let token = localStorage.getItem("token")

    let body = {
      client: datos.client,
      clinic: datos.clinic,
      dentist: datos.dentist,
      date: datos.date,
      message: datos.message
    };

    let res = await axios.post("http://localhost:3006/appointment", body, {headers:{'authorization':'Bearer ' + token}});

    console.log(res.data.results);
    setTimeout(()=>{
      history.push("/clientprofile");
  },750);

  };

  return (
    <Fragment>
      <div className="content">
        <div className="cita">
          <div className="inputClient">
            <input
              type="name"
              name="client"
              title="client"
              placeholder="Nombre del Paciente"
              onChange={updateCredentials}
              lenght="30"
            />
          </div>
          <div className="inputClinic inputClient">
            <select>
              <option value="">--Please Choose an Option--</option>
              <option>Dentival</option>
              <option>Dentalshine</option>
              <option>Vitaldent</option>
              <option>Clinica Dental Andrés</option>
            </select>
            {/* <input
                    type='password'
                    name='clinic'
                    title='clinic'
                    placeholder="Selecciona una Clinica"
                    onChange={updateCredentials} lenght='30'
                /> */}
          </div>
          <div className="inputDentist inputClient">
            <select>
              <option value="">--Please Choose an Dentist--</option>
              <option>Javier Specialite: brackets</option>
              <option>Alfredo / Limpieza</option>
              <option>Miguel</option>
              <option>Guillermo</option>
              <option>Laura</option>
              <option>Alejandro</option>
            </select>
            {/* <input
                    type='name'
                    name='dentist'
                    title='dentist'
                    placeholder="Selecciona a tu Dentista"
                    onChange={updateCredentials} lenght='30'
                /> */}
          </div>
          <div className="inputDate inputClient">
            <input
              type="date"
              name="date"
              title="date"
              placeholder="Selecciona la Fecha"
              onChange={updateCredentials}
              lenght="30"
            />
          </div>
          <div className="sendButton inputClient" onClick={() => crearCita()}>
            Crear Cita
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateAppointmnet;
