import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleManual = () => {};

  const handleChange = () => {};

  return (
    <main className="sm:max-w-[500px] w-[85%] flex flex-col gap-3 p-4 justify-center items-center m-auto mt-14 mb-28">
      <div className="w-full flex justify-center flex-col">
        <h1 className="text-black font-bold portrait:text-center text-xl sm:text-3xl">
          Welcome Back!
        </h1>
        <p className="text-xs sm:text-sm portrait:text-center tracking-wider">
          {" "}
          Welcome Back! Please enter your details
        </p>
      </div>

      <form
        onSubmit={handleManual}
        className="w-full flex justify-center sm:items-start items-center sm:justify-start flex-col gap-6"
      >
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Email</p>
          <input
            type="email"
            className="p-[10px] w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Password</p>
          <input
            type="password"
            className="p-[10px] w-[100%] sm:w-[75%]  text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-950 text-white font-semibold p-[10px]  w-[80%] sm:w-[75%]  rounded-md  duration-500 ease-in-out hover:bg-yellow-500 hover:scale-105"
          disabled={loading}
        >
          Login
        </button>
      </form>

      <div className="sm:w-full w-[79%] flex portrait:items-center flex-col gap-3">
        {/* <OAuth loading={loading} /> */}
        <p>
          Don't Have an account ?
          <Link to={"/register"} className="font-semibold text-blue-900">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
