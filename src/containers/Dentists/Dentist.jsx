import React, { useState, useEffect } from "react";
import "./Dentist.css";
import axios from "axios";
import { connect } from "react-redux";

const Dentist = (props) => {
  //hooks
  const [dentists, setDentists] = useState({});
  const [city, setCity] = useState({ city: "" });
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    cities();
  }, []);

  useEffect(() => {
    searchDentists();
  });

  const updateCredentials = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const cities = async () => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjBiYjk5MWJhOGIxZDIyYjFjYjkyYTg4IiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xNlQxMTo0MDozNS40OTJaIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjIzODQzNjM1fQ.3SQqq6rlsau6XEIf6dVe8VJIR9hXyeSjj8ouy3jjXCE";

    let result = await axios.get("https://backclinic1.herokuapp.com/dentists", {
      headers: { authorization: "Bearer " + token },
    });
    let arrayCity = [];

    for (let i = 0; i < result.data.length; i++) {
      arrayCity.push(result.data[i].city);
    }

    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    let arrayCityUnique = arrayCity.filter(onlyUnique);

    setAllCities(arrayCityUnique);
  };

  const searchDentists = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.client;

      let body = {
        city: city.city,
        client: user._id,
      };

      let res = await axios.post(
        "https://backclinic1.herokuapp.com/dentists/info",
        body,
        { headers: { authorization: "Bearer " + token } }
      );

      setDentists(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (dentists[0]?.name) {
    // si existe, mapeamos los resultados

    return (
      <div className="dentistsAllbyUser">
        <h1>DENTISTS</h1>
        <div className="choose">
          {/* <select type="name" name="city" title="city"  onChange={updateCredentials} defaultValue="Barcelona">
                         {allCities.map((cities, index) => (
                            <option key={index}>{cities}</option>
                         ))}
                         
                    </select> */}
          <form className="form7">
            <select
              className="input7"
              type="name"
              name="city"
              title="city"
              onChange={updateCredentials}
              defaultValue="Valencia"
              required
            >
              {allCities?.map((cities, index) => (
                <option key={index}>{cities}</option>
              ))}
            </select>
            <label className="lbl-nombre7">
              <span className="text-nomb7">Month</span>
            </label>
          </form>
        </div>
        <div className="dentistsContainer">
          {dentists.map((dentist, index) => (
            <div key={index} className="dentistCard">
              <img src={dentist.image} alt="img" width="300" height="200" />
              <p> NAME : {dentist.name} </p>
              <p> CITY : {dentist.city} </p>
              <p> SPEACIALITY : {dentist.speciality} </p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dentistsAllbyUser">
        <h1>DENTISTS</h1>
        <div className="choose">
          <p>Choose a city :</p>
          <select
            type="name"
            name="city"
            title="city"
            onChange={updateCredentials}
          >
            <option value="">--Please Choose a City-</option>
            {allCities.map((cities, index) => (
              <option key={index}>{cities}</option>
            ))}
          </select>
        </div>
        <div className="dentistsContainer"></div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(Dentist);
