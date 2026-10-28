import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto min-h-[85vh] flex justify-center items-center">
      <div className="p-8 rounded-xl bg-[#e4e4e4]">
        <h2 className="text-center text-2xl font-semibold mb-7">
          Login your accout
        </h2>
        <form className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-sm"
              placeholder="Type here email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-sm"
              placeholder="Type here password"
            />
          </fieldset>
          <button className="btn w-full bg-[#ae9077] text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
