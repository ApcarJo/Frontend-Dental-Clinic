import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
//import imgUser from '../../img/user.png';
import './DentistProfile.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';


const DentistProfile = (props) => {

  
    let history = useHistory() ;

    //hooks
    const [dentistData, setDentistData] = useState({
        token: props.credentials?.token,
        dentist: props.credentials?.dentist
    });

    useEffect( () => {

    }, [])

    useEffect( () => {

    })

    const logOut = () => {

        props.dispatch({type:LOGOUT});

    }
    
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
                    </div>
                </div>
            </div> )
    } else {

        setTimeout(() => {
    
            history.push("/login")

       }, 2000);
 
        return(
            <div>
                CARGANDO DATOS
            </div>
        )

    }



}

export default connect((state) => ({

    credentials:state.credentials

    }))(DentistProfile);