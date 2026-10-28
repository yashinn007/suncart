import logo from "@/photo/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#ddd7d2] text-base-content container mx-auto p-10 mt-9 ">
      <aside>
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Logo"
          className="w-60 h-auto"
        />
        <p className="text-center">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default FooterPage;
