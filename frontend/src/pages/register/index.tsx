import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillLock, AiFillMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Head>
        <title>Register | Expense Management</title>
      </Head>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-screen flex justify-center items-center">
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="xl:h-[60vh] xl:w-[80vw] shadow-lg flex justify-center flex-row bg-white rounded-lg overflow-hidden">
            <div className="w-full xl:w-1/2 p-10 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-6">Register</h1>
              <div className="signin-container flex flex-col items-center my-4">
                <div className="w-full mt-4 flex items-center border-b border-gray-300 py-2">
                  <FaUser size={26} className="mr-2 text-blue-800" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                </div>
                <div className="w-full mt-4 flex items-center border-b border-gray-300 py-2">
                  <AiFillMail size={26} className="mr-2 text-blue-800" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                </div>
                <div className="w-full mt-4 flex items-center border-b border-gray-300 py-2">
                  <AiFillLock size={26} className="mr-2 text-blue-800" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                </div>
              </div>
              <button className="w-full text-lg py-4 mt-8 cursor-pointer bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Register
              </button>
              <p className="font-medium text-gray-700 text-center mt-4">
                Do you already have an account ?
                <Link
                  href="/login"
                  className="font-medium text-blue-900 cursor-pointer hover:underline underline-offset-4 pl-1"
                >
                  Signin now
                </Link>
              </p>
            </div>
            <div
              className="hidden xl:flex w-full xl:w-1/2 bg-cover bg-center items-center justify-center relative"
              style={{
                backgroundImage: "url(./pictures/login.webp)",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <p className="text-white text-2xl xl:text-3xl z-10 text-center leading-10">
                Join us and take control of your financial future today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
