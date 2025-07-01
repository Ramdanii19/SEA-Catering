"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/subscription", label: "Subscription" },
    { href: "/contact", label: "Contact Us" },
    ...(user ? [{ href: "/home", label: "Dashboard" }] : []),
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-10 py-2 transition-colors duration-300 bg-[rgba(0,0,0,0.3)] backdrop-blur-md`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo/logo.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-5 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-semibold rounded-full px-3 py-1 transition-all duration-300 ${isActive
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Sign In / Logout button */}
          {user ? (
            <button
              onClick={logout}
              className="text-lg font-semibold rounded-full px-3 py-1 bg-white text-red-500 hover:bg-red-100 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/signin"
              className={`text-lg font-semibold rounded-full px-3 py-1 text-white hover:bg-white hover:text-primary ${pathname === "/signin" ? "bg-white text-primary" : ""
                }`}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
