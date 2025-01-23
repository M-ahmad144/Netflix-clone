import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/Backgroundmage";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Signin successful! Welcome aboard!");
    } catch (error) {
      console.log(error.code);
      toast.error("Signin failed. Please try again.");
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="relative min-h-screen">
      <BackgroundImage />
      <div className="top-0 left-0 absolute flex flex-col justify-between bg-black bg-opacity-50 w-full h-full">
        <Header />
        <div className="flex flex-col justify-center items-center px-4 md:px-0 h-full">
          <div className="bg-black bg-opacity-70 p-8 rounded-lg w-full max-w-xl">
            <div className="mb-6 font-bold text-2xl text-white">Sign In</div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-4 py-2 rounded-lg text-stone-950"
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="px-4 py-2 rounded-lg text-stone-950"
                required
              />
              <button
                onClick={handleLogin}
                className="bg-red-600 px-4 py-2 rounded-lg font-bold text-white cursor-pointer"
              >
                Sign In
              </button>
            </div>
            <div className="mt-4 text-white">
              New to Netflix?{" "}
              <Link to="/signup" className="text-red-600">
                Sign up now.
              </Link>
              <br />
              <span className="opacity-75 text-white">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
