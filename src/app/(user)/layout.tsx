import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/dashboard/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEA Catering",
  description: "Sea Catering healty food",
  icons: {
    icon: '/images/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Navbar />
      <div className="flex-1 px-10">
        <AuthProvider>{children}</AuthProvider>
      </div>
    </div>
  );
}
