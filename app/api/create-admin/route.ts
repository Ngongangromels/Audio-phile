import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY! });

export async function GET() {
  const email = "romels064@gmail.com";
  const password = "@Romelsxx"; 
  const name = "admin";

  try {
    const existingUsers = await clerk.users.getUserList({
      emailAddress: [email],
    });
    if (existingUsers.length > 0) {
      return NextResponse.json({ message: "Admin already exists in Clerk" });
    }

    // Créer l’utilisateur dans Clerk
    const clerkUser = await clerk.users.createUser({
      emailAddress: [email],
      password,
      username: name
    });

    // Ajouter l'utilisateur dans Prisma (liée à clerkId)
    await prisma.admin.create({
      data: {
        email,
        name,
        password,
        clerkId: clerkUser.id,
      },
    });

    return NextResponse.json({ message: "Admin successfully created" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
