import React from 'react'
import Image from "next/image";
import profilepic from '../../../public/profilepic.jpg'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-screen z-50 bg-cover bg-center" style={{ backgroundImage:`url('/bg2.png')` }}>
    <div className='w-full justify-center py-10 sm:py-20 translate-y-2 md:-translate-y-2'>
        {/* Profile Pic */}
        <div data-aos="zoom-in" className="w-full flex justify-center mb-8">
            <Image
                className="rounded-full size-40 md:size-52"
                src={profilepic}
                alt="pfp"
            />
        </div>
        {/* Title */}
        <div data-aos="fade-up" className="w-full flex justify-center mb-8">
            <div className="font-extrabold text-center text-white flex flex-col gap-1 md:gap-3">
                <h1 className="text-3xl md:text-4xl">Unchasa Chen's</h1>
                <h1 className="text-xl md:text-4xl">Personal Portfolio Website</h1>
                </div>
        </div>
        {/* Description */}
        <div data-aos="fade-up" className="w-full flex justify-center mb-12">
            <div className="text-center text-white font-thin max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] text-[0.9em] sm:text-[1em] lg:text-[1.2em] text-pretty">
                <p>Hi! My name is Unun, and I'm a 2nd-year student studying Information and Communication Engineering (ICE) at Chulalongkorn University. Here, you'll find more about me, my experiences, my current projects, and much more!</p>
                </div>
        </div>
        {/* Buttons */}
        <div data-aos="fade-up" className="w-full flex justify-center gap-5 mb-16">
            <a href="https://github.com/ununv2" className="bg-white text-black hover:scale-105 transition duration-300 sm:font-semibold py-3 px-4 sm:py-4 sm:px-5 rounded-full">Github Profile</a>
            <a href="" download="" className="border-white border-2 text-white hover:scale-105 transition duration-300 sm:font-semibold py-3 px-5 sm:py-4 sm:px-6 rounded-full">Contact Me</a>
        </div>
        {/* ICONS */}
        <div data-aos="zoom-out-up" className="w-full flex justify-center">
            <div className="flex flex-col justify-center gap-5">
                <p className="text-center">EXPERIENCE WITH</p>
                <div className="flex gap-10">
                    <FaPython className="inline-block text-4xl text-red-500"/>
                    <FaJava className="inline-block text-4xl text-blue-500"/>
                    <FaReact className="inline-block text-4xl text-green-500"/>
                    <RiTailwindCssFill className="inline-block text-4xl text-purple-500"/>
                    <FaHtml5 className="inline-block text-4xl text-yellow-500"/>
                </div>
            </div>
        </div>
    </div>
        
    </div>
  )
}
