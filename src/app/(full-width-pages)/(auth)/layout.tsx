"use client";

import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <AuthProvider>
          <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
            {children}
            <div className="lg:w-1/2 w-full h-full bg-green-300 dark:bg-white/5 lg:grid items-center hidden">
              <div className="relative items-center justify-center flex z-1">
                <GridShape />
                <div className="flex flex-col items-center max-w-xs">
                  <Link href="/dashboard" className="block mb-4">
                    <Image
                      width={400}
                      height={48}
                      src="/images/logo/logo.png"
                      alt="Logo"
                    />
                  </Link>
                  <p className="text-center font-bold text-lg text-primary dark:text-white/60">
                    Selamat Datang di SEA Catering
                  </p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
              <ThemeTogglerTwo />
            </div>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}
