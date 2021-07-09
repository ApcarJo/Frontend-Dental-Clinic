import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateAppointments.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { UPDATE_APPOINTMENT } from "../../redux/types";
import spinner from "../../img/spinner2.gif";

const UpdateAppointments = (props) => {
  let history = useHistory();

  //hooks
  const [updateInfo, setUpdateInfo] = useState({
    clinic: props.appointment?.clinicId,
    date: props.appointment?.date,
  });

  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    allClinics();
  }, []);

  useEffect(() => {});

  const updateInfoAppointment = (e) => {
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
  };

  const UpdateInfo = async () => {
    let token = props.credentials?.token;
    let user = props.credentials?.client;

    let body = {
      client: user._id,
      id: props.appointment?.id,
      clinic: updateInfo.clinic,
      date: updateInfo.date,
    };
    console.log("body", body);

    let res = await axios.put(
      "https://backclinic1.herokuapp.com/appointment",
      body,
      {
        headers: { authorization: "Bearer " + token },
      }
    );

    console.log(res.data);
    props.dispatch({ type: UPDATE_APPOINTMENT, payload: res.data });

    setTimeout(() => {
      history.push("/clientappointments");
    }, 550);
  };

  const allClinics = async () => {
    let result = await axios.get("https://backclinic1.herokuapp.com/clinics");

    setClinics(result.data);
  };

  if (props.credentials?.token) {
    return (
      <div className="updateAppointmentContainer">
        <div className="updateAppContainer">
          <div className="inputClinic inputClient">
            <select
              type="name"
              name="clinic"
              title="clinic"
              onChange={updateInfoAppointment}
            >
              <option value="">{props.appointment?.clinicName}</option>
              {clinics.map((clinic) => (
                <option value={clinic._id}>{clinic.name}</option>
              ))}
            </select>
          </div>

          <form className="form">
            <input
              type="date"
              name="date"
              placeholder={props.appointment?.date}
              onChange={updateInfoAppointment}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Date</span>
            </label>
          </form>
          <div className="updateButton" onClick={() => UpdateInfo()}>
            UPDATE
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <img src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  appointment: state.appointment,
}))(UpdateAppointments);
