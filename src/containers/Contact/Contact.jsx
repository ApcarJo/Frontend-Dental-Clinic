import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>How can we help?</h1>

      <div className="contactContainter">
        <div className="form11">
          <form className="form">
            <input type="text" required />
            <label className="lbl-nombre">
              <span className="text-nomb">Nombre</span>
            </label>
          </form>

          <form className="form1">
            <input className="input1" type="text" required />
            <label className="lbl-nombre1">
              <span className="text-nomb1">Email</span>
            </label>
          </form>

          <form className="form2">
            <input className="input2" type="text" required />
            <label className="lbl-nombre2">
              <span className="text-nomb2">Phone</span>
            </label>
          </form>

          <textarea
            className="text"
            name="message"
            cols="50"
            rows="10"
            placeholder="Type your text here"
          ></textarea>
          <button className="formButton" onclick="Enviar()" type="button">
            Send
          </button>
        </div>

        <div className="contactInfo">
          <h1>Client Support</h1>
          <h3>Call us</h3>
          <a class="tlf" href="tel:+3495323123">
            95323123
          </a>
          <h3>Office Hours</h3>
          <p>Monday to Friday: 7am to 5:15 pm.</p>
          <h3>Write to us</h3>
          <a class="mail" href="mailto:info@trident.com">
            info@trident.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
