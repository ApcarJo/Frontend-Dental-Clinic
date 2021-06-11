
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = () => {

    let history = useHistory();

    // Hooks
    const [credentials,setCredentials] = useState({email:'',password:''});
    const [msgError, setMensajeError] = useState('');

    // Esto es un Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const logeame = async () => {

        // Primero, testeamos los datos

        // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.email) ) {
        //     this.muestraError("Introduce un e-mail válido.");
        //     return;

        if (credentials.email.lengt < 4){
            setMensajeError("Introduce un email válido");
            return;
        }

        if (credentials.password.length < 4){
            setMensajeError("El password no es válido")
            return;
        }
        // A continuamos, generamos el body de datos

        let body = {
            email : credentials.email,
            password : credentials.password
        }

        console.log("enviaría este body", body);

        // Envío por axios

        let res = await axios.post('http://localhost:3006/login/Client', body);
        console.log(res.data.client._id);
        let id = res.data.client._id;
        console.log(res.data.client);
        let token = res.data.token;
        console.log(token);

        if (token !== ""){
            // A falta de redux vamos a usar LocalStorage

        localStorage.setItem("token", token);
        localStorage.setItem("client", JSON.stringify(res.data.client));

        // redirección
        setTimeout(()=>{
            history.push("/clientprofile");
        },750);
        

        }else {
            setMensajeError("Las credenciales no eran correctas");
        }

        // res viene de vuelta con el token y los datos

    }

    return(
        <div className="vistaLogin">
            <pre>{JSON.stringify(credentials, null,2)}</pre>
            <div className="loginCard">
                
                <input type='email' className='loginBox' name='email' onChange={updateCredentials} placeholder="your@email.net"></input>
                <input type='text' className='loginBox' name='password' onChange={updateCredentials} placeholder="password"></input>
                <div className="sendButton" onClick={()=>logeame()}>Login</div>
                <div>{msgError}</div>
                {/* <div className="receiveInfo" onClick={()=>receive()}>ReceiveInfo</div> */}
            </div>
        </div>
        )
}


export default Login;