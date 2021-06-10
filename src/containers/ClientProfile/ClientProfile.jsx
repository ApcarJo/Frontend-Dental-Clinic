import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';
import './ClientProfile.css';
import imgUser from '../../img/user.png'

const ClientProfile = () => {

    let history = useHistory() ;

    //hooks
    const [userData, setUserData] = useState({
        token: localStorage.getItem("token"), 
        client: JSON.parse(localStorage.getItem("client"))
    });

    useEffect( () => {

    }, [])

    useEffect( () => {

    })

    const logout = () => {
        localStorage.clear();
        setUserData("");
    }

    if(userData.token) {

        return(
            <div className="baseProfile">
                <ClientNavbar />
                <div className="clientDates">
                    <div className="clientLeftSide">
                        <h2>MY PROFILE</h2>
                        <img src={imgUser} alt="user" className="imgUser"/>
                        <div className="buttons">
                            <div className="buttonUpdate">UPDATE</div>
                            <div className="buttonLogout" onClick={() => logout()}>LOGOUT</div>
                        </div>
                    </div>
                    <div className="clientRightSide">
                        <p>NAME : {userData.client.name} </p>
                        <p>EMAIL : {userData.client.email} </p>
                        <p>PHONE : {userData.client.phone}</p>
                        <p>BIRTHDAY : {userData.client.dateOfBirth}</p>
                        <p>CITY : {userData.client.city}</p>
                    </div>
                </div>
            </div>
        )
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

export default ClientProfile;