
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = () => {

    let history = useHistory();

    // Hooks
    const [credentials,setCredentials] = useState({email:'',password:''});
    const [msgError, setMensajeError] = useState({eEmail:'',ePassword: '',eValidate:''});
    const [statusRole, setStatusRole] = useState({roleStatus: ''});

    // Esto es un Handler
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        //Este useEffect corresponde a una vez 
        //el componente se HA montado. Sólo se ejecuta una vez.
        // templateLogin();
    },[]);


    useEffect(()=>{
        //Este useEffect sin el array vacio como segundo argumento,
        //corresponde al estado de cada actualización del componente. Se ejecutará
        //tantas veces como se cambie el estado del componente
        
    });

    const checkStatus = async () => {

        let body = {
            email: credentials.email
        }

        let role = await axios.post('http://localhost:3006/clients/email', body);

        if (role.data !== null){
            setStatusRole({...statusRole, roleStatus: 'client'});
        }

        if (role.data == null){
            role = await axios.post('http://localhost:3006/dentists/email', body);
            if (role.data !== null) { 
                setStatusRole({...statusRole, roleStatus: 'dentist'});
            } 
        }
    }

    const checkError = () => {

        if (credentials.email.lengt < 3){
            setMensajeError({...msgError, eEmail: "Introduce un email"});
        }else {
            setMensajeError({...msgError, eEmail: ""});
        }

        if (credentials.password.length < 1){
            setMensajeError({...msgError, ePassword: "Introduce un password"});
        }else {
            setMensajeError({...msgError, ePassword: ""});
        }
    }

    const logeame = async () => {

        // Primero, testeamos los datos

        // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.email) ) {
        //     this.muestraError("Introduce un e-mail válido.");
        //     return;

        // A continuamos, generamos el body de datos

        let body = {
            email : credentials.email,
            password : credentials.password
        }
        // Envío por axios
        console.log(body)
        let res = await axios.post(`http://localhost:3006/login/${statusRole.roleStatus}`, body);
        console.log(res, "este es ressssssssssssssssssssssss");
        // let id = res.data.client._id;
        let token = res.data.token;
        console.log(token, "este es el tokeeeeeeeeeeeeeeeeeeeeeeeeeeeeen");

        if (token !== ""){
            // A falta de redux vamos a usar LocalStorage

            localStorage.setItem("token", token);
            localStorage.setItem("client", JSON.stringify(res.data.client));
            localStorage.setItem("dentist", JSON.stringify(res.data.dentist));
        // redirección
            setTimeout(()=>{
                history.push(`/${statusRole.roleStatus}profile`);
            },750);
        }else {
            setMensajeError({...msgError, eValidate: 'Wrong email or password'});
        }
        // res viene de vuelta con el token y los datos
    }
    // const templateLogin = () => {
        
    // }

    return(
        <div className="vistaLogin">
                <pre>{JSON.stringify(credentials, null,2)}</pre>
                <div className="loginCard">
                    <input type='text' className='loginBox' name='email' onChange={updateCredentials} onBlur={()=>checkStatus("email")} placeholder="your@email"></input>
                    <div>{msgError.eEmail}</div>
                    <input type='text' className='loginBox' name='password' onChange={updateCredentials} onBlur={()=>checkError("name")}  placeholder="password"></input>
                    <div>{msgError.ePassword}</div>
                    <div className="sendButton" onClick={()=>logeame()}>Login</div>
                    <div>{msgError.eValidate}</div>
                    {/* <div className="receiveInfo" onClick={()=>receive()}>ReceiveInfo</div> */}
                </div>
        </div>
        
        )
}


export default Login;