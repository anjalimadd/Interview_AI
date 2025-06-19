import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    //console.log(idToken);

    if (!idToken) {
      return NextResponse.json({ message: "Missing ID token" }, { status: 400 });
    }

    const SESSION_DURATION = 60 * 60 * 24 * 7;
      const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: SESSION_DURATION * 1000,
      });
    const cookieStore = await cookies();


    cookieStore.set("session", sessionCookie, {
        maxAge: SESSION_DURATION,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/home",
        sameSite: "lax",
      });

    return NextResponse.json({ message: "Session cookie set" }, { status: 200 });
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
