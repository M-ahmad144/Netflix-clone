import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/Backgroundmage";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // Show success message
      toast.success("Signup successful! Welcome aboard!");
    } catch (error) {
      console.log(error);
      // Show error message
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <BackgroundImage />

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="z-10 absolute inset-0 bg-gray-900 bg-opacity-50 content">
          <Header login={"login"} />
          <div className="flex flex-col justify-center items-center body">
            <div className="text-center text">
              <h1 className="mb-4 font-bold text-4xl text-white">
                Unlimited movies, TV shows and more.
              </h1>
              <h4 className="mb-4 text-2xl text-white">
                Watch anywhere. Cancel anytime.
              </h4>
              <h6 className="mb-8 text-white text-xl">
                Ready to watch? Enter your email to create or restart
                membership.
              </h6>
            </div>
            <div className="w-full max-w-md form">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="block border-gray-300 bg-gray-900 bg-opacity-50 mb-4 p-4 border focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full"
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="block border-gray-300 bg-gray-900 bg-opacity-50 mb-4 p-4 border focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full"
                />
              )}
              {!showPassword && (
                <button
                  onClick={() => setShowPassword(true)}
                  className="block bg-red-600 hover:bg-red-700 mb-4 p-4 focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full text-white"
                >
                  Get Started
                </button>
              )}
              {showPassword && (
                <button
                  onClick={handleSignUp}
                  className="block bg-red-600 hover:bg-red-700 mb-4 p-4 focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full text-white"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
