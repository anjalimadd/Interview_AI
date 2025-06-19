import { NextRequest, NextResponse } from "next/server";
import { signUp } from "@/lib/actions/auth.action";

export async function POST(req: NextRequest) {
  const { uid, name, email } = await req.json();

  const result = await signUp({ uid, name, email });
  return NextResponse.json(result);
}
