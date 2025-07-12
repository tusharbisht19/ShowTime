import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header.jsx";
function Profile() {
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
      } catch (error) {
        console.log(error.message);
        navigate("/login");
      }
    }
    enterPage();
  }, []);
  return (
    <>
      <Header />
      <h1 className="text-white text-3xl">Profile page</h1>
    </>
  );
}

export { Profile };
