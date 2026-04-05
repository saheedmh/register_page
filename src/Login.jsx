import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
Axios.defaults.baseURL = "https://mern-auth-1-kio3.onrender.com";
Axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  
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
      navigate('/Dashboards');
    } else {
      alert(response.data.message || "Invalid credentials");
    }
  } catch (err) {
    console.error("Login failed", err);
  }
};
return (
  /* 
    vh-100: Sets height to 100% of the viewport.
    overflow-hidden: Disables all scrolling (vertical and horizontal).
    p-3: Keeps a safe gap so the box doesn't touch the screen edges on small phones.
  */
  <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100 vw-100 overflow-hidden p-3 w-100">
    
    {/* 
      Using col-11 for tiny screens and maxWidth for larger ones.
      This ensures the box stays centered and fits within the screen height.
    */}
    <div className="bg-white p-4 rounded shadow-lg col-11 col-sm-8 col-md-6 col-lg-4" style={{ maxWidth: '380px' }}>
      <h2 className="text-center mb-4">Login</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100 mb-2">Login</button>
        
        <Link to="/forgotpassword" style={{fontSize: '0.9rem'}} className="btn btn-light border w-100 mb-3">Forgot Password</Link>
      
        <div className="text-center">
          <p className="mb-1 small">Don't have an account?</p>
          <Link to="/" className="btn btn-secondary w-100 btn-sm">Sign Up</Link>
        </div>
      </form>

      {errorMessage && (
        <p className="text-danger text-center mt-2 small mb-0">{errorMessage}</p>
      )}
    </div>
  </div>
);

};

export default Login;
