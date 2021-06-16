import React, {useState, useEffect} from 'react';
import './Dentist.css';
import axios from 'axios';
import { connect } from 'react-redux';


const Dentist = (props) => {

    //hooks
    const [dentists, setDentists] = useState({});
    const [city, setCity] = useState({city: ""});

    useEffect( () => {


    }, [])

    useEffect( () => {
        searchDentists();
    })

    const updateCredentials = (e) => {
        setCity({ ...city, [e.target.name]: e.target.value });
    };

    const searchDentists = async () => {

        try{

            let token = props.credentials?.token;
            let user = props.credentials?.client;

            let body = {
                city: city.city, //AQUI FALTA INTROUCIR POR PANTALLA
                client: user._id
            }    

            let res = await axios.post('http://localhost:3006/dentists/info',body, {headers:{'authorization':'Bearer ' + token}});

            setDentists(res.data)

        } catch (error){

            console.log(error)

        }
    }

    if(dentists[0]?.name){

        // si existe, mapeamos los resultados

        return(

            <div className="dentistsAllbyUser"> 

                <h1>DENTISITS</h1>
                <p>Choose a city :</p>
                <select type="name" name="city" title="city"  onChange={updateCredentials}>
                     <option value="">--Please Choose a City-</option>
                     <option>Valencia</option>
                     <option>Castellon</option>
                     <option>Barcelona</option>
                </select>
                <div className="dentistsContainer">

                    {dentists.map((dentist, index) => (
                        
                        <div key={index} className="dentistCard">
    
                            <img src={dentist.image} alt="img" width="300" height="200"/>
                            <p> NAME : {dentist.name} </p>
                            <p> CITY : {dentist.city} </p>
                            <p> SPEACIALITY : {dentist.speciality} </p>
                        
                        </div>
    
                    ))}
                </div>

            </div>
        )

    }else {

        return(
            <div className="dentistsAllbyUser">

                <h1>DENTISITS</h1>
                <select type="name" name="city" title="city"  onChange={updateCredentials}>
                     <option value="">--Please Choose a City-</option>
                     <option>Valencia</option>
                     <option>Castellon</option>
                     <option>Barcelona</option>
                </select>
                <div className="dentistsContainer">
            </div>
            </div>
        )

    }

}

export default connect((state) => ({

    credentials:state.credentials

    }))(Dentist);