import React, { useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:3000/auth/reset-password/${token}`, {
        password,
      });

      setMessage(res.data.message);
       localStorage.setItem("token", res.data.token);

      // Redirect user to dashboard or home
      navigate("/Login"); // or "/"
  
    } catch (err) {
      console.error("❌", err);
      setMessage(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
