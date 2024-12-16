import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "shuvkant@gmail.com" && password === "123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-row bg-upper_background bg-center bg-cover w-screen h-screen">
      <div className="ml-auto mr-auto outline shadow-2xl text-center max-w-106  h-1/2 w-1/4 mt-20 rounded-lg ">
        <h2 className="mt-10 text-center text-2xl/9 font-bold">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-sm/6 font-medium text-black text-left ml-2 opacity-100">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-left block text-sm/6 font-medium text-black ml-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="mt-3 flex   w-full justify-center rounded-full bg-indigo-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
