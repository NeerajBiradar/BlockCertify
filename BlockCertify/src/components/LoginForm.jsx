import React from "react";

function LoginForm() {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Login</h2>
      <form className="bg-[#060B0F] p-6 sm:p-8 rounded-xl border border-white w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
