"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive && "text-[#d6af8c] border-2 border-[#ccb6a1]"} font-semibold`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
