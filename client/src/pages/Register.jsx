import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    /* Since there will be only one event at a time, you will need to modify that specific event. */
    /* The prev is an object, so spread it and update only the part related to the event that occurred. */
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs);
      const res = await axios.post("/api/auth/register", inputs);
      //If user gets created than navigate it to login 
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs)

  return (
    <div className="app">
      <div className="container">
        <div className="auth">
          <h1>Register</h1>
          <form>
            <input
              required
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>
              Do you already have an account? <Link to="/login">login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
