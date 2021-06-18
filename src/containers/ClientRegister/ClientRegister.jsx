
import React, {useState} from 'react';
import axios from 'axios';
import "./ClientRegister.css";
import { connect } from 'react-redux';
import Calendar from '../../components/Calendar/Calendar';
import { REMOVE_CAL, DATE_CAL } from '../../redux/types';
import Moment from 'react-moment';

const Register = (props) => {

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

        console.log(props.calendar?.dateOfBirth, "jkja")

        let body = {
            name: datosUser.name,
            email : datosUser.email,
            phone: datosUser.phone,
            password : datosUser.password,
            dateOfBirth: Date.parse(props.calendar?.date),
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

            default:
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

     const prueba = (arg) => {
         console.log(arg, "jkasldjsalkdjaskldjaskljdlkasjdklasjdklsajdlaskj")
     }

    return (
        <div className="vistaRegisterClient">
            <div className="leftSide">
            <pre>{JSON.stringify(datosUser, null,2)}</pre>
            </div>
                <div className="formulario">

                <div className="box1">
                    <form className="form">
                        <input className="input" name="name" type="text" onChange={updateFormulario} onBlur={()=>checkError("name")}></input>
                        <label className="lbl-nombre">
                          <span className="text-nomb">Name</span>
                        </label>
                    </form>
                    <div>{errors.eName}</div>
                </div>

                <br></br>
                <div className="box1">
                    <form className="form1">
                        <input className="input1" name="email" type="text" onChange={updateFormulario} onBlur={()=>checkError("email")}></input>
                        <label className="lbl-nombre1">
                          <span className="text-nomb1">Email</span>
                        </label>
                    </form>
                    <div>{errors.eEmail}</div>
                </div>


                <br></br>
                <div className="box1">
                <form className="form2">
                    <input className="input2" name="phone" type="text" onChange={updateFormulario} onBlur={()=>checkError("phone")}></input>
                    <label className="lbl-nombre2">
                      <span className="text-nomb2">Phone</span>
                    </label>
                </form>
                <div>{errors.ePhone}</div>
                </div>

                <br></br>
                <div className="box1">
                <form className="form3">
                    <input className="input3" name="password" type="password" onChange={updateFormulario} onBlur={()=>checkError("password")}></input>
                    <label className="lbl-nombre3">
                      <span className="text-nomb3">Password</span>
                    </label>
                </form>
                <div>{errors.ePassword}</div>
                </div>

                <div className="box1">
                <form className="form4">
                    <input className="input4" name="password2" type="password" onChange={updateFormulario} onBlur={()=>checkError("password2")}></input>
                    <label className="lbl-nombre4">
                      <span className="text-nomb4">Repeat Password</span>
                    </label>
                </form>
                <div>{errors.ePassword2}</div>
                </div>

                <br></br>
                <div className="box1">    
                <form className="form5">
                    <input className="input5" name="city" type="text" onChange={updateFormulario}onBlur={()=>checkError("city")}></input>
                    <label className="lbl-nombre5">
                      <span className="text-nomb5">City</span>
                    </label>
                </form>
                <div>{errors.eCity}</div>
                </div>

                <br></br>    
                <div className="box1">
                <form className="form6">
                    <input className="input6" name="cp" type="text" onChange={updateFormulario} onBlur={()=>checkError("cp")}></input>
                    <label className="lbl-nombre6">
                      <span className="text-nomb6">Postal Code</span>
                    </label>
                </form>
                <div>{errors.eCp}</div> 
                </div>
                    
                <Calendar/>
                    {/* <input className="name" name="dateOfBirth" type="date" onChange=        {updateFormulario} onBlur={()=>checkError("dateOfBirth")}   placeholder="dateOfBirth"></  input><br></br>
                    <div>{errors.eDateofbirth}</div> */}

                <div className="registerButton" onClick={()=>applyRegister()}>Enviar
                    </div>
                </div>
            
        </div>
    )
}

export default connect((state)=>({
    calendar: state.calendar
}))(Register);