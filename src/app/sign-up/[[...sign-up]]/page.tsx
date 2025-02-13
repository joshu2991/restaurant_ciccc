'use client';

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp
      appearance={{ baseTheme: dark }} />
    </div>
  );
}