import React from 'react';
import {useHistory} from 'react-router-dom';
import './Button.css';


const Button = (props) => {

    let history = useHistory();

    const go = () => {
        history.push(props.path)
    }

    return(
  
        <div className="button" onClick={() => go()}>
            {props.destination}
        </div>
    )

}

export default Button;