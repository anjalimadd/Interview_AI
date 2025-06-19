"use client";

import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/sign-up")}
      className=" border-2 text-sm px-4 py-1.5 rounded-sm"
    >
      Get Started
    </button>
  );
};

export default LoginButton;
