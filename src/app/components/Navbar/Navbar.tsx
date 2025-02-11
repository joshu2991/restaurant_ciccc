"use client";

import { NavbarProps } from "../../../types/Navbar";
import Button from "../Button/Button";
import "./Navbar.css";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar({ logo, links, buttonText, buttonClassname }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" className="w-auto h-8 md:h-10 lg:h-12" />
            </div>
            <div className="block sm:hidden w-1/4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {isOpen ? (
                        <HiX className="h-6 w-6" />
                    ) : (
                        <HiMenu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-black shadow-md sm:hidden">
                    <ul className="flex flex-col p-4">
                        {links.map((link, index) => (
                            <li key={index} className="py-2">{link}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="navbar-links sm:block hidden">
                <ul className="flex gap-4">
                    {links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
            <div className="navbar-button">
                <Button text={buttonText} classname={buttonClassname}/>
            </div>
        </nav>
    )
}