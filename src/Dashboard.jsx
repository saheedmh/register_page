/** */
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  axios.get("/auth/dashboard", { withCredentials: true }) // No headers needed!
  .then((res) => {
    if (res.data.status) {
      setUser(res.data.user);
      setLoading(false);
    } else {
      navigate("/login");
    }
  });
    /**const navigate = useNavigate();
    axios.defaults.withCredentials= true;
        useEffect(()=>{
            axios.get('http://localhost:3000/auth/verify')
            .then(res=>{
                if(res.data.status){

                }
                else{
                    navigate('/')
                }
            })
        },[])
        
const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Auth failed:", err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
**/
  return (
    <div>
      <h2>Welcome, {user.name} 👋</h2>
      <p>Your email: {user.email}</p>
      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>
        Logout
      </button>
    </div>
  );
}



export default Dashboard
