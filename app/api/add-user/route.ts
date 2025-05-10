// filepath: c:\Users\RNN\Documents\PROJECT-RNN\audiophile-e-commerce\app\api\add-user\route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, name, email } = await req.json();

    await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        name,
        email,
        password: "default_password",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
