import React , { useState, Fragment } from 'react';
import { useHistory }  from 'react-router-dom';

import axios from 'axios';

import "./CreateAppointment.css";


const CreateAppointmnet = () => {

    let history = useHistory();


    //Hooks
    const [ datos, setDatos ] = useState(
        {
            client : 'datos.client',
            clinic : 'datos.clinic',
            dentist : 'datos.dentist',
            date : 'datos.date'
        });


    //Handlers
    const updateCredentials = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }

    const crearCita = async () => {

        // {
        //     "client": "60bc9fdc76beb507fd3fcd78",
        //     "clinic": "60bb5e51ce1da1086f556d20",
        //     "dentist": "60b8bbd4006369390083b4ce",
        //     "date": "2022-06-06",
        //     "isActive": true
        // }

        let body = {
            client : datos.client,
            clinic : datos.clinic,
            dentist : datos.dentist,
            date : datos.date
        }

        let res = await axios.post('http://localhost:3006/appointment', body);

        let client = res.data.client;
        let token = res.data.token;

        if(token !== ""){

            localStorage.setItem("token", token);
            localStorage.setItem("client", JSON.stringify(client));

            setTimeout(()=> {

                history.push("/profile");

            }, 750);
        }else {
            console.log("Las credenciales no eran correctas");
        }
    }



    return (

        <Fragment>
        <div className="content">
            <div className="cita">
            <div className="inputClient">
                <input
                    type='name'
                    name='client'
                    title='client'
                    placeholder="Nombre del Paciente"
                    onChange={updateCredentials} lenght='30'
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
                    type='date'
                    name='date'
                    title='date'
                    placeholder="Selecciona la Fecha"
                    onChange={updateCredentials} lenght='30'
                />
            </div>
                <div className="sendButton inputClient" onClick={() => crearCita()}>Crear Cita</div>
            </div>
        </div>
        </Fragment>
    )
}

export default CreateAppointmnet;