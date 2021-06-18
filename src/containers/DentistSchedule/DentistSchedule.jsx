import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './DentistSchedule.css';
import axios from 'axios';
import { SCHEDULE_CAL } from '../../redux/types'

const DentistSchedule = (props) => {
    
    //HOOKS
    const [agenda, setDentistAgenda] = useState({
        data: [],
        date: "2010-05-06T22:00:00.000+00:00"
    });
    const [date, setDate] = useState('');

    useEffect( () => {
        searchAppointments();
    }, [])

    useEffect( () => {
        // updateSchedule();
    })

    // HANDLER
    const updateCredentials = (e) => {
        setDate({ ...date, [e.target.name]: e.target.value });
      };

    const updateAgenda = (e) => {
        setDentistAgenda({ ...date, [e.target.name]: e.target.value });
      };

    const searchAppointments = async () => {
        try{
            let token = props.credentials?.token;
            let user = props.credentials?.dentist;
        
            let body = {
                // date: Date.parse(dentistSchedule.date), //FALTA QUE FUNCIONE COGER EL DATE POR CALENDARIO
                dentist: user._id
            } 
        
            let res = await axios.post('http://localhost:3006/appointment/scheduleDentist',body, {headers:{'authorization':'Bearer ' + token}});
            props.dispatch({type: SCHEDULE_CAL, payload: res?.data})
            console.log(res?.data, "esto es res?.data")
            console.log(agenda.data, "esto es agenda.data")
            console.log(props.schedule, "esto es props.data")
        
            setDentistAgenda({...agenda, data: res?.data})
            
        
        } catch (error){
            console.log(error)
        
        }
     }

     if(agenda?.data){
                // si existe, mapeamos los resultados
                return(
                    <div className="dentistSchedule">
                        <h1>MY SCHEDULE</h1>
                        <div>SELECCIONE LA FECHA</div>

                        <input type="date" name="date" title="date" onChange={updateCredentials}/>

                        <div className="appointmentsContainer">
                            {agenda?.data.map((appointment, index) => (
                                <div key={index} className="appointmentCard">
                                    <p>CLIENT : {appointment.clientName}</p>
                                    <p>CLINIC : {appointment.clinicName}</p>
                                    <p>PHONE : {appointment.clinicPhone}</p>
                                    <p>CITY : {appointment.city}</p>
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

    credentials:state.credentials,
    calendar: state.calendar,
    schedule: state.schedule
    }))(DentistSchedule);