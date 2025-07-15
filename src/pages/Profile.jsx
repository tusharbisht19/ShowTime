import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header.jsx";
function Profile() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function enterPage() {
      try {
        const token = localStorage.getItem("token");

        if (!token) navigate("/login");
        const response = await fetch(`http://localhost:5001/api/auth/profile`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          navigate("/login");
          return;
        }

        const data = await response.json();
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        navigate("/login");
      }
    }
    enterPage();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="text-white flex items-center justify-center h-[calc(100vh-64px)]"> Loading ...</div>
      ) : (
        <>
          <h1 className="text-white text-3xl w-full h-[calc(400vh-64px)] ">Profile page</h1>
          
        </>
      )}
    </div>
  );
}

export { Profile };
