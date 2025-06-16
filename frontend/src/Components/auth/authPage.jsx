import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import API_URL from '../../config/api';
import "./authPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post(`${API_URL}/authenticate`, { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="body-auth">
      <div className="background">
        <div className="go-back">
          <Link to="/">
            <h4>
              <i className="text-success mr-2">
                <FontAwesomeIcon icon={faArrowLeft} />
              </i>
              Go back
            </h4>
          </Link>
        </div>
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">
            <h3>Welcome to DreamHouse chat service👋</h3>
          </div>

          <div className="form-subtitle m-auto">
            <h6>Set a username to contacts with our Agents</h6>
          </div>

          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button bg-[#0ece35] w-[400px] h-[53px] text-white" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired, // Ensure 'onAuth' prop is a function and is required
};

export default AuthPage;
