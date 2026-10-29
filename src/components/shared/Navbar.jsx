"use client";

import Image from "next/image";
import logo from "@/photo/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import userImg from "@/photo/userImg.webp";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  const links = (
    <>
      <li>
        <NavLinks href={"/"}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={"/products"}>Products</NavLinks>
      </li>
      <li>
        <NavLinks href={"/profile"}>My Profile</NavLinks>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar container h-20 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link href={"https://suncart-three.vercel.app/"}>
            <Image
              src={logo}
              alt="logo"
              height={800}
              width={800}
              loading="eager"
              className="w-50 h-auto"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>
        {isPending ? (
          <div className="navbar-end pr-7">
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : user ? (
          <div className="navbar-end gap-3">
            <h2 className="hidden md:flex">Hello, {user?.name}</h2>
            <div className="avatar">
              <div className="ring-offset-base-100 w-5 md:w-8 rounded-full ring-2 ring-offset-2">
                <Image
                  alt={user?.name}
                  src={user?.image || userImg}
                  height={400}
                  width={400}
                />
              </div>
            </div>
            <button
              onClick={async () => await authClient.signOut()}
              className="btn btn-sm md:btn-md  border-2 bg-[#ae9077] text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-0.5 md:gap-1">
            <Link href={"/login"}>
              <button className="btn  btn-sm md:btn-md  border-2 bg-[#665547] text-white rounded-lg ">
                Login
              </button>
            </Link>
            <Link href={"/signin"}>
              <button className="btn  btn-sm md:btn-md  border-2 bg-[#ae9077] text-white rounded-lg">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
