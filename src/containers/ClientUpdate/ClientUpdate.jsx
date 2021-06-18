import React, { useState } from 'react';
import './ClientUpdate.css';
import axios from 'axios'
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { UPDATE_USER } from '../../redux/types';

const ClientUpdate = (props) => {

    let history = useHistory();

    const [updateInfo, setUpdateInfo] = useState({
        name : props.credentials?.client.name,
        email: props.credentials?.client.email,
        phone : props.credentials?.client.phone,
        password : "",
        city: props.credentials?.client.city,
        cp: props.credentials?.client.cp
    });

    const [errors, setErrors] = useState({
        eName: '',
        eEmail: '',
        ePhone: '',
        ePassword: '',
        ePassword2: '',
        eCity: '',
        eCp: ''

    });

    // Handler
    const updateInfoClient = (e) => {
        setUpdateInfo({...updateInfo, [e.target.name]: e.target.value})
    }

    const updateUser = async () => {

        let token = props.credentials?.token;
        let user = props.credentials?.client;

        let body = {

            client: user._id,
            name: updateInfo.name,
            email: updateInfo.email,
            phone: updateInfo.phone,
            password: updateInfo.password,
            city: updateInfo.city,
            cp: updateInfo.cp
        
        }

        console.log(body,"bodyy")


        let res = await axios.put('http://localhost:3006/clients', body, {headers:{'authorization':'Bearer ' + token}});

        console.log(res.data)

        props.dispatch({type:UPDATE_USER, payload:res.data});

        setTimeout(()=>{
            history.push('/clientprofile');
        },750);


    }
    const checkError = (arg) => {
        switch (arg){
            case 'name':
                if ((updateInfo.name.length < 2)||(! /^[a-z ,.'-]+$/i.test(updateInfo.name))||(updateInfo.name.length > 20)){
                    setErrors({...errors, eName: 'Introduce un nombre válido'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'email':
                console.log("hola, soy error de email");
                if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(updateInfo.email)){
                    setErrors({...errors, eEmail: 'Introduce un email válido'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;

            case 'password':
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(updateInfo.password)){
                // if (updateInfo.password.length < 8){
                    setErrors({...errors, ePassword: 'At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'});
                }else{
                    setErrors({...errors, ePassword: ''});
                }
            break;

            case 'phone':
                if ((! /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(updateInfo.phone))||(updateInfo.phone.length > 16)){
                // if (updateInfo.password.length < 8){
                    setErrors({...errors, ePhone: 'Wrong phone number'});
                }else{
                    setErrors({...errors, ePhone: ''});
                }
            break;

            case 'password2':
                if (updateInfo.password !== updateInfo.password2){
                    setErrors({...errors, ePassword2: 'Password should be the same'});
                }else{
                    setErrors({...errors, ePassword2: ''});
                }
            break;

            default:
                break;
        }
    }


    if( props.credentials?.token ) {
       return(
           <div className="clientUpdateContainer">
               
            <div className="updateContainer">
    
                <form className="form">
                    <input type="text" name="name" placeholder={props.credentials?.client.name} onBlur={()=>checkError("name")} onChange={updateInfoClient} />
                    <label className="lbl-nombre">
                      <span className="text-nomb">Nombre</span>
                    </label>
                </form>
                <div>{errors.eName}</div>
                <form className="form">
                   <input type="email" name="email" placeholder={props.credentials?.client.email} onChange={updateInfoClient} onBlur={()=>checkError("email")}/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">E-mail</span>
                    </label>
                </form>
                <div>{errors.eEmail}</div>
                <form className="form">
                    <input type="text" name="phone" placeholder={props.credentials?.client.phone} onChange={updateInfoClient} onBlur={()=>checkError("phone")} />
                    <label className="lbl-nombre">
                      <span className="text-nomb">Phone</span>
                    </label>
                </form>
                <div>{errors.ePhone}</div>
                <form className="form">
                    {/* aqui no muestra nada pq al logear no se guarda la contraseña (backend) */}
                    <input type="password" name="password" placeholder="New password" onChange={updateInfoClient} /> 
                    <label className="lbl-nombre">
                      <span className="text-nomb">Password</span>
                    </label>
                </form>
                <div>{errors.ePassword}</div>
                <form className="form">
                    <input type="text" name="city" placeholder={props.credentials?.client.city} onChange={updateInfoClient} onBlur={()=>checkError("city")}/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">City</span>
                    </label>
                </form>
                <div>{errors.eCity}</div>
                <form className="form">
                    <input type="text" name="cp" placeholder={props.credentials?.client.cp} onChange={updateInfoClient} onBlur={()=>checkError("cp")}/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">Postal Code</span>
                    </label>
                </form>
                <div>{errors.eCp}</div>
                <div className="updateButton" onClick={() => updateUser()}>UPDATE</div>
    
            </div>
    
           </div>
       )
    } else {


    return (
        <div>
            CARGANDO DATOS
        </div>
    )}

}

export default connect((state) => ({

    credentials:state.credentials
  
    }))(ClientUpdate);