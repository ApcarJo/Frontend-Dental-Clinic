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

                <h1>WELCOME</h1>   
                <h3>Are you a new dentist?</h3>
                <div className="buttonRegister" onClick={() => goTo("/dentistregister")}>CLICK</div> 
                <h3>Are you a new client?</h3>
                <div className="buttonRegister" onClick={() => goTo("/clientregister")}>CLICK</div> 

            </div>
        </div>
    )

}

export default Register;