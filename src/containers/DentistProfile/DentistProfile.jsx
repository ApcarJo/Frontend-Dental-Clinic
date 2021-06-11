import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import DentistNavbar from '../../components/DentistNavbar/DentistNavbar';
import imgUser from '../../img/user.png';
import './DentistProfile.css'


const DentistProfile = () => {

  
    let history = useHistory() ;

    //hooks
    const [dentistData, setDentistData] = useState({
        token: localStorage.getItem("token"), 
        dentist: JSON.parse(localStorage.getItem("dentist"))
    });

    useEffect( () => {

    }, [])

    useEffect( () => {

    })

    const logout = () => {
        localStorage.clear();
        setDentistData("");
    }

    if(dentistData.token) {

        return(
            <div className="dentistContainer">
                <DentistNavbar/>
                <div className="dentistProfile">
                    <div className="dentistDates">
                        <div className="dentistLeftSide">
                            <h2>MY PROFILE</h2>
                            <img src={dentistData.dentist.image} alt="user" className="imgUser"/>
                        </div>
                        <div className="dentistRightSide">
                            <p>NAME : {dentistData.dentist.name} </p>
                            <p>EMAIL : {dentistData.dentist.email} </p>
                            <p>PHONE : {dentistData.dentist.phone}</p>
                            <p>SPECIALITY : {dentistData.dentist.speciality}</p>
                            <p>CITY : {dentistData.dentist.city}</p>
                            <div className="buttons">
                                <div className="buttonUpdate">UPDATE</div>
                                <div className="buttonLogout" onClick={() => logout()}>LOGOUT</div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule">
                        <h1> AQUI VA EL CALENDARIO!!!! </h1>
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

export default DentistProfile;