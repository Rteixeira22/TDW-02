import Head from "next/head";
import React from "react";
/* import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main >

          <h1>Test c/ jest</h1>

          <h3>Test pipeline</h3>

          <li> Teste de prettier</li> <li>mais um teste </li>{" "}
          <li> Teste de prettier</li> <li>maais um teste </li>{" "}
          <li> Teste de prettier</li> <li>maais um teste </li>{" "}
          <li> Teste de prettier</li> <li>maais um teste </li>
        </main>
        <footer >
          
           
        </footer>
      </div>
    </>
  );
}
