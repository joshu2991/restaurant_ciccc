"use client";

import {
  SignOutButton,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
// import { NavbarProps } from "../../../types/Navbar";
// import Button from "../Button/Button";
import "./Navbar.css";
// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
import {redirect} from "next/navigation"


// export default function Navbar({ logo, links, buttonText, buttonClassname }: NavbarProps) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <img src={logo} alt="logo" className="w-auto h-8 md:h-10 lg:h-12" />
//             </div>
//             <div className="block sm:hidden w-1/4">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                 >
//                     {isOpen ? (
//                         <HiX className="h-6 w-6" />
//                     ) : (
//                         <HiMenu className="h-6 w-6" />
//                     )}
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="absolute top-16 left-0 right-0 bg-black shadow-md sm:hidden">
//                     <ul className="flex flex-col p-4">
//                         {links.map((link, index) => (
//                             <li key={index} className="py-2">{link}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//             <div className="navbar-links sm:block hidden">
//                 <ul className="flex gap-4">
//                     {links.map((link, index) => (
//                         <li key={index}>{link}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="navbar-button">
//                 <Button text={buttonText} classname={buttonClassname}/>
//             </div>

//         </nav>
//     )
// }

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex gap-4 text-white">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
      </div>

      <div className="flex gap-4 text-white ">
        {/* if the user is not signed in, show the sign in button */}
        <SignedOut>
          <SignUpButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => redirect("/sign-up")}>
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        {/* if the user is signed in, show the sign out button */}
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
}
