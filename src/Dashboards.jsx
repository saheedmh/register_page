import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboards = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Set global defaults if not already set in main.jsx
  axios.defaults.baseURL = "https://mern-auth-1-kio3.onrender.com";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // We use the /auth/dashboard route which checks the COOKIE
        const response = await axios.get("/auth/dashboard");

        if (response.data.status) {
          setUser(response.data.user);
          setLoading(false);
        } else {
          // If backend says status is false (no cookie), go to login
          navigate("/login");
        }
      } catch (err) {
        console.error("❌ Authentication failed:", err);
        navigate("/login");
      }
    };

    verifyUser();
  }, [navigate]);

  const handleLogout = () => {
    // 1. You should eventually create a backend route /auth/logout 
    // that runs: res.clearCookie('token')
    // 2. For now, we just redirect the user
    navigate("/login");
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <p>Loading your profile...</p>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2>Welcome, {user?.name} 👋</h2>
        <hr />
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>User ID:</strong> {user?._id}</p>
        
        <button 
          className="btn btn-danger mt-3" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboards;
