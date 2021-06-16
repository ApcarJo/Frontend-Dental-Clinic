import React from 'react';
import './Contact.css'


const Contact = () => {

    return(

        <div className="contact">

            <h1>How can we help?</h1>

        <div className="contactContainter"> 

            <div className="form">

               <input className="inputForm" id="fname" name="fname" required="required" placeholder="Name"/>
               <input className="inputForm" id="email" name="email" required="required" placeholder="Email" />
               <input className="inputForm" id="phone" name="phone" required="required" placeholder="Phone"/>
               <textarea className="text" name="message" cols="50" rows="10" placeholder="Type your text here"></textarea>
               <button className="formButton" onclick="Enviar()" type="button" >Send</button>

            </div>

            <div className="contactInfo">
                <h1>Client Support</h1>
                <h3>Call us</h3>
                <a class="tlf" href="tel:+3495323123">95323123</a>
                <h3>Office Hours</h3>
                <p>Monday to Friday: 7am to 5:15 pm.</p>
                <h3>Write to us</h3>
                <a class="mail" href = "mailto:info@trident.com">info@trident.com</a>

            </div>    
            
      </div>
      </div>
    )

}

export default Contact;