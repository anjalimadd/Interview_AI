import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import { signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo2.jpeg" alt="MockMate Logo" width={34} height={28} />
            <h3 className="text-primary-100">SmartPrep</h3>
          </Link>
          <Link href="/interview">Create Interview</Link>
          <Link href="#forYou">Your Interviews</Link>
  <Link href="#latest">Latest Interviews</Link>

        </div>

        <div>
          <form action={signOut}>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="btn-primary text-sm px-4 py-1.5 rounded-md hover:bg-red-600"
              >
                Logout
              </button>

              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                {user?.name ? (
                  <span className="text-white font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <Image
                    src="/default-profile.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
