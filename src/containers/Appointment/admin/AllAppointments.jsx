import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllAppointments.css';
import spinner from '../../../img/spinner2.gif';
import { connect } from 'react-redux';

const AllAppointments = (props) => {

    const [allAppointments, setAppointments] = useState([]);

    useEffect( () => {

        findAppointments();
    }, []);

    useEffect( () => {

    });

    const findAppointments = async () => {

        try {

            let token = props.credentials?.token;

            let res = await axios.get("http://localhost:3006/appointment",  {headers:{'authorization':'Bearer ' + token}});
            console.log(res.data, "no imprime nada")
            setAppointments(res.data);
            

        } catch (error) {
            console.log(error);
        }
    }

    if( allAppointments[0]?._id ) {

        return(
            <div className="findAppointments">

                <h2>All Appointments</h2>

                <div className="appointmentContent">
                    {allAppointments.map((appointments, index) => (

                        <div key={index} className="appointmentCards">

                            <p className="texto"> CLIENT : {appointments.client.name} </p>
                            <p className="texto"> <a class="mailClient" href="tel:+3495323123">  PHONE : {appointments.client.phone} </a></p>
                            <p className="texto"> CLINIC : {appointments.clinic.name} </p>
                            <p className="texto"> <a class="mailClient" href="tel:+3495323123">  PHONE : {appointments.clinic.phone} </a></p>
                            <p className="texto"> CITY : {appointments.clinic.city} </p>
                            <p className="texto"> DENTIST : {appointments.dentist.name} </p>
                            <p className="texto"> DATE : {appointments.date} </p>

                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="spinnerContainer">
              <div className="spinner">
                 <img  src={spinner} alt="spinner" width="60" />
              </div>
        </div>)
    }
    
}

export default connect((state)=>({
    credentials: state.credentials,
	calendar: state.calendar
}))(AllAppointments);;
