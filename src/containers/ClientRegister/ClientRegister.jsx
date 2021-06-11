
import React, {useState} from 'react';
import './ClientRegister.css';

const Register = () => {

    // Hook
    const [datosUser,setDatosUser] = useState(
        {
        name:'',
        email:'',
        password:'',
        phone:''
    });

    const [errors, setErrors] = useState({
        eName: '',
        eEmail: ''

    });

    // Handler
    const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value})
    }
    // const applyRegister = () => {
    //     e.preventDefault();

    //     let res = await axios.post('http://localhost:3006/login/Client', body);
    // }

    const checkError = (arg) => {
        switch (arg){
            case 'name':
                console.log("aaaaaaaaaaaaaaaa");
                if(datosUser.name.length < 4){
                    console.log("aaaaaaaaaaaaa 22222");
                    setErrors({...errors, eName: 'El nombre debe de tener 4 caracteres'});
                }else{
                    setErrors({...errors, eName: ''});
                }
            break;

            case 'email':
                if (datosUser.email.length < 4){
                    setErrors({...errors, eEmail: 'El email debe de tener 4 caracteres'});
                }else{
                    setErrors({...errors, eEmail: ''});
                }
                
            break;
        }
    }
     const errorStyle = (arg) =>{
        
        let errorDefault = "name";
        let errorWarning = "red";

        if (errors.eName!== ''){
            return errorWarning;
        }

        return errorDefault;
     }
    return (

        <div className="formulario">
            <div>
            <pre>{JSON.stringify(datosUser, null,2)}</pre>
            
            <input className={errorStyle("name")} name="name" type="text" onChange={updateFormulario} onBlur={()=>checkError("name")} placeholder="name"></input><br></br>
            <div>{errors.eName}</div>
            <input className="name" name="email" type="text" onChange={updateFormulario} onBlur={()=>checkError("email")} placeholder="email"></input><br></br>
            <div>{errors.eEmail}</div>
            <input className="name" name="phone" type="text" onChange={updateFormulario} onBlur={()=>checkError("phone")} placeholder="phone number"></input><br></br>
            {/* <div>{errors.ePhone}</div> */}
            <input className="name" name="password" type="password" onChange={updateFormulario} onBlur={()=>checkError("password")} placeholder="password"></input><br></br>
            {/* <div>{errors.eDate}</div> */}
            <input className="name" name="dateofbirth" type="date" onChange={updateFormulario} onBlur={()=>checkError("dateofbirth")} placeholder="dateofbirth"></input><br></br>
            <input className="name" name="city" type="text" onChange={updateFormulario} onBlur={()=>checkError("city")} placeholder="city"></input><br></br>
            <input className="name" name="cp" type="text" onChange={updateFormulario} onBlur={()=>checkError("cp")} placeholder="postal code"></input><br></br>


            {/* <div className="registerButton" onClick={()=>applyRegister()}>Enviar</div> */}
            </div>
        </div>
    )
}

export default Register;