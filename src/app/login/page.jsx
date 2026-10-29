"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();

  const handelLoginFunc = async (data) => {
    const { email, password } = data;
    console.log(email, password);

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
    });

    console.log(res, error);

    if (error) {
      toast.error(error.message || "Login failed");
    }
    if (res) {
      toast.success("Login Success");
      window.setTimeout(() => router.push("/"), 300);
    }
  };

  const handelGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto min-h-[85vh] flex justify-center items-center">
      <div className="p-8 rounded-xl bg-[#e4e4e4]">
        <h2 className="text-center text-2xl font-semibold mb-7">
          Login your account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit(handelLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-sm"
              placeholder="Type here email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-sm relative"
              placeholder="Type here password"
              {...register("password", { required: "Email is required" })}
            />
            <span
              className="absolute right-3 top-4 cursor-pointer "
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FaEye className="text-lg"></FaEye>
              ) : (
                <FaEyeSlash className="text-lg"></FaEyeSlash>
              )}
            </span>
            {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full bg-[#ae9077] text-white">Login</button>
        </form>
        <p className="text-center text-gray-500 my-4 font-semibold">or</p>
        <button
          onClick={handelGoogleSignIn}
          className="btn w-full border-2 border-blue-500 bg-blue-200"
        >
          <FaGoogle className="text-blue-500 text-2xl"></FaGoogle>
        </button>
        <p className="text-center mt-3 text-gray-500">
          Do not have an account?{" "}
          <Link href={"/signin"} className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
