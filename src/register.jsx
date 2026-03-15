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
       Axios.defaults.baseURL = "https://mern-auth-1-kio3.onrender.com"
       const handleSubmit = async (e) => {

 e.preventDefault();

 try{

   /**const response = await Axios.post(
     //"http://localhost:3000/auth/signup",
    // "https://onrender.com", // Just .com, no extra /

     { name, email, password },
     { withCredentials:true }
   );
**/
const response = await Axios.post(
  "https://onrender.com", 
  { name, email, password },
  { withCredentials: true } // Keep this for secure cookies!
);
   console.log("signup Response:", response.data);

   navigate('/Login');

 } catch(err){

   console.error("signup failed", err);

 }

};

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="bg-white p-4 mt-5 mb-3 rounded w-25 ">
        <h2 className="mb-3">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              autoComplete="off"
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
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
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
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary w-100 mb-3">
             sign up
          </button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className="btn btn-light border w-100">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
