import React from 'react';
import Button from '../Button/Button';
import './ClientNavbar.css'

const ClientNavbar = () => {

    return(
        <div className="clientnav">

            <Button path="/clinics" destination="CLINICS"/>
            <Button path="/dentists" destination="DENTISTS"/> 
            <Button path="/clientappointments" destination="MY APPOINTMENTS"/>
            <Button path="/appointments" destination="CREATE APPOINTMENT"/>
           
        </div>
    )

}

export default ClientNavbar ;