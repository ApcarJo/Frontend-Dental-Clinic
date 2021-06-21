import React from 'react';
import Button from '../Button/Button';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
import logo from '../../img/logo.png'
import { useHistory } from 'react-router-dom';


const Header = (props) => {

    let history = useHistory();

    const logOut = () => {

        props.dispatch({type:LOGOUT});
        history.push("/")
    }

    if(props.credentials.client?.name){

        return(
            <div className="header">

            <img className="headerLogo" src={logo} alt="LOGO" onClick={() => history.push('/') }></img>

            <div className="headerLinks">
                
                <Button path="/clinics" destination="CLINICS"/>
                <Button path="/aboutus" destination="ABOUT US"/>

                <Button path="/dentists" destination="DENTISTS"/>
                <Button path="/clientappointments" destination="MY APPOINTMENTS"/>
                <Button path="/appointments" destination="CREATE APPOINTMENT"/>
            </div>

            <div className="headerUser">
            <Button path="/clientprofile" destination={props.credentials?.client.name}/>
            <p>|</p>
            <div className="linkLogout" onClick={() => logOut()}>LOGOUT</div>
            </div>

        </div>


    )} else if (props.credentials.dentist?.name){
        return(
            <div className="header">
    
            <img className="headerLogo" src={logo} alt="LOGO" onClick={() => history.push('/') }></img>


            <div className="headerLinks">
                <Button path="/aboutus" destination="ABOUT US"/>
                <Button path="/clinics" destination="CLINICS"/>
                <Button path="/contact" destination="CONTACT"/>
                <Button path="/dentistschedule" destination="MY HISTORY"/>
            </div>

            <div className="headerUser">
            <Button path="/dentistprofile" destination={props.credentials?.dentist.name}/>
            <p>|</p>
            <div className="linkLogout" onClick={() => logOut()}>LOGOUT</div>
            </div>

        </div>


    )} else {


        return(
            <div className="header">
    
                <img className="headerLogo" src={logo} alt="LOGO" onClick={() => history.push('/') }></img>

                <div className="headerLinks">
                    <Button path="/aboutus" destination="ABOUT US"/>
                    <Button path="/clinics" destination="CLINICS"/>
                    <Button path="/contact" destination="CONTACT"/>
                </div>
    
                <div className="headerUser">
                    <Button path="/login" destination="LOGIN"/>
                    <p>|</p>
                    <Button path="/register" destination="REGISTER"/>
                </div>
            </div>
        )

    }

}

export default connect((state) => ({

    credentials:state.credentials

    }))(Header);