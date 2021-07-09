import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllClients.css";

const AllClients = () => {
  const [clients, setClients] = useState({});

  useEffect(() => {
    findAllClients();
  }, []);

  useEffect(() => {});

  const findAllClients = async () => {
    try {
      let token = localStorage.getItem("token");

      let res = await axios.get("https://backclinic1.herokuapp.com/clients", {
        headers: { authorization: "Bearer " + token },
      });

      setClients(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertDate = (date) => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date2 = day + "/" + month + "/" + year;
    return date2;
  };

  if (clients[0]?._id) {
    return (
      <div className="allClients">
        <div className="clientContent">
          {clients.map((clients, index) => (
            <div key={index} className="clientCards">
              <p className="infoClients"> CLIENT : {clients.name} </p>
              <p className="infoClients">
                <a class="mailClient" href="tel:+3495323123">
                  {" "}
                  PHONE : {clients.phone}{" "}
                </a>
              </p>
              <p className="infoClients">
                <a class="mailClient" href="mailto:info@trident.com">
                  {" "}
                  EMAIL : {clients.email}{" "}
                </a>
              </p>
              <p className="infoClients"> CITY : {clients.city} </p>
              <p className="infoClients"> CP : {clients.cp} </p>
              <p className="infoClients">
                {" "}
                BIRTHDAY : {convertDate(clients.dateOfBirth)}{" "}
              </p>
              <img src={clients.image} alt="client" className="imgClient" />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cargando Datos...</h1>
      </div>
    );
  }
};

export default AllClients;
