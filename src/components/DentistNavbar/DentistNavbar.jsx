import React from 'react';
import Button from '../Button/Button';
import './DentistNavbar.css';

const DentistNavbar = () => {

    return(
        <div className="dentistnav">

            <Button path="/clinics" destination="CLINICS"/>
            <Button path="/dentistschedule" destination="MY SCHEDULE"/> 
           
        </div>
    )

}

export default DentistNavbar ;