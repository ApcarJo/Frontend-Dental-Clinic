import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./CreateAppointment.css";
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';


const CreateAppointmnet = () => {

  let history = useHistory();

  //Hooks
  const [datos, setDatos] = useState({
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

    try{

   // let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("client"));
    // let clinic = "60b653c5c75e9e233617715e";
    // let dentist = "60ba59f8b0dd4138d7bb2040";
    
    let body = {
      client: user._id,
      clinic: datos.clinic,
      dentist: datos.dentist,
      date: datos.date,
      message: "esto es un mensaje de prueba"
    };

    console.log(body);

    let res = await axios.post('http://localhost:3006/appointment', body);

    console.log(res.data);


    setTimeout(()=>{
      history.push("/clientprofile");
    },750);

  } catch (err){
    console.log({message : err.message})
}

};
const selectClinic = () => {

  let dentival =  "60b653c5c75e9e233617715e";
  let dental_shine = "60b6597d1249962618753931";
  let vitaldent = "60bbac205fb3824f0cd8f274";
  let clinica_dental_andres = "60bb5e51ce1da1086f556d20";

      switch(dental_shine) {

        case dentival:
        console.log('dentival', dentival);
          break;
          case dental_shine:
            console.log('dental_shine', dental_shine);
            break;
        case vitaldent:
          console.log('vitaldent', vitaldent);
          break;
          case clinica_dental_andres:
          console.log('clinica andres', clinica_dental_andres);
          break;
        default:
        console.log('pruebas');

   }
}

  return (
    <Fragment>
      <ClientNavbar />
      <div className="contentAppointment">
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
            <select type="name" name="city" title="city"  onChange={selectClinic}>
                <option value="timeDropList">--Please Choose a Clinic-</option>
                <option value="dentival">Dentival</option>
                <option value="dental_shine">Dentalshine</option>
                <option value="vitaldent">Vitaldent</option>
                <option value="clinica dental andres">Clinica Dental Andrés</option>
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
            <select type="name" name="city" title="city">
                <option value="timeDropList">--Please Choose a Dentist-</option>
                <option value="javier">Javier</option>
                <option value="guillermo">Guillermo</option>
                <option value="maria">Maria</option>
                <option value="alfredo">Alefredo</option>
                <option value="laura">Laura</option>
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
