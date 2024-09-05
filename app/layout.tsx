import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@uploadthing/react/styles.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackHive",
  description: "Create and compete in a hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <NextSSRPlugin  routerConfig={extractRouterConfig(ourFileRouter)}/>
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}


