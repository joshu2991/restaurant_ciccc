"use client";

import {
  SignOutButton,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./Navbar.css";
import {redirect} from "next/navigation"

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
