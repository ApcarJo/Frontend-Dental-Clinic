import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientRegister.css";
import { connect } from "react-redux";
import Calendar from "../../components/Calendar/Calendar";

const Register = (props) => {
  // Hook
  const [datosUser, setDatosUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    dateOfBirth: "",
    city: "",
    cp: "",
  });

  const [errors, setErrors] = useState({
    eName: "",
    eEmail: "",
    ePhone: "",
    ePassword: "",
    ePassword2: "",
    eDateofbirth: "",
    eCity: "",
    eCp: "",
  });

  // Handler
  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

  const applyRegister = async () => {
    // e.preventDefault();

    let body = {
      name: datosUser.name,
      email: datosUser.email,
      phone: datosUser.phone,
      password: datosUser.password,
      dateOfBirth: props.calendar?.date,
      city: datosUser.city,
      cp: datosUser.cp,
    };
    console.log(body);

    let res = await axios.post(
      "https://backclinic1.herokuapp.com/clients",
      body
    );
    console.log(res);
  };

  const checkError = (arg) => {
    switch (arg) {
      case "name":
        if (
          datosUser.name.length < 2 ||
          !/^[a-z ,.'-]+$/i.test(datosUser.name) ||
          datosUser.name.length > 20
        ) {
          setErrors({ ...errors, eName: "Introduce un nombre válido" });
        } else {
          setErrors({ ...errors, eName: "" });
        }
        break;

      case "email":
        if (
          !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            datosUser.email
          )
        ) {
          setErrors({ ...errors, eEmail: "Introduce un email válido" });
        } else {
          setErrors({ ...errors, eEmail: "" });
        }

        break;

      case "password":
        if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
            datosUser.password
          )
        ) {
          // if (datosUser.password.length < 8){
          setErrors({
            ...errors,
            ePassword:
              "At least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters",
          });
        } else {
          setErrors({ ...errors, ePassword: "" });
        }
        break;

      case "phone":
        if (
          !/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
            datosUser.phone
          ) ||
          datosUser.phone.length > 16
        ) {
          // if (datosUser.password.length < 8){
          setErrors({ ...errors, ePhone: "Wrong phone number" });
        } else {
          setErrors({ ...errors, ePhone: "" });
        }
        break;

      case "password2":
        if (datosUser.password !== datosUser.password2) {
          setErrors({ ...errors, ePassword2: "Password should be the same" });
        } else {
          setErrors({ ...errors, ePassword2: "" });
        }
        break;

      default:
        break;
    }
  };
  const errorStyle = (arg) => {
    let errorDefault = "name";
    let errorWarning = "red";

    if (errors.eName !== "") {
      return errorWarning;
    }

    return errorDefault;
  };

  return (
    <div className="vistaRegisterClient">
      <div className="leftSide">
        {/* <pre>{JSON.stringify(datosUser, null,2)}</pre> */}
      </div>
      <div className="formulario1">
        <div className="box1">
          <div className="errorsText">{errors.eName}</div>
          <form className="form">
            <input
              className="input"
              name="name"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("name")}
              required
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Name</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{errors.eEmail}</div>
          <form className="form1">
            <input
              className="input1"
              name="email"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("email")}
              required
            />
            <label className="lbl-nombre1">
              <span className="text-nomb1">Email</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.ePhone}</div>
          <form className="form2">
            <input
              className="input2"
              name="phone"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("phone")}
              required
            />
            <label className="lbl-nombre2">
              <span className="text-nomb2">Phone</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.ePassword}</div>
          <form className="form3">
            <input
              className="input3"
              name="password"
              type="password"
              onChange={updateFormulario}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre3">
              <span className="text-nomb3">Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.ePassword2}</div>
          <form className="form4">
            <input
              className="input4"
              name="password2"
              type="password"
              onChange={updateFormulario}
              onBlur={() => checkError("password2")}
              required
            />
            <label className="lbl-nombre4">
              <span className="text-nomb4">Repeat Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.eCity}</div>
          <form className="form5">
            <input
              className="input5"
              name="city"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("city")}
              required
            />
            <label className="lbl-nombre5">
              <span className="text-nomb5">City</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.eCp}</div>
          <form className="form6">
            <input
              className="input6"
              name="cp"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("cp")}
              required
            />
            <label className="lbl-nombre6">
              <span className="text-nomb6">Postal Code</span>
            </label>
          </form>
        </div>

        <Calendar />
        {/* <input className="name" name="dateOfBirth" type="date" onChange=        {updateFormulario} onBlur={()=>checkError("dateOfBirth")}      placeholder="dateOfBirth"></  input><br></br>
                    <div>{errors.eDateofbirth}</div> */}
        <div className="registerButton" onClick={() => applyRegister()}>
          Register
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  calendar: state.calendar,
}))(Register);
