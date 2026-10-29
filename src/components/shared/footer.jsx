import logo from "@/photo/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 container mx-auto py-12 bg-[#ae9077] space-y-10 md:space-y-0">
      <div className="flex flex-col justify-center items-center mx-auto col-span-2 md:col-span-1 ">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Logo"
          className="w-55 h-auto"
        />
        <p className="text-center">
          Created by
          <br />
          Yashin Alam Shihab
        </p>
      </div>
      {/* 1 */}
      <div className="flex flex-col justify-center items-center space-y-2">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      {/* 2 */}
      <div className="flex flex-col justify-center items-center space-y-2">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      {/* 3 */}
      <div className="flex flex-col justify-center items-center space-y-2 col-span-2 md:col-span-1">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default FooterPage;
