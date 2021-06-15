import React, {useState, useEffect} from 'react';
import DentistNavbar from '../../components/DentistNavbar/DentistNavbar';
import './DentistSchedule.css';
import axios from 'axios';
import { connect } from 'react-redux';

const DentistSchedule = (props) => {
    //hooks

    const [dentistSchedule, setDentistSchedule] = useState({});
    const [date, setDate] = useState('');

    useEffect( () => {
       
    }, [])

    useEffect( () => {
        searchAppointments();
    }, [])

    const updateCredentials = (e) => {
        setDate({ ...date, [e.target.name]: e.target.value });
      };

    const searchAppointments = async () => {
        try{
            let token = props.credentials?.token;
            let user = props.credentials?.dentist;
        
            let body = {
              
                date: "2010-05-06T22:00:00.000+00:00", //FALTA QUE FUNCIONE COGER EL DATE POR CALENDARIO
                dentist: user._id
            } 
        
            let res = await axios.post('http://localhost:3006/appointment/schedule',body, {headers:{'authorization':'Bearer ' + token}});
            setDentistSchedule(res.data)
        
        } catch (error){
            console.log(error)
        
        }
     }

     if(dentistSchedule[0]?.date){
                // si existe, mapeamos los resultados
                return(
                    <div className="dentistSchedule">
                        <DentistNavbar />
                        <h1>MY SCHEDULE</h1>
                        <div>SELECCIONE LA FECHA</div>

                        <input type="date" name="date" title="date" onChange={updateCredentials}/>

                        <div className="appointmentsContainer">
                            {dentistSchedule.map((appointment, index) => (
                                <div key={index} className="appointmentCard">
                                    <p>CLIENT : {appointment.client.name}</p>
                                    <p>CLINIC : {appointment.clinic.name}</p>
                                    <p>PHONE : {appointment.clinic.phone}</p>
                                    <p>CITY : {appointment.clinic.city}</p>
                                    <p>DATE : {appointment.date}</p>
       
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }else {
                return(
                    <div>

                        <div>SELECCIONE LA FECHA</div>

                        <input type="date" name="date" title="date" onChange={updateCredentials}/>

                        <div> ESTOY CARGANDO </div>
                    </div>
                )
            }

}

export default connect((state) => ({

    credentials:state.credentials

    }))(DentistSchedule);