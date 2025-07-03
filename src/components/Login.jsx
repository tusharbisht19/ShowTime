import { Header } from "./Header.jsx";
import { useState } from "react";
function Login() {
  const [isSignIn, isSetSignIn] = useState(true);
  function toogleSignInForm() {
    isSetSignIn(!isSignIn);
  }
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
        <h1 className="w-full text-left text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="w-full p-2 mb-6 border rounded-md"
            type="text"
            placeholder="Username"
          />
        )}
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="email"
          placeholder="Email or Phone Number"
        />
        <input
          className="w-full p-2 mb-6 border rounded-md"
          type="password"
          placeholder="Password"
        />
        {!isSignIn && (
          <input
            className="w-full p-2 mb-6 border rounded-md"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <button className="bg-red-600 hover:bg-red-700 text-white border rounded-md w-full mb-6 cursor-pointer py-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <div>
            {" "}
            <p className="w-full text-center mb-4">OR</p>
            <button className="w-full border cursor-pointer rounded-md mb-4 text-white py-2">
              Use a sign-in code
            </button>
            <span className="underline w-full text-center cursor-pointer mb-6">
              Forgotpassword?
            </span>
          </div>
        )}

        {isSignIn ? (
          <div className="w-full text-center">
            <span>New to Netflix?</span>
            <span
              className="hover:underline cursor-pointer"
              onClick={() => toogleSignInForm()}
            >
              Sign up now.
            </span>
          </div>
        ) : (
          <div className="w-full text-center">
            <span>Already a User?</span>
            <span
              className="hover:underline cursor-pointer"
              onClick={() => toogleSignInForm()}
            >
              Sign in now.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}

export { Login };
