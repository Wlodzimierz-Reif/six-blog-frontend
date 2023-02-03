import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Button from "@/components/button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  const [data, setData] = useState();
  return (
    <>
      <h1>HOME</h1>
      <Button variant="secondary" text="test" />
      <button className="btn btn-primary m-3">Button Primary</button>
    </>
  );
}
