import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import imgUser from '../../img/user.png';
import "./DentistProfile.css";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";
import axios from "axios";
import { DATES_DENTIST, SCHEDULE_CAL } from "../../redux/types";
import spinner from "../../img/spinner2.gif";
import Calendar from "../../components/Calendar/Calendar";

const DentistProfile = (props) => {
  let history = useHistory();

  //hooks
  const [dentistData, setDentistData] = useState({
    diasMes: props.calendar?.diasMes,
    data: [],
    schedule: [],
    actualDate: [],
    dateDay: "",
    day: "",
    month: "",
    year: "",
    counter3: [],
    semana: [
      "Monday ",
      "Tuesday ",
      "Wednesday ",
      "Thursday ",
      "Friday ",
      "Saturday ",
      "Sunday ",
    ],
    token: props.credentials?.token,
    dentist: props.credentials?.dentist,
    arrayToDraw: [],
  });

  //Handler
  const updateDentistData = (e) => {
    setDentistData({ ...dentistData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    searchAppointments();
  }, []);

  useEffect(() => {
    // drawAppointments();
    // searchAppointments();
  });

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
  };
  const searchAppointments = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.dentist;

      let body = {
        // date: Date.parse(dentistSchedule.date), //FALTA QUE FUNCIONE COGER EL DATE POR CALENDARIO
        dentist: user._id,
      };

      let res = await axios.post(
        "https://backclinic1.herokuapp.com/appointment/scheduleDentist",
        body,
        { headers: { authorization: "Bearer " + token } }
      );
      // props.dispatch({type: SCHEDULE_CAL, payload: res?.data})
      console.log(dentistData.diasMes);
      setDentistData({
        ...dentistData,
        data: res?.data,
        schedule: props.schedule,
        diasMes: props.calendar?.diasMes,
        day: props.calendar?.day,
        month: props.calendar?.month,
        year: props.calendar?.year,
      });
    } catch (error) {
      console.log(error);
    }
  };

  let arrayApp2 = [];
  let counter = [];
  let dataArray = dentistData?.data;
  let arrayToDraw = props.calendar?.diasMes;
  let newDate;
  let appDay, appMonth, appYear;
  let h = 0;

  // dentistData.data.map((valor)=>{
  //     arrayApp.push(new Date(valor.date).getDate())
  // })

  for (let i = 0; i < dataArray.length; i++) {
    newDate = new Date(dataArray[i].date);
    appDay = newDate.getDate();
    appMonth = newDate.getMonth() + 1;
    appYear = newDate.getFullYear();
    h = 0;
    do {
      if (
        arrayToDraw[h] === appDay &&
        props.calendar?.month === appMonth &&
        props.calendar?.year === appYear
      ) {
        arrayApp2[h] = arrayToDraw[h] + "*";
      } else if (!arrayApp2[h]) {
        arrayApp2[h] = arrayToDraw[h];
      }
      h++;
    } while (h < arrayToDraw.length);
  }

  const drawAppointments = (dateDay) => {
    // setDentistData({...dentistData, diasMes: props.calendar?.diasMes, actualDate: props.calendar?.actualDate})
    dateDay = parseInt(dateDay.slice(0, -1));
    counter = [];

    // console.log(dateDay)
    for (let i = 0; i < dentistData.data.length; i++) {
      newDate = new Date(dentistData.data[i].date);
      appDay = newDate.getDate();
      appMonth = newDate.getMonth() + 1;
      appYear = newDate.getFullYear();

      if (
        dateDay === appDay &&
        props.calendar?.month === appMonth &&
        props.calendar?.year === appYear
      ) {
        counter.push(
          <div className="dateApp">
            <p>{dataArray[i].clientName}</p>
            <p>{dataArray[i].clinicName}</p>
            <p>{dataArray[i].dentistName}</p>
            <p>{dataArray[i].city}</p>
          </div>
        );
        // console.log(appMonth, appDay, dateDay, dentistData.actualDate.monthy)
      }
    }

    const palabra = () => setDentistData({ ...dentistData, counter3: counter });
  };

  if (props.credentials?.token) {
    return (
      <div className="dentistContainer">
        <div className="dentistProfile">
          <div className="dentistDates">
            <div className="dentistLeftSide">
              <h2>MY PROFILE</h2>
              <img
                src={props.credentials?.dentist.image}
                alt="user"
                className="imgDent"
              />
            </div>
            <div className="dentistRightSide">
              <div>NAME : {props.credentials?.dentist.name} </div>
              <div>EMAIL : {props.credentials?.dentist.email} </div>
              <div>PHONE : {props.credentials?.dentist.phone}</div>
              <div>SPECIALITY : {props.credentials?.dentist.speciality}</div>
              <div>CITY : {props.credentials?.dentist.city}</div>

              <div className="buttons">
                <div
                  className="buttonUpdateD"
                  onClick={() => history.push("/updatedentist")}
                >
                  UPDATE
                </div>
                <div className="buttonLogoutD" onClick={() => logOut()}>
                  LOGOUT
                </div>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="calendar"></div>
            {/* <h1> AQUI VA EL CALENDARIO!!!! </h1> */}
            <div className="drawDentistCalendar">
              {dentistData.semana.map((semana, index) => (
                <div className="dayDentistWeek" key={index}>
                  <p>{semana}</p>
                </div>
              ))}

              {arrayApp2.map((diasMes, index) => (
                <div className="dayDentistBox" id={index} key={index}>
                  {typeof diasMes !== "number" && diasMes !== "" ? (
                    <div>
                      <p>{diasMes}</p>
                      <div className="gridDate">
                        {/* <p>{diasMes.clientName}</p>
                                            <p>{diasMes.clinicName}</p>
                                            <p>{diasMes.dentistName}</p>
                                            <p>{diasMes.city}</p> */}
                        {/* {drawAppointments(diasMes)} */}
                        {drawAppointments(diasMes)}
                        {counter.map((valor5) => (
                          <div>{valor5}</div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>{diasMes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div clasasName="drawComponent">
            <Calendar />
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
        <div className="spinner">
          <img src={spinner} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  calendar: state.calendar,
  dentistSchedule: state.dentistSchedule,
}))(DentistProfile);
