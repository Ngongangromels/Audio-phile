import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
  try {
     const eardphones = await prisma.product.findFirst({
      where: {
        category: {
          name: "earphones"
        },
      }, 
      include: {
        category: true,
      }
     })
      if (!eardphones) {
        return NextResponse.json(
          { error: "No product found for the specified category" },
          { status: 404 }
        );
      }

     return NextResponse.json(eardphones, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {error: "Something went wrong"},
      {status: 500}
    )
  }
}