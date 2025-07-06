import { Header } from "../components/Header.jsx";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
        />
      </div>

      <form className="w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md p-15 bg-black/80 text-white flex flex-col  justify-center">
        <h1 className="w-full text-left text-3xl mb-6">Sign Up</h1>
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="password"
          placeholder="Password"
        />

        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="password"
          placeholder="Confirm Password"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white border rounded-md w-full mb-6 cursor-pointer py-2">
          Sign Up
        </button>

        <div className="w-full text-center">
          <span>Already a user?</span>
          <Link to="/login" className="hover:underline cursor-pointer">
            Login now.
          </Link>
        </div>
      </form>
    </div>
  );
}

export { Signup };
