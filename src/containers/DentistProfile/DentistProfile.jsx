import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
//import imgUser from '../../img/user.png';
import './DentistProfile.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
import { DATES_DENTIST, SCHEDULE_CAL, DATE_CAL } from '../../redux/types';
import Calendar from '../../components/Calendar/Calendar';


const DentistProfile = (props) => {

  
    let history = useHistory() ;

    //hooks
    const [dentistData, setDentistData] = useState({
        token: props.credentials?.token,
        dentist: props.credentials?.dentist
    });

    const [dateInitial, setDateInitial] = useState({

    })

    useEffect( () => {
        // searchAppointments();
        // initiateDate();
    }, [])

    useEffect( () => {

    })

    const logOut = () => {

        props.dispatch({type:LOGOUT});

    }
    // let newDate = new Date();
	// let year = newDate.getFullYear();
	// let monthy = newDate.getMonth()+1;
	// let day = newDate.getDate();

    // const initiateDate = () => {
	// 	const actualDate = {
	// 		year: newDate.getFullYear(),
	// 		monthy: newDate.getMonth()+1,
	// 		day: newDate.getDate(),
	// 	}

	// // Guardo en RDX
	// props.dispatch({type:DATE_CAL, payload:actualDate});
	// }
    // const searchAppointments = async () => {
    //     try{
    //         let token = props.credentials?.token;
    //         let user = props.credentials?.dentist;
        
    //         let body = {
    //             // date: Date.parse(dentistSchedule.date), //FALTA QUE FUNCIONE COGER EL DATE POR CALENDARIO
    //             dentist: user._id
    //         } 
        
    //         let res = await axios.post('http://localhost:3006/appointment/scheduleDentist',body, {headers:{'authorization':'Bearer ' + token}});
    //         props.dispatch({type: SCHEDULE_CAL, payload: res?.data})
    //         console.log(res?.data, "esto es res?.data")
    //         // console.log(agenda.data, "esto es agenda.data")
    //         console.log(props.schedule, "esto es props.data")
        
    //         // setDentistAgenda({...agenda, data: res?.data})
            
        
    //     } catch (error){
    //         console.log(error)
        
    //     }
    //  }

    console.log(props.calendar?.semana, "semana imprimir console")
    console.log(props.calendar?.diasMes, "diasMes imprimir console")
    

    if(props.credentials?.token) {

        return(
            <div className="dentistContainer">
                <div className="dentistProfile">
                    <div className="dentistDates">
                        <div className="dentistLeftSide">
                            <h2>MY PROFILE</h2>
                            <img src={props.credentials?.dentist.image} alt="user" className="imgDent"/>
                        </div>
                        <div className="dentistRightSide">
                            <p>NAME : {props.credentials?.dentist.name} </p>
                            <p>EMAIL : {props.credentials?.dentist.email} </p>
                            <p>PHONE : {props.credentials?.dentist.phone}</p>
                            <p>SPECIALITY : {props.credentials?.dentist.speciality}</p>
                            <p>CITY : {props.credentials?.dentist.city}</p>
                            <div className="buttons">
                                <div className="buttonUpdate">UPDATE</div>
                                <div className="buttonLogout" onClick={() => logOut()}>LOGOUT</div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="calendar"></div>
                        {/* <h1> AQUI VA EL CALENDARIO!!!! </h1> */}
                        <div className="drawDentistCalendar">
			                {props.calendar?.semana.map((semana, index) => (
					            <div className="dayDentistBox" key={index}>
							        <p>{semana}</p>
					            </div>
			                ))}

			                {props.calendar?.diasMes.map((diasMes, index) => (
			                	<div className="dayDentistBox" id={index} key={index}>
			                			{diasMes==4 ? (<p>{diasMes}</p>) : (<p>{diasMes}a</p>)}
			                	</div>
			                ))}	
		            </div>
                    </div>
                </div>
            </div>
        )
    } else {
        history.push("/")
        return(
            <div>
                CARGANDO DATOS
            </div>
        )
    }
}

export default connect((state) => ({
    credentials: state.credentials,
    calendar: state.calendar,
    dentistSchedule: state.dentistSchedule
}))(DentistProfile);