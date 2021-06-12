import React, {useState, useEffect} from 'react';
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';
import './ClientAppointments.css';
import axios from 'axios';


const ClientAppointments = () => {

    //hooks
    const [clientAppointment, setClientAppointment] = useState({});

    useEffect( () => {

        searchAppointments();

    }, [])

    useEffect( () => {

    })

    const searchAppointments = async () => {

        try{

            let token = localStorage.getItem("token");
            let user = JSON.parse(localStorage.getItem("client"));

            let body = {
                id: user._id,
            }    

            let res = await axios.post('http://localhost:3006/appointment/client',body, {headers:{'authorization':'Bearer ' + token}});

            setClientAppointment(res.data)

        } catch (error){

            console.log(error)

        }
    }

    if(clientAppointment[0]?.clinicName){

        // si existe, mapeamos los resultados

        return(

            <div className="clientAllAppointmets"> 

                <ClientNavbar />

                <h1>MY APPOINTMENTS</h1>
                <div className="appointmentsContainer">

                    {clientAppointment.map((appointment, index) => (
                        
                        <div key={index} className="appointmentCard">
    
                            <p> CLINIC : {appointment.clinicName} </p>
                            <p> PHONE : {appointment.clinicPhone} </p>
                            <p> EMAIL : {appointment.clinicEmail} </p>
                            <p> DENTIST : {appointment.dentistName} </p>
                            <p> DATE : {appointment.date} </p>
                            
                       
                        </div>
    
                    ))}
                </div>

            </div>
        )

    }else {

        return(
            <div>
                ESTOY CARGANDO
            </div>
        )

    }

}

export default ClientAppointments;