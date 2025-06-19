import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { getCurrentUser, signOut } from "@/lib/actions/auth.action";
import LoginButton from "@/components/LoginButton"; // adjust path if needed

const Layout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo2.jpeg" alt="MockMate Logo" width={34} height={28} />
            <h2 className="text-primary-100">SmartPrep</h2>
          </Link>
          <Link href="#about">About</Link>
          <Link href="#working">Working</Link>

        </div>

        <div>
          {user ? (
            <form action={signOut}>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary text-sm px-4 py-1.5 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              </div>
            </form>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
