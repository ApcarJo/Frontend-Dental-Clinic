
import React, {useState} from 'react';
import axios from 'axios';
import './ClientRegister.css';

const Register = () => {

    // Hook
    const [datosUser,setDatosUser] = useState(
        {
        name:'',
        email:'',
        phone:'',
        password:'',
        password2: '',
        dateOfBirth: '',
        city: '',
        cp: ''
    });

    const [errors, setErrors] = useState({
        eName: '',
        eEmail: '',
        ePhone: '',
        ePassword: '',
        ePassword2: '',
        eDateofbirth: '',
        eCity: '',
        eCp: ''

    });

    // Handler
    const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value})
    }

    const applyRegister = async () => {
        // e.preventDefault();

        let body = {
            name: datosUser.name,
            email : datosUser.email,
            phone: datosUser.phone,
            password : datosUser.password,
            dateOfBirth: datosUser.dateOfBirth,
            city: datosUser.city,
            cp: datosUser.cp
        }
        console.log(body);

        let res = await axios.post('http://localhost:3006/clients', body);
        console.log(res);
    }

    const checkError = (arg) => {
        switch (arg){
            case 'name':
                if(datosUser.name.length < 4){
                    setErrors({...errors, eName: 'El nombre debe de tener 4 caracteres'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'email':
                if (datosUser.email.length < 4){
                    setErrors({...errors, eEmail: 'El email debe de tener 4 caracteres'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;

            case 'password':
                console.log("hola, soy error de password");
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(datosUser.password)){
                // if (datosUser.password.length < 8){
                    setErrors({...errors, ePassword: '- at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'});
                }else{
                    setErrors({...errors, ePassword: ''});
                }
            break;

            case 'password2':
                if (datosUser.password !== datosUser.password2){
                    setErrors({...errors, ePassword2: 'Password should be the same'});
                }else{
                    setErrors({...errors, ePassword2: ''});
                }
            break;
        }
    }
     const errorStyle = (arg) =>{
        
        let errorDefault = "name";
        let errorWarning = "red";

        if (errors.eName!== ''){
            return errorWarning;
        }

        return errorDefault;
     }
    return (

        <div className="formulario">
            
            <pre>{JSON.stringify(datosUser, null,2)}</pre>
            
            <input className={errorStyle("name")} name="name" type="text" onChange={updateFormulario} onBlur={()=>checkError("name")} placeholder="name"></input><br></br>
            <div>{errors.eName}</div>
            <input className="name" name="email" type="text" onChange={updateFormulario} onBlur={()=>checkError("email")} placeholder="email"></input><br></br>
            <div>{errors.eEmail}</div>
            <input className="name" name="phone" type="text" onChange={updateFormulario} onBlur={()=>checkError("phone")} placeholder="phone number"></input><br></br>
            <div>{errors.ePhone}</div>
            <input className="name" name="password" type="password" onChange={updateFormulario} onBlur={()=>checkError("password")} placeholder="password"></input><br></br>
            <div>{errors.ePassword}</div>
            <input className="name" name="password2" type="password" onChange={updateFormulario} onBlur={()=>checkError("password2")} placeholder="password2"></input><br></br>
            <div>{errors.ePassword2}</div>
            <input className="name" name="dateOfBirth" type="date" onChange={updateFormulario} onBlur={()=>checkError("dateOfBirth")} placeholder="dateOfBirth"></input><br></br>
            <div>{errors.eDateofbirth}</div>
            <input className="name" name="city" type="text" onChange={updateFormulario} onBlur={()=>checkError("city")} placeholder="city"></input><br></br>
            <div>{errors.eCity}</div>
            <input className="name" name="cp" type="text" onChange={updateFormulario} onBlur={()=>checkError("cp")} placeholder="postal code"></input><br></br>
            <div>{errors.eCp}</div>


            <div className="registerButton" onClick={()=>applyRegister()}>Enviar
            </div>
        </div>
    )
}

export default Register;