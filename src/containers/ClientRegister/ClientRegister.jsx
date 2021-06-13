
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
                if ((datosUser.name.length < 2)||(! /^[a-z ,.'-]+$/i.test(datosUser.name))||(datosUser.name.length > 20)){
                    setErrors({...errors, eName: 'Introduce un nombre válido'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'email':
                console.log("hola, soy error de email");
                if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(datosUser.email)){
                    setErrors({...errors, eEmail: 'Introduce un email válido 2'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;

            case 'password':
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(datosUser.password)){
                // if (datosUser.password.length < 8){
                    setErrors({...errors, ePassword: 'At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'});
                }else{
                    setErrors({...errors, ePassword: ''});
                }
            break;

            case 'phone':
                if ((! /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(datosUser.phone))||(datosUser.phone.length > 16)){
                // if (datosUser.password.length < 8){
                    setErrors({...errors, ePhone: 'Wrong phone number'});
                }else{
                    setErrors({...errors, ePhone: ''});
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