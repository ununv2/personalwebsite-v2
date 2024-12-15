"use client"
import Image from "next/image";
import Homepage from "./pages/homepage"
import Project from "./pages/Project";
import Footer from "./sections/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div className="">
        <Homepage/>
        <Project/>
       
    </div>
  );
}
