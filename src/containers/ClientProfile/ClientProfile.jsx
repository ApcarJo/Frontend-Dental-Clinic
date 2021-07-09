import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ClientProfile.css";
import axios from "axios";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";
// import imgUser from '../../img/user.png'
import spinner from "../../img/spinner2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ClientProfile = (props) => {
  let history = useHistory();

  //hooks
  const [userData, setUserData] = useState({
    token: props.credentials?.token,
    client: props.credentials?.client,
  });

  const [userApp, setClientApp] = useState({
    dateApp: [],
    draw: [],
    i: 0,
  });

  // Handler
  const updateClientData = (e) => {
    setClientApp({ ...userApp, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    searchAppointments();
  }, []);

  useEffect(() => {});

  const searchAppointments = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.client;

      let body = {
        client: user._id,
      };

      let res = await axios.post(
        "https://backclinic1.herokuapp.com/appointment/client",
        body,
        {
          headers: { authorization: "Bearer " + token },
        }
      );

      setClientApp({ ...userApp, dateApp: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
  };

  const convertDate = (date) => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date2 = day + "/" + month + "/" + year;
    return date2;
  };

  let birth = convertDate(userData.client.dateOfBirth);
  let i = userApp.dateApp.length - 1;

  const goRight = () => {
    let i = userApp.i;

    if (i < userApp.dateApp.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setClientApp({ ...userApp, i: i });
  };

  const goLeft = () => {
    let i = userApp.i;

    if (i > 0) {
      i--;
    } else {
      i = userApp.dateApp.length - 1;
    }
    setClientApp({ ...userApp, i: i });
  };

  let data1 = userApp.dateApp;
  let arrayData1 = [];

  let result = [];
  for (let j = 0; j < data1.length; j++) {
    if (userApp.i === j) {
      result.push(
        <div className="clientAppointmentAll">
          <h1>A P P O I N T M E N T S</h1>
          <div className="clientAppointmentProfile">
            <div className="buttonGo" onClick={() => goLeft()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className="appointmentCardProfile">
              <p>CLINIC : {data1[j].clinicName}</p>
              <p>PHONE : {data1[j].clinicPhone}</p>
              <p>EMAIL : {data1[j].clinicEmail}</p>
              <p>DENTIST : {data1[j].dentistName}</p>
              <p>DATE : {convertDate(data1[j].date)}</p>
            </div>

            <div className="buttonGo" onClick={() => goRight()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      );
    }
  }

  if (props.credentials?.token) {
    return (
      <div className="baseProfile">
        <div className="clientProfile">
          <div className="clientDates1">
            <div className="clientLeftSide">
              <h2>MY PROFILE</h2>
              <img
                src={props.credentials?.client.image}
                alt="user"
                className="imgUser"
              />
            </div>
            <div className="clientRightSide">
              <p>NAME : {props.credentials?.client.name} </p>
              <p>EMAIL : {props.credentials?.client.email} </p>
              <p>PHONE : {props.credentials?.client.phone}</p>
              <p>BIRTHDAY : {birth}</p>
              <p>CITY : {props.credentials?.client.city}</p>
              <div className="buttons">
                <div
                  className="buttonUpdateC"
                  onClick={() => history.push("/updateclient")}
                >
                  UPDATE
                </div>
                <div className="buttonLogoutC" onClick={() => logOut()}>
                  LOGOUT
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <div className="buttonGo" onClick={() => goLeft()}>
              -
            </div> */}
            {/* // {userApp.dateApp.map((appointment, index) => ( */}

            {/* <div className="appointmentCardProfile">
            <p> CLINIC : {clientApp.dateApp[i].clinicName} </p>

              <p> PHONE : {clientApp.dateApp[i].clinicPhone} </p>

              <p> EMAIL : {clientApp.dateApp[i].clinicEmail} </p>

              <p> DENTIST : {clientApp.dateApp[i].dentistName} </p>

              <p> DATE : {clientApp.dateApp[i].date} </p>
            </div> */}

            {/* // ))} */}
            {result}

            {/* <div className="buttonGo" onClick={() => goRight()}>
              +
            </div> */}
          </div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      history.push("/");
    }, 1000);

    return (
      <div className="spinnerContainer">
        <div className="spinnerC">
          <img src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(ClientProfile);
