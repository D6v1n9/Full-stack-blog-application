import React from "react";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="app">
      <div className="container">
        <div className="auth">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
            <p>This is an error !</p>
            <span>
              Don't you have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
