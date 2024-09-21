import React from "react";

function Home() {
  return (
    <main
      className="flex-grow flex flex-col items-center justify-center"
      style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}
    >
      <h1 className="text-8xl font-bold text-white mb-4">BlockCertify</h1>
      <p className="text-lg text-white mb-8">
        A Certificate Verification Platform A Certificate Verification Platform
        <br />A Certificate Verification Platform A Certificate Verification
        Platform
      </p>
      <div className="flex items-center py-2 ">
        <div className="relative w-full border border-gray-300 rounded-full">
          <input
            className="appearance-none bg-transparent border-none w-64 text-white py-4 px-8 leading-tight focus:outline-none rounded-full"
            type="text"
            placeholder="Enter Certificate ID"
            aria-label="Certificate ID"
          />
          <button
            className="absolute right-0 top-0 my-[13px] mr-2 bg-transparent border-none text-white"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
