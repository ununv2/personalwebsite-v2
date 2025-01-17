"use client"
import Link from "next/link";
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { openAsBlob } from "fs";
import Image from "next/image";
import mcpfp from '../../../public/mcpfp.png'
const navLinks = [
    { title: "Home", path: "#home"},
    { title: "Projects", path: "#project"},
    { title: "Experience", path: "#experience"},
    { title: "Contact", path: "#contact"},
];

export default function Header() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            y:0,
            height:"auto",
            opacity:1,
            transition: {
                stiffness: 20,
                damping: 5
            }

        },
        closed: {
            y:'-100%',
            height:0,
            opacity: 0,
            transition: {
                stiffness: 20,
                damping: 5
            }

        }
    }
// Default
  return (
    <div className="w-screen text-lg z-30">
        <div className="w-full bg-[#222222] h-[9vh] flex justify-center">
            <div data-aos="fade-down" className="flex items-center justify-between px-16 md:px-0 max-w-[800px] w-full">
                <Image
                    className="rounded-lg size-[2.3em] md:size-[3em]"
                    src={mcpfp}
                    alt="pfp"
                />
                <ul className="hidden md:flex flex-row space-x-16 text-white">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                </ul>
                <div onClick={toggleNav} className="text-white inline right-4 md:hidden rounded border-white/70 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
                </div>
                
            </div>
            
        </div>

    
{/* Mobile Open Navbar for Responsive */}
        <motion.div
            initial={false}
            animate={nav ? 'open': 'closed'}
            variants={menuVariants}
            className="left-0 top-0 w-full z-40 bg-[#1e1e1e]/100"
        >
            <ul className="text-1xl text-white font-semibold py-5 text-center space-y-6 flex flex-col justify-center items-center">
                {navLinks.map((link, index) => (
                    <li key={index} className="border-b border-white pb-2 hover:border-b-2 hover:border-white transition-all w-[8em]">
                        <Link href={link.path} onClick={closeNav}>
                            {link.title}
                        </Link>
                    </li>
                ))}

            </ul>

        </motion.div>

    </div>
  )
}

