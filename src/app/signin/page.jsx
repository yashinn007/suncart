"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
// import { Router } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();

  const handelSignupFunc = async (data) => {
    const { name, photo, email, password } = data;
    console.log(email, password);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });

    console.log(res, error);

    if (error) {
      toast.error(error.message || "Signup failed");
    }
    if (res) {
      toast.success("Signup Success");
      window.setTimeout(() => router.push("/"), 500);
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <div className="p-8 rounded-xl bg-[#e4e4e4]">
        <h2 className="text-center text-2xl font-semibold mb-7">
          Signup your account
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit(handelSignupFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-sm"
              placeholder="Type here name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p role="alert" className="text-red-500">
                {errors.name.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-sm"
              placeholder="Type here photo URL"
              {...register("photo")}
            />
          </fieldset>
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
        <p className="text-center mt-3 text-gray-500">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
