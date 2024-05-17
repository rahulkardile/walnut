import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleManual = () => {};

  const handleChange = () => {};

  return (
    <main className="max-w-[500px] flex flex-col gap-3 justify-center items-center m-auto mt-14 mb-28">
      <div className="w-full flex justify-center items-center sm:items-start flex-col">
        <h1 className="text-black font-bold text-3xl">Welcome Back!</h1>
        <p className="text-sm tracking-wider">
          {" "}
          Welcome Back! Please enter your details
        </p>
      </div>

      <form
        onSubmit={handleManual}
        className="w-full flex justify-center sm:items-start items-center sm:justify-start  flex-col gap-6"
      >
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Name</p>
          <input
            type="text"
            required
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            placeholder="Full Name"
            id="name"
            onChange={handleChange}
          />
        </div>

        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Email</p>
          <input
            type="email"
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Enter Phone Number</p>
          <input
            type="tel"
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            id="phone"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={handleChange}
            required
          />

        </div>
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Date Of Birth</p>
          <input
            type="date"
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="Date Of Birth"
            id="dob"
            onChange={handleChange}
          />
        </div>
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Gender</p>
          <select
            required
            id="gender"
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            onChange={handleChange}
          >
            <option className="mx-4" defaultValue="select">
              select
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="sm:w-full w-[79%]">
          <p className="text-gray-950">Password</p>
          <input
            type="password"
            className="p-[10px]  w-[100%] sm:w-[75%] text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-[#182137] text-white portrait:w-[80%] font-semibold p-[10px] w-[75%] rounded-md  duration-300 ease-in-out hover:scale-105"
          disabled={loading}
        >
          Register
        </button>
      </form>

      <div className="w-full flex portrait:justify-center portrait:items-center flex-col gap-3">
        {/* <OAuth loading={loading} /> */}
        <p>
          Have an account?
          <Link to={"/login"} className="font-semibold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
