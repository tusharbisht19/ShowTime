import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header.jsx";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <img
          className="w-full absolute h-screen object-cover top-0 left-0 z-0"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md p-15 bg-black/80 text-white flex flex-col  justify-center"
      >
        <h1 className="w-full text-left text-3xl mb-6">Sign In</h1>
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white border rounded-md w-full mb-6 cursor-pointer py-2"
        >
          Sign In
        </button>

        <div className="w-full text-center">
          <span>New to Show Time?</span>
          <Link to="/signup" className="hover:underline cursor-pointer">
            Sign up now.
          </Link>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center">{errorMessage}</div>
        )}
      </form>
    </div>
  );
}

export { Login };
