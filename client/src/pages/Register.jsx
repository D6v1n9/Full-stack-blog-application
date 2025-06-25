import React from "react";
import {Link} from "react-router-dom"

function Register() {
  return (
    <div className="app">
      <div className="container">
        <div className="auth">
          <h1>Register</h1>
          <form>
            <input required type="text" placeholder="username" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <button>Register</button>
            <p>This is an error !</p>
            <span>
              Do you already  have an account? <Link to="/login">login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
