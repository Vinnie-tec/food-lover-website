"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname === href ? `${style.active} ${style.active}` : style.link
      }
    >
      {children}
    </Link>
  );
}
