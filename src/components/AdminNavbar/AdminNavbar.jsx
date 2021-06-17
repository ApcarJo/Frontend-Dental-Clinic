import React from 'react';
import Button from '../Button/Button';
import './AdminNavbar.css';

const AdminNavbar = () => {

    return(

        <div className="adminNav">
            <Button path="/findappointments" destination="APPOINTMENTS"/>
            <Button path="/clients" destination="CLIENTS"/>
            <Button path="/clinics" destination="CLINICS"/>
        </div>
    )

}

export default AdminNavbar ;