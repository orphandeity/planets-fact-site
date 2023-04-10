import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import "@fontsource/spartan/variable.css";
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio" });

export const metadata = {
  title: "Frontend Mentor | Planets Fact Site",
  description: "Frontend Mentor Challenge Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={antonio.variable}>
      <body className="min-h-screen bg-black bg-stars text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
