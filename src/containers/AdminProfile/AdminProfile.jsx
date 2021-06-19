import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import './AdminProfile.css';
import spinner from '../../img/spinner2.gif';
//RDX
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';



const AdminProfile = (props) => {

    const [admin, setAdmin] = useState({});

    useEffect(() => {

        findAllAdmin();
    },[]);

    useEffect(() => {

    });

    const findAllAdmin = async () => {

        try {

            let token = localStorage.getItem("token");

            let res = await axios.get("http://localhost:3006/admin",  {headers:{'authorization':'Bearer ' + token}});

            console.log('here', res.data);
            setAdmin(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = () => {

        props.dispatch({type:LOGOUT});

    }

    if( admin[0]?._id ) {

        return(
            <div className="admin">

                <AdminNavbar />

                <h2>Welcome Back!</h2>

                <div className="adminContent">
                    {admin.map((admin, index) => (

                        <div key={index} className="adminCard">

                            <p className="textparra"> ADMIN : {admin.name} </p>
                            <p className="textparra"> PHONE : {admin.phone} </p>
                            <p className="textparra"> EMAIL : {admin.email} </p>
                            <img src={admin.image} alt="admin" className="imgAdmin"/>

                            <div className="buttons">
                                <div className="buttonUpdate">UPDATE</div>
                                <div className="buttonLogout" onClick={() => logOut()}>LOGOUT</div>
                            </div>
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
            </div>
        );    
    }
}

export default connect((state) => ({

    credentials:state.credentials

    }))(AdminProfile);
