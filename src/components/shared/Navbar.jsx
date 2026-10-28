import Image from "next/image";
import logo from "@/photo/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link href={"http://localhost:3000/"}>
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
        <div className="navbar-end">
          <Link href={"/login"}>
            <button className="btn border-2 bg-[#ae9077] text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
