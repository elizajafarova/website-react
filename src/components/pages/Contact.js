import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <div id="contact_page">
      <div className="contact-container">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Fill up the form and then click send</p>
          <div className="icon-text">
            <i className="fa fa-phone"></i>
            <span>+994505956556</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-envelope-open-text"></i>
            <span>pearl_capital@bk.ru</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-map-marker"></i>
            <span>Nizami 111, Baku/Azerbaijan</span>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input className="input_cont" type="text" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input className="input_cont" type="text" required />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>E-Mail</label>
              <input className="input_cont" type="email" required />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input className="input_cont" type="tel" required />
            </div>
          </div>

          <div className="col">
            <div className="form-group solo">
              <label>What Type Of Website Do You Need? </label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input
                    type="radio"
                    id="radioecommerce"
                    name="type"
                    value="ecommerce"
                  />{" "}
                  <label htmlFor="radioecommerce">E-commerce</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    id="radiopersonal"
                    name="type"
                    value="personal"
                  />{" "}
                  <label htmlFor="radiopersonal">Personal</label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    name="type"
                    id="radiolandingpage"
                    value="landingpage"
                  />{" "}
                  <label htmlFor="radiolandingpage">Landing Page</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
