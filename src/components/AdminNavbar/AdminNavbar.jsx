import React from 'react';
import Button from '../Button/Button';
import './AdminNavbar.css';

const AdminNavbar = () => {

    return(

        <div className="adminNav">
            <Button path="/clinics" destination="CLINICS"/>
            <Button path="/clients" destination="CLIENTS"/>
        </div>
    )

}

export default AdminNavbar ;