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
    <div className="w-screen h-screen z-50 bg-cover bg-center" style={{ backgroundImage:`url('/bg2.png')` }}>
    <div className='w-full h-full justify-center py-10 sm:py-20 -translate-y-2 md:-translate-y-5'>
        <div className="w-full flex justify-center mb-8">
            <Image
                className="rounded-full size-40 md:size-52"
                src={profilepic}
                alt="pfp"
            />
        </div>
        <div className="w-full flex justify-center mb-8">
            <div className="font-extrabold text-center flex flex-col gap-1 md:gap-3">
                <h1 className="text-3xl md:text-4xl">Unchasa Chen</h1>
                <h1 className="text-xl md:text-4xl">Portfolio Website EHHEHEHE</h1>
                </div>
        </div>
        <div className="w-full flex justify-center mb-12">
            <div className="text-center font-thin max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] text-[0.9em] sm:text-[1em] lg:text-[1.2em] text-pretty">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates accusantium consectetur velit, necessitatibus aliquid eaque repellat dolorum pariatur, atque illo minima quia fugit facilis ipsam. Molestiae enim dolorum veniam?</p>
                </div>
        </div>
        <div className="w-full flex justify-center gap-5 mb-16">
            <button className="bg-white text-black sm:font-semibold py-3 px-4 sm:py-4 sm:px-5 rounded-full">Contact Me Pls</button>
            <button className="border-white border-2 text-white sm:font-semibold py-3 px-5 sm:py-4 sm:px-6 rounded-full">Download CV</button>
        </div>
        <div className="w-full flex justify-center">
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
