import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './ClientProfile.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
// import imgUser from '../../img/user.png'

const ClientProfile = (props) => {

    let history = useHistory() ;

    //hooks
    const [userData, setUserData] = useState({
        token: props.credentials?.token, 
        client: props.credentials?.client
    });

    useEffect( () => {

    }, [])

    useEffect( () => {

    })

    // const logout = () => {
    //     localStorage.clear();
    //     setUserData("");
    // }


    const logOut = () => {

        props.dispatch({type:LOGOUT});

    }

    if( props.credentials?.token) {

        return(
            <div className="baseProfile">
                <div className="clientProfile">
                    <div className="clientDates">
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
                                <div className="buttonUpdate">UPDATE</div>
                                <div className="buttonLogout" onClick={() => logOut()}>LOGOUT</div>
                            </div>
                        </div>
                    </div>
                    <div className="clientAppointments">
                            <h1> AQUI VA LA PROXIMA CITA!!!!!</h1>
                    </div>
                </div>
            </div>
        )
    } else {

        setTimeout(() => {
    
            history.push("/")

       });
 
        return(
            <div>
                CARGANDO DATOS
            </div>
        )

    }


}

export default connect((state) => ({

    credentials:state.credentials

    }))(ClientProfile);