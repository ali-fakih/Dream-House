import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import './contactus.css';

function ContactUS() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if all required fields are filled
      if (!isChecked || !formData.name || !formData.email || !formData.message) {
        alert('Please fill in all required fields and agree to terms.');
        return;
      }

      // Send email using the API
      await axios.post('http://localhost:3000/users/send-email', formData);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsChecked(false);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsChecked(false);
  };

  return (
    <div className='contact-page'>
      <div className="container">
        <div className="row">
          {/* form */}
          <div className="col-lg-6">
            <form className="my-form" onSubmit={handleSubmit} onReset={handleReset}>
              <h1>Get in touch!</h1>
              <ul>
                <li>
                  <div className="grid grid-4">
                    <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                </li>
                <li>
                  <div className="grid grid-4">
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </li>
                <li>
                  <textarea placeholder="Message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
                </li>
                <li>
                  <input type="checkbox" id="terms" onChange={handleCheckboxChange} />
                  <label htmlFor="terms">I have read and agreed with <Link to="#">the terms and conditions.</Link></label>
                </li>
                <li>
                  <div className="grid grid-3">
                    <div className="required-msg">REQUIRED FIELDS</div>
                    <button className="btn-grid" type="submit" disabled={!isChecked}>
                      <span className="back">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                      </span>
                      <span className="front">SUBMIT</span>
                    </button>
                    <button className="btn-grid" type="reset" disabled={!isChecked}>
                      <span className="back">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                      </span>
                      <span className="front">RESET</span>
                    </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          {/* contact information and map */}
          <div className="col-lg-6">

            <div className="row">

              {/* Contact Card 1 */}
              <div className="contact-card mb-4 col-md-6 col-lg-6 col-xl-6">
                <div className="d-flex">

                  <div className="contact-info ml-4">
                    <h6 className="contact-pos mb-2 font-weight-bold">Technical support</h6>
                    <p className="contact-email">dreamhouse@gmail.com</p>
                    <p className="contact-phone">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="contact-card mb-4 col-md-6 col-lg-6 col-xl-6">
                <div className="d-flex">

                  <div className="contact-info ml-4">
                    <h6 className="contact-pos mb-2 font-weight-bold">Sales questions</h6>
                    <p className="contact-email">salesdreamhouse@gmail.com</p>
                    <p className="contact-phone">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Contact Card 3 */}
              <div className="contact-card mb-4 col-md-6 col-lg-6 col-xl-6">
                <div className="d-flex">

                  <div className="contact-info ml-4">
                    <h6 className="contact-pos mb-2 font-weight-bold">Press</h6>
                    <p className="contact-email">pressdreamHouse@gmail.com</p>
                    <p className="contact-phone">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Contact Card 4 */}
              <div className="contact-card mb-4 col-md-6 col-lg-6 col-xl-6">
                <div className="d-flex">
                  <div className="contact-info ml-4">
                    <h6 className="contact-pos mb-2 font-weight-bold">Partnerships</h6>
                    <p className="contact-email">partnersdreamHouse@gmail.com</p>
                    <p className="contact-phone">+1 234-567-89</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="map">
              <div className="map-pic">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.8937058749625!2d35.48592567568773!3d33.3738409734201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzI1LjgiTiAzNcKwMjknMTguNiJF!5e0!3m2!1sen!2slb!4v1700036253916!5m2!1sen!2slb"
                  width="640"
                  style={{ borderBottom: "20px", height: "300px" }}
                  title="Google Maps" allowFullScreen>
                </iframe>
                <div className="map-hover">
                  <i className="fa fa-map-marker"></i>
                  <div className="map-info map-hover-inner text-center justify-center">
                    <h2 className='map-street'>Riad Al Soloh Stadium</h2>
                    <h5 className='map-city'>Nabatieh City, Lebanon</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
