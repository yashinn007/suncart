"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const NavLinksContent = ({ href, children }) => {
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

const NavLinks = ({ href, children }) => {
  return (
    <Suspense fallback={<Link href={href}>{children}</Link>}>
      <NavLinksContent href={href}>{children}</NavLinksContent>
    </Suspense>
  );
};

export default NavLinks;
