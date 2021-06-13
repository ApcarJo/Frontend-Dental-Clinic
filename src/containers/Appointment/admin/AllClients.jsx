import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import './AllClients.css';


const AllClients = () => {

    const [clients, setClients] = useState({});

    useEffect(() => {

        findAllClients();
    },[]);

    useEffect(() => {

    });

    const findAllClients = async () => {

        try {

            let token = localStorage.getItem("token");

            let res = await axios.get("http://localhost:3006/clients",  {headers:{'authorization':'Bearer ' + token}});

            console.log('here', res.data);
            setClients(res.data)
        } catch (error) {
            console.log(error);
        }
    }


    if( clients[0]?._id ) {

        return(
            <div className="allClients">

                <AdminNavbar />

                <h2>Querido admin estos son los clientes</h2>

                <div className="clientContent">
                    {clients.map((clients, index) => (

                        <div key={index} className="clientCards">

                            <p> CLIENT : {clients.name} </p>
                            <p> PHONE : {clients.phone} </p>
                            <p> EMAIL : {clients.email} </p>
                            <p> CITY : {clients.city} </p>
                            <p> CP : {clients.cp} </p>
                            <p> BIRTHDAY : {clients.dateOfBirth} </p>
                            <img src={clients.image} alt="client" className="imgClient"/>


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

export default AllClients;
