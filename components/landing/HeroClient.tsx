"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface HeroClientProps {
  user: any;
}

export const HeroClient = ({ user }: HeroClientProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(user ? "/home" : "/sign-up");
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              AI
            </span>{" "}
            Interview Platform
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Job
            </span>{" "}
            Seekers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Practice real-time interviews with AI and get ready to land your next job confidently.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" onClick={handleClick}>
            Try Now!
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/anjalimadd"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({ variant: "outline" })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto">
        <div className="clip-blob overflow-hidden">
          <Image
            className="object-cover w-full h-auto"
            src="/landing.jpeg"
            alt="landing"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="shadow"></div>
    </section>
  );
};
