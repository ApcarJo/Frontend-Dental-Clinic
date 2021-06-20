import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './ClientProfile.css';
import axios from "axios";
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
// import imgUser from '../../img/user.png'
import spinner from '../../img/spinner2.gif';

const ClientProfile = (props) => {

    let history = useHistory() ;

    // //hooks
    // const [userData, setUserData] = useState({
    //     token: props.credentials?.token, 
    //     client: props.credentials?.client
    // });

    const [clientApp, setClientApp] = useState([])

    useEffect(() => {
        searchAppointments();
      }, []);
    
    useEffect(() => { 
    });

    const searchAppointments = async () => {
        try {
          let token = props.credentials?.token;
          let user = props.credentials?.client;
    
          let body = {
            client: user._id,
          };
    
          let res = await axios.post(
            "http://localhost:3006/appointment/client", body, {
            headers: { authorization: "Bearer " + token }
          });

          console.log(res.data)
          setClientApp(res.data);

        } catch (error) {
          console.log(error);
        }
      };


    const logOut = () => {

        props.dispatch({type:LOGOUT});

    }

    if( props.credentials?.token) {

        return(
            <div className="baseProfile">
                <div className="clientProfile">
                    <div className="clientDates1">
                        <div className="clientLeftSide">
                            <h2>MY PROFILE</h2>
                            <img src={ props.credentials?.client.image} alt="user" className="imgUser"/>
                        </div>
                        <div className="clientRightSide">
                            <p>NAME : { props.credentials?.client.name} </p>
                            <p>EMAIL : { props.credentials?.client.email} </p>
                            <p>PHONE : { props.credentials?.client.phone}</p>
                            <p>BIRTHDAY : { props.credentials?.client.dateOfBirth}</p>
                            <p>CITY : { props.credentials?.client.city}</p>
                            <div className="buttons">
                                <div className="buttonUpdateC" onClick={() => history.push('/updateclient')} >UPDATE</div>
                                <div className="buttonLogoutC" onClick={() => logOut()}>LOGOUT</div>
                            </div>
                        </div>
                    </div>
                    <div className="clientAppointmentProfile">


                       {clientApp.map((appointment, index) => (
                        
                        <div key={index} className="appointmentCardProfile">
                    
                          <p> CLINIC : {appointment.clinicName} </p>
                    
                          <p> PHONE : {appointment.clinicPhone} </p>
                    
                          <p> EMAIL : {appointment.clinicEmail} </p>
                    
                          <p> DENTIST : {appointment.dentistName} </p>
                    
                          <p> DATE : {appointment.date} </p>

                        </div>

                       ))}
                    </div>
               
                </div>
            </div>
        )
    } else {

        setTimeout(()=> {
            history.push('/')
        },1000)
        
        return (
            <div className="spinnerContainer">
              <div className="spinnerC">
                 <img  src={spinner} alt="spinner" width="60" />
              </div>
            </div>
        )

    }


}

export default connect((state) => ({

    credentials:state.credentials

    }))(ClientProfile);