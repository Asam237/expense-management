import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillMail, AiFillLock } from "react-icons/ai";
import { create } from "zustand";
import axios from "axios";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useRouter } from "next/router";

export interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [tooltipColor, setTooltipColor] = useState("bg-green-500");
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3010/users/login", {
        email,
        password,
      });
      if (response.status === 200) {
        login();
        setTooltipMessage("Login successful! Redirecting...");
        setTooltipColor("bg-green-500");
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          router.push("/");
        }, 2000);
      } else {
        setTooltipMessage("Login failed. Please try again.");
        setTooltipColor("bg-red-500");
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      }
    } catch (error) {
      setTooltipMessage("An error occurred during login. Please try again.");
      setTooltipColor("bg-red-500");
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login | Expense Management</title>
      </Head>
      <div
        className="flex bg-cover bg-center items-center justify-center relative h-screen w-screen"
        style={{
          backgroundImage: "url(./pictures/login.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="flex justify-center items-center h-screen w-screen z-10">
          <div className="lg:h-[60vh] xl:h-[50vh] lg:w-1/4 xl:w-1/3 flex justify-center flex-row bg-white rounded-lg overflow-hidden mx-10 xl:mx-0 shadow-xl">
            <div className="w-full p-10 flex flex-col justify-center">
              <h1 className="text-2xl xl:text-3xl font-bold mb-6 h-10">
                Login
              </h1>
              <div className="signin-container flex flex-col items-center my-4">
                <div className="w-full mt-4 flex items-center border-b border-gray-300 py-2">
                  <AiFillMail size={26} className="mr-2 text-gray-900" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                </div>
                <div className="w-full mt-4 flex items-center border-b border-gray-300 py-2">
                  <AiFillLock size={26} className="mr-2 text-gray-900" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  />
                </div>
              </div>
              <p className="font-medium text-gray-950 cursor-pointer hover:underline underline-offset-4 mt-4">
                Forgot password?
              </p>
              <Tooltip.Provider>
                <Tooltip.Root open={showTooltip}>
                  <Tooltip.Trigger asChild>
                    <button
                      onClick={handleLogin}
                      className="w-1/2 lg:w-56 mx-auto text-lg py-2 xl:py-4 mt-8 cursor-pointer bg-gray-900 text-white rounded-lg hover:bg-gray-700 hover:border-gray-800 transition duration-300 z-10 border-gray-700 border"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Content
                    side="top"
                    align="center"
                    className={`${tooltipColor} text-white p-2 rounded m-2`}
                  >
                    {tooltipMessage}
                  </Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
              <p className="font-medium text-gray-700 text-center mt-4">
                Don&apos;t have an account?
                <Link
                  href="/register"
                  className="text-gray-950 cursor-pointer hover:underline underline-offset-4 pl-1 font-bold"
                >
                  Register now
                </Link>
              </p>
            </div>
            {/* <div
              className="hidden xl:flex w-full xl:w-1/2 bg-cover bg-center items-center justify-center relative"
              style={{
                backgroundImage: "url(./pictures/login.webp)",
              }}
            >
              <div className="absolute inset-0 bg-slate-900"></div>
              <p className="text-white text-2xl xl:text-3xl z-10">
                <p className="text-white text-2xl xl:text-3xl z-10 text-center leading-10 lg:mx-6">
                  Connect to manage your expenses easily and efficiently!
                </p>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
