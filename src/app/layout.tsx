import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex Kennis",
  description: "Website voor het testen van codex kennis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={"flex flex-col items-center h-screen justify-between"}>
          <div></div>
          <div className={"w-full flex justify-center"}>
          {children}
          </div>
          <div className={"w-full"}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
