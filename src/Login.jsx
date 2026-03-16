import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

 /** const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/auth/login', { email, password })
      .then(res => {
        if (res.data.status === "OK") {
          alert("Login successful");
          navigate('/'); // Or another protected route
        } else {
          alert(res.data);
        }
      })
      .catch(err => {
        console.error(err);
        alert("Login failed. Check console for details.");
      });
  };*/ 
/** const handleSubmit= async(e)=>{
       e.preventDefault();
       try{
        const response = await
        Axios.post("http://localhost:3000/auth/login",{
          
          email,
          password
        },
      {
        withCredentials:true
      });
      console.log(" Login success:", response.data);
      if(response.data.token){
        localStorage.setItem("token", response.data.token)
        navigate('/home')
      }
      else{
        console.warn("no token")
      }
      
       }
       catch(err){
        console.error("Login failed", err.response?.data?.message ||err.message);
        setErrorMessage(err.response?.data?.message ||"message failed")
       }
         
    };
*/
   
const handleSubmit= async (e) => {
  e.preventDefault();
  try {
    const response = await Axios.post("/auth/login", { email, password }, { withCredentials: true });

    // Check if the backend sent 'status: true'
    if (response.data.status===true) {
      console.log("Login Success!");
      navigate('/dashboard');
    } else {
      alert(response.data.message || "Invalid credentials");
    }
  } catch (err) {
    console.error("Login failed", err);
  }
};
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100 vw-100">
      <div className="bg-white p-4 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
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
            <label htmlFor="password"><strong>Password</strong></label>
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

          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
           <Link to="/forgotpassword" className="btn btn-light border w-60 mt-3">forgot password</Link>
      
           <p>Don't have an account?</p>
          
        <Link to="/register" className="btn btn-light border w-100">Sign Up</Link>
      
        </form>
       {errorMessage&&
       <p style={{color:"red"}}>{errorMessage}</p>
       }
       </div>
    </div>
  );
};

export default Login;
