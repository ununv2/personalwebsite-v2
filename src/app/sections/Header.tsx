"use client"
import Link from "next/link";
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { openAsBlob } from "fs";

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
            opacity:1,
            transition: {
            
                stiffness: 20,
                damping: 5
            }

        },
        closed: {
            y:'-100%',
            opacity: 0,
            transition: {
 
                stiffness: 20,
                damping: 5
            }

        }
    }

  return (
    <div className="w-screen text-lg z-30">
        <div className="w-full bg-[#1b1b1b] h-[8vh] content-center">
            <div className="hidden md:flex items-center justify-between mx-auto max-w-[800px] ">
                Logo Here
                
                <ul className="flex flex-row space-x-16">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                </ul>
                
            </div>
            <div onClick={toggleNav} className="text-white absolute top-1 md:hidden rounded border-white/70 p-2 z-50">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>
        </div>

    

        <motion.div
            initial={false}
            animate={nav ? 'open': 'closed'}
            variants={menuVariants}
            className="left-0 top-0 w-full z-40 bg-[#1e1e1e]/100"
        >
            <ul className="text-1xl font-semibold py-5 text-center space-y-6">
                {navLinks.map((link, index) => (
                    <li key={index} className="border-b border-white pb-2 hover:border-b-2 hover:border-white transition-all">
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

