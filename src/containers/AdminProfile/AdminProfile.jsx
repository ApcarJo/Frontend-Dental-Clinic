import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { LOGIN, LOGOUT } from "../../redux/types";
import "../Login/Login.css";
import "./AdminProfile.css";

const AdminProfile = (props) => {
  let history = useHistory();

  // Hooks
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [msgError, setMensajeError] = useState({
    eEmail: "",
    ePassword: "",
    eValidate: "",
  });
  const [statusRole, setStatusRole] = useState({ roleStatus: "" });
  const [admin, setAdmin] = useState([]);

  // Esto es un Handler
  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    logAdmin();
  }, []);

  useEffect(() => {});

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
  };

  const logAdmin = async () => {
    try {
      let res = await axios.get("https://backclinic1.herokuapp.com/admin", {
        headers: { authorization: "Bearer " + props.credentials?.token },
      });

      console.log("here", res.data);
      setAdmin(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const checkError = async (arg) => {

  //     switch (arg){

  //         case 'email':

  //             if (credentials.email.length < 1){
  //                 setMensajeError({...msgError, eEmail: "Please enter your email"});
  //             }else {
  //                 setMensajeError({...msgError, eEmail: ""});
  //             }

  //             let body = {
  //                 email: credentials.email
  //             }

  //             let role = await axios.post('https://backclinic1.herokuapp.com/admin/email', body);

  //             if (role.data !== null){
  //                 setStatusRole({...statusRole, roleStatus: 'admin'});
  //             }

  //         break;

  //         case 'password':

  //             if (credentials.password.length < 1){
  //                 setMensajeError({...msgError, ePassword: "Please enter your password"});
  //             }else {
  //                 setMensajeError({...msgError, ePassword: ""});
  //             }
  //         break;

  //         default:
  //             break;
  //     }
  // }

  const logeame = async () => {
    try {
      // A continuamos, generamos el body de datos
      let body = {
        email: credentials.email,
        password: credentials.password,
      };
      // Envío por axios

      let res = await axios.post(
        `https://backclinic1.herokuapp.com/login/admin`,
        body
      );

      //
      props.dispatch({ type: LOGIN, payload: res.data });

      // redirección
      // setTimeout(()=>{
      //     history.push(`/adminprofile`);
      // },750);
    } catch {
      setMensajeError({ ...msgError, eValidate: "Wrong email or password" });
    }
  };

  if (props.credentials?.admin._id) {
    return (
      <div className="admin">
        <AdminNavbar />

        <h2>WELCOME BACK!</h2>

        <div className="adminContent">
          {admin.map((admin, index) => (
            <div key={index} className="adminCard">
              <p className="textparra"> ADMIN{admin.name} </p>
              <p className="textparra"> PHONE{admin.phone} </p>
              <p className="textparra"> EMAIL{admin.email} </p>
              <div className="buttons">
                <div className="buttonUpdate">UPDATE</div>
                <div className="buttonLogout" onClick={() => logOut()}>
                  LOGOUT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="vistaLogin">
        {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
        <div className="loginCard">
          <h2>L O G I N</h2>
          <br />

          <div className="box1">
            <div className="errorsText">{msgError.eEmail}</div>
            <form className="form1">
              <input
                className="input1"
                name="email"
                type="text"
                onChange={updateCredentials}
                required
              />
              <label className="lbl-nombre1">
                <span className="text-nomb1">Email</span>
              </label>
            </form>
          </div>

          <div className="box1">
            <div className="errorsText">{msgError.ePassword}</div>
            <form className="form3">
              <input
                className="input3"
                name="password"
                type="password"
                onChange={updateCredentials}
                required
              />
              <label className="lbl-nombre3">
                <span className="text-nomb3">Password</span>
              </label>
            </form>
          </div>

          <div className="sendButton" onClick={() => logeame()}>
            Login
          </div>
          <div>{msgError.eValidate}</div>
          {/* <div className="receiveInfo" onClick={()=>receive()}>ReceiveInfo</div> */}
          <p>First time here?</p>
          <div className="sendButton" onClick={() => history.push("/register")}>
            Sign up!
          </div>
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(AdminProfile);

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
// import './AdminProfile.css';
// import spinner from '../../img/spinner2.gif';
// RDX
// import { connect } from 'react-redux';
// import { LOGOUT, LOGIN } from '../../redux/types';

// const AdminProfile = (props) => {

//     let history = useHistory();

//     Hooks
//     const [credentials,setCredentials] = useState({
//         email:'',
//         password:'',
//         token: props.credentials?.token,
//         admin: props.credentials?.admin
//     });

//     const [msgError, setMensajeError] = useState({eEmail:'',ePassword: '',eValidate:''});
//     const [statusRole, setStatusRole] = useState({roleStatus: ''});

//     Esto es un Handler
//     const updateCredentials = (e) => {
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }

//     useEffect(()=>{
//     },[]);

//     useEffect(()=>{
//     });

//     const logeame = async () => {

//         try{
//             let body = {
//                 email : credentials.email,
//                 password : credentials.password
//             }
//             let res = await axios.post(`https://backclinic1.herokuapp.com/login/admin`, body);

//             props.dispatch({type:LOGIN, payload: res.data});

//             setTimeout(()=>{
//                 history.push(`/`);
//             },750);

//         }catch{
//             setMensajeError({...msgError, eValidate: 'Wrong email or password'});
//         }

//     }

//     const [admin, setAdmin] = useState({});
//     const logAdmin = async () => {

//         try {
//             let res = await axios.get("https://backclinic1.herokuapp.com/admin",  {headers:{'authorization':'Bearer ' + props.credentials?.token}});

//             console.log('here', res.data);
//             setAdmin(res.data)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const logOut = () => {

//         props.dispatch({type:LOGOUT});

//     }

//    if (props.credentials?.token==''){
//     return (
//         <div className="vistaLogin">
//                 {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
//                 <div className="loginCard">

//                     <h2>L O G I N</h2>
//                     <br />

//                     <div className="box1">
//                         <div className="errorsText">{msgError.eEmail}</div>
//                         <form className="form1">
//                             <input className="input1" name="email" type="text"  onChange={updateCredentials}  required/>
//                             <label className="lbl-nombre1">
//                               <span className="text-nomb1">Email</span>
//                             </label>
//                         </form>
//                     </div>

//                     <div className="box1">
//                         <div className="errorsText">{msgError.ePassword}</div>
//                         <form className="form3">
//                             <input className="input3" name="password"      type="password" onChange={updateCredentials} required/>
//                             <label className="lbl-nombre3">
//                               <span className="text-nomb3">Password</span>
//                             </label>
//                         </form>
//                     </div>

//                     <div className="sendButton" onClick={()=>logeame()}>Login</div>
//                     <div>{msgError.eValidate}</div>
//                     {/* <div className="receiveInfo" onClick={()=>receive()}>ReceiveInfo</div> */}
//                         <p>First time here?</p>
//                         <div className="sendButton" onClick={() => history.push('/register')}>Sign up!</div>

//                 </div>
//         </div>

//         )
//     } else if (props.credentials?.token){

//         return(
//             <div className="admin">

//                 <AdminNavbar />

//                 <h2>WELCOME BACK!</h2>

//                 <div className="adminContent">
//                     {admin.map((admin, index) => (

//                         <div key={index} className="adminCard">

//                             <p className="textparra"> ADMIN : {admin.name} </p>
//                             <p className="textparra"> PHONE : {admin.phone} </p>
//                             <p className="textparra"> EMAIL : {admin.email} </p>

//                             <div className="buttons">
//                                 <div className="buttonUpdate">UPDATE</div>
//                                 <div className="buttonLogout" onClick={() => logOut()}>LOGOUT</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )
//     } else {
//         return (
//             <div className="spinnerContainer">
//               <div className="spinner">
//                  <img  src={spinner} alt="spinner" width="60" />
//               </div>
//             </div>
//         );
//     }
// }

// export default connect((state) => ({

//     credentials:state.credentials

// }))(AdminProfile);
