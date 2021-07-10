import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/types";
import "./Login.css";

const Login = (props) => {
  let history = useHistory();

  // Hooks
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [msgError, setMensajeError] = useState({
    eEmail: "",
    ePassword: "",
    eValidate: "",
  });
  const [statusRole, setStatusRole] = useState({ roleStatus: "" });

  // Esto es un Handler
  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    //Este useEffect corresponde a una vez
    //el componente se HA montado. Sólo se ejecuta una vez.
    // templateLogin();
  }, []);

  useEffect(() => {
    //Este useEffect sin el array vacio como segundo argumento,
    //corresponde al estado de cada actualización del componente. Se ejecutará
    //tantas veces como se cambie el estado del componente
  });

  const checkError = async (arg) => {
    switch (arg) {
      case "email":
        if (credentials.email.length < 1) {
          setMensajeError({ ...msgError, eEmail: "Please enter your email" });
        } else {
          setMensajeError({ ...msgError, eEmail: "" });
        }

        let body = {
          email: credentials.email,
        };

        let role = await axios.post(
          "https://backclinic1.herokuapp.com/clients/email",
          body
        );

        if (role.data !== null) {
          setStatusRole({ ...statusRole, roleStatus: "client" });
        }

        if (role.data == null) {
          role = await axios.post(
            "https://backclinic1.herokuapp.com/dentists/email",
            body
          );
          if (role.data !== null) {
            setStatusRole({ ...statusRole, roleStatus: "dentist" });
          }
        }
        break;

      case "password":
        if (credentials.password.length < 1) {
          setMensajeError({
            ...msgError,
            ePassword: "Please enter your password",
          });
        } else {
          setMensajeError({ ...msgError, ePassword: "" });
        }
        break;

      default:
        break;
    }
  };

  const logeame = async () => {
    // Primero, testeamos los datos

    // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.state.email) ) {

    try {
      // A continuamos, generamos el body de datos
      let body = {
        email: credentials.email,
        password: credentials.password,
      };
      // Envío por axios

      let res = await axios.post(
        `https://backclinic1.herokuapp.com/login/${statusRole.roleStatus}`,
        body
      );
      // let token = res.data.token;

      // A falta de redux vamos a usar LocalStorage
      // localStorage.setItem("token", token);
      // localStorage.setItem("client", JSON.stringify(res.data.client));
      // localStorage.setItem("dentist", JSON.stringify(res.data.dentist));

      //
      props.dispatch({ type: LOGIN, payload: res.data });

      // redirección
      setTimeout(() => {
        history.push(`/${statusRole.roleStatus}profile`);
      }, 750);
    } catch {
      setMensajeError({ ...msgError, eValidate: "Wrong email or password" });
    }
  };

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
              onBlur={() => checkError("email")}
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
              onBlur={() => checkError("password")}
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
};

export default connect()(Login);
