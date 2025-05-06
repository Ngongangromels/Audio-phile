import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
  try {
     const headphones = await prisma.product.findFirst({
      where: {
        category: {
          name: "headphone"
        },
      }, 
      include: {
        category: true,
      }
     })
      if (!headphones) {
        return NextResponse.json(
          { error: "No product found for the specified category" },
          { status: 404 }
        );
      }

     return NextResponse.json(headphones, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {error: "Something went wrong"},
      {status: 500}
    )
  }
}