import React from 'react';
import './Register.css';
import {useHistory} from 'react-router-dom';


const Register = () => {

    let history = useHistory();

    const goTo = (path) => {

        history.push(path);

    }

    return(
        <div className="registerHome">
            
            <div className="registerOptions">

                <h2>W E L C O M E</h2>   
                <h4>Are you a new dentist?</h4>
                <div className="buttonRegister" onClick={() => goTo("/dentistregister")}>Sign up!</div> 
                <h4>Are you a new client?</h4>
                <div className="buttonRegister" onClick={() => goTo("/clientregister")}>Sign up!</div> 

            </div>
        </div>
    )

}

export default Register;