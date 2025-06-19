'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/auth.action";

const TryNow =  async () => {
    const router = useRouter();
    const user = await getCurrentUser();
      const handleClick = () => {
          router.push(!!user ? "/home" : "/sign-up");
        };
  return (
    <div>          <Button className="w-full md:w-1/3"  onClick={handleClick}>Try Now!</Button>
</div>
  )
}

export default TryNow