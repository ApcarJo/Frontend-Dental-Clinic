import React from 'react';
import Button from '../Button/Button';
import './Header.css'

const Header = () => {

    return(
        <div className="header">
            <img src="" alt="LOGO" />
            <Button path="/" destination="HOME"/>
            <Button path="/aboutus" destination="ABOUT US"/>
            <Button path="/clinics" destination="CLINICS"/>
            <Button path="/contact" destination="CONTACT"/>
            <Button path="/login" destination="LOGIN"/>
            <Button path="/register" destination="REGISTER"/>
        </div>
    )

}

export default Header;