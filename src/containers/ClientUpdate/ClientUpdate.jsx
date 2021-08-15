import React, { useState } from 'react';
import './ClientUpdate.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { UPDATE_USER } from '../../redux/types';
import spinner from '../../img/spinner2.gif';

const ClientUpdate = (props) => {

    let history = useHistory();

    const [updateInfo, setUpdateInfo] = useState({
        name : props.credentials?.client.name,
        email: props.credentials?.client.email,
        phone : props.credentials?.client.phone,
        city: props.credentials?.client.city,
        cp: props.credentials?.client.cp
    });

    const [passwords, setPasswords] = useState({
        oldPassword : "",
        newPassword : "",
        newPassword2 : ""
    });

    const [errors, setErrors] = useState({
        eName: '',
        eEmail: '',
        ePhone: '',
        ePassword: '',
        ePassword2: '',
        eCity: '',
        eCp: '',
        eValidate:''

    });

    // Handlers
    const updateInfoClient = (e) => {
        setUpdateInfo({...updateInfo, [e.target.name]: e.target.value})
    }

    const updatePasswordClient = (e) => {
        setPasswords({...passwords, [e.target.name]: e.target.value})
    }


    const updateUser = async () => {

        try {

            let token = props.credentials?.token;
            let user = props.credentials?.client;
    
            let body = {
    
                client: user._id,
                name: updateInfo.name,
                email: updateInfo.email,
                phone: updateInfo.phone,
                city: updateInfo.city,
                cp: updateInfo.cp
            
            }
    
            let res = await axios.put('https://geekshubsdentalclinicback.herokuapp.com/clients', body, {headers:{'authorization':'Bearer ' + token}});
    
            props.dispatch({type:UPDATE_USER, payload:res.data});
    
            setTimeout(()=>{
                history.push('/clientprofile');
            },750);

        } catch {
            setErrors({...errors, eValidate: 'Could not be completed., please try again'});
        }
 
    }

    const updatePassword = async () => {

       try{

            let token = props.credentials?.token;
            let user = props.credentials?.client;
            let body = {
                client: user._id,
                oldPassword : passwords.oldPassword,
                newPassword : passwords.newPassword
            
            }
            let res = await axios.put('http://localhost:3006/clients/updatepassword', body, {headers:{'authorization':'Bearer ' + token}});
            setTimeout(()=>{
                history.push('/clientprofile');
            },750);

       } catch {
           setErrors({...errors, eValidate: 'Wrong password, please try again'});
       }

        
    }


    const checkError = (arg) => {
        switch (arg){
            case 'name':
                if ((updateInfo.name.length < 2)||(! /^[a-z ,.'-]+$/i.test(updateInfo.name))||(updateInfo.name.length > 20)){
                    setErrors({...errors, eName: 'Please enter a valid name'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'email':
                console.log("hola, soy error de email");
                if (! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(updateInfo.email)){
                    setErrors({...errors, eEmail: 'Please enter a valid e-mail'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;

            case 'password':
                if (! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(passwords.newPassword)){
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
                if (passwords.newPassword !== passwords.newPassword2){
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

            <div className="updatePassword">

                <h3 className="titleUpdate">Update your password</h3>

                <form className="form">
                    <input type="password" name="oldPassword" onChange={updatePasswordClient} required/> 
                    <label className="lbl-nombre">
                      <span className="text-nomb">Old Password</span>
                    </label>
                </form>
                <div className="box2">
                    <div className="errorsText">{errors.ePassword}</div>
                    <form className="form">
                        <input type="password" name="newPassword" onChange={updatePasswordClient} onBlur={()=>checkError("password")}required/> 
                        <label className="lbl-nombre">
                          <span className="text-nomb">New Password</span>
                        </label>
                    </form>
                </div>
                <div className="box2">
                    <div className="errorsText">{errors.ePassword2}</div>
                    <form className="form">
                        <input type="password" name="newPassword2" onChange={updatePasswordClient} onBlur={()=>checkError("password2")} required/> 
                        <label className="lbl-nombre">
                          <span className="text-nomb">Repeat New Password</span>
                        </label>
                    </form>     
                </div>
                
                <div className="errorsText">{errors.eValidate}</div>

                <div className="updateButton" onClick={() => updatePassword()}>UPDATE</div>

            </div>
               
            <div className="updateContainer">

                <h3 className="titleUpdate">Update your info</h3>

                <div className="errorsText">{errors.eName}</div>
                <form className="form">
                    <input type="text" name="name" placeholder={props.credentials?.client.name} onBlur={()=>checkError("name")} onChange={updateInfoClient} required/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">Nombre</span>
                    </label>
                </form>
                <div className="errorsText">{errors.eEmail}</div>
                <form className="form">
                   <input type="email" name="email" placeholder={props.credentials?.client.email} onChange={updateInfoClient} onBlur={()=>checkError("email")} required/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">E-mail</span>
                    </label>
                </form>
                 <div className="errorsText">{errors.ePhone}</div>
                <form className="form">
                    <input type="text" name="phone" placeholder={props.credentials?.client.phone} onChange={updateInfoClient} onBlur={()=>checkError("phone")}required />
                    <label className="lbl-nombre">
                      <span className="text-nomb">Phone</span>
                    </label>
                </form>
               
                <div className="errorsText">{errors.eCity}</div>
                <form className="form">
                    <input type="text" name="city" placeholder={props.credentials?.client.city} onChange={updateInfoClient} onBlur={()=>checkError("city")}required/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">City</span>
                    </label>
                </form>
                <div className="errorsText">{errors.eCp}</div>
                <form className="form">
                    <input type="text" name="cp" placeholder={props.credentials?.client.cp} onChange={updateInfoClient} onBlur={()=>checkError("cp")} required/>
                    <label className="lbl-nombre">
                      <span className="text-nomb">Postal Code</span>
                    </label>
                </form>
                
                <div className="updateButton" onClick={() => updateUser()}>UPDATE</div>
    
            </div>
    
           </div>
       )
    } else {

        return (
            <div className="spinnerContainer">
              <div className="spinner">
                 <img  src={spinner} alt="spinner" width="60" />
              </div>
        </div>)
    }
}

export default connect((state) => ({

    credentials:state.credentials
  
    }))(ClientUpdate);
