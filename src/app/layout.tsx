import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nana's Tattoo Portfolio",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <header className="p-4 border-b shadow-sm">
          <nav className="flex space-x-6 font-medium text-lg max-w-5xl mx-auto">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className="p-6 max-w-5xl mx-auto">{children}</main>

        <footer className="p-4 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Nana's Tattoo Portfolio
        </footer>
      </body>
    </html>
  );
}
