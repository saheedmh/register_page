import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /**const handleSubmit = (e) => {
    e.preventDefault();
    //Axios.post("http://localhost:3000/auth/signup", 
    Axios.post('/test', {
        name, 
          email,
          password 

        },
      {
        withCredentials:true
      }
      ).then((res) => {
    
          console.log("success", res.data);
          navigate('/Login')
          
        
      })
      .catch((err) => {
        console.log("signUp erro", err.response?.data || err.message);
        //alert("Registration failed. Check the console for details.");
      });
      /**if (res.data.status === "OK") {
          alert("Account created!");
          navigate("/login");
        } else {
          alert("Something went wrong.");
          console.log(res.data);
        }**/
       /**const response = await Axios.post(
     //"http://localhost:3000/auth/signup",
    // "https://onrender.com", // Just .com, no extra /

     { name, email, password },
     { withCredentials:true }
   );
**/
       // 1. Set the base URL ONCE (usually at the top of the file or in App.js)
Axios.defaults.baseURL = "https://mern-auth-1-kio3.onrender.com";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 2. Only use the ROUTE here. Axios will automatically combine it 
    // with your baseURL to create: https://onrender.com
    const response = await Axios.post(
      "/auth/signup", 
      { name, email, password },
      { withCredentials: true } 
    );

    console.log("signup Response:", response.data);

    // 3. Navigate only if the backend returns a success status
    if (response.data.status) {
      navigate('/Login');
    } else {
      alert(response.data.message || "Registration failed");
    }

  } catch (err) {
    console.error("signup failed", err);
  }
};


 return (
  <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 w-100">
    <div
      className="bg-white p-4 shadow w-100 mx-3 rounded"
      style={{ maxWidth: '300px' }}
    >
      <h2 className="mb-3">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100 mb-3">
          Sign Up
        </button>
      </form>

      <p>Already have an account?</p>

      <Link to="/Login" className="btn btn-secondary border w-100">
        Login
      </Link>
    </div>
  </div>
);
};

export default SignUp;
