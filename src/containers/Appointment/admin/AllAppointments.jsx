import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import './AllAppointments.css';

const AllAppointments = () => {

    const [allAppointments, setAppointments] = useState({});

    useEffect( () => {

        findAppointments();
    }, []);

    useEffect( () => {

    });

    const findAppointments = async () => {

        try {

            let token = localStorage.getItem("token");

            let res = await axios.get("http://localhost:3006/appointment",  {headers:{'authorization':'Bearer ' + token}});

            setAppointments(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    if( allAppointments[0]?._id ) {

        return(
            <div className="findAppointments">

                <AdminNavbar />

                <h2>Querido admin estas son las citas</h2>

                <div className="appointmentContent">
                    {allAppointments.map((appointments, index) => (

                        <div key={index} className="appointmentCards">

                            <p> CLIENT : {appointments.client.name} </p>
                            <p> PHONE : {appointments.client.phone} </p>
                            <p> CLINIC : {appointments.clinic.name} </p>
                            <p> PHONE : {appointments.clinic.phone} </p>
                            <p> CITY : {appointments.clinic.city} </p>
                            <p> DENTIST : {appointments.dentist.name} </p>
                            <p> DATE : {appointments.date} </p>

                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Buscando Citas...</h1>
            </div>
        )
    }
}

export default AllAppointments;
