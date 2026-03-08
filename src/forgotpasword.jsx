import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import "./App.css"
import react, {useState} from 'react'
function Forgotpassword () {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState('')
  
      {/**
        const handleSubmit= async(e)=>{
     e.preventDefault();
     try{
      const response = await
      Axios.post("http://localhost:3000/auth/forgot-password",{
        
        email,
        
      },
    {
      withCredentials:true
    });
    console.log(" signup Response:", response.data);
    if(response.data.status){
      alert("check your email")
    navigate('/Login')
    }
     }
     catch(err){
      console.log("wrong email", err);
     }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/forgot-password', { email });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

        
        */}

        const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('http://localhost:3000/auth/forgot-password', { email });
      
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

       return (
    <div className="">
      <h1>Forgoten password</h1>
       <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>{msg}</p>
   
           
    </div>
  )
}
 

export default Forgotpassword;