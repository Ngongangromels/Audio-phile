import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    
    const body = await req.json();

    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: { clerkId: userId },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    let category = await prisma.category.findUnique({
      where: { name: body.category }
    })

    if(!category) {
      category = await prisma.category.create({
        data: {
          name: body.category
        }
      })
    }

    const product = await prisma.product.create({
      data: {
        title: body.title,
        description: body.description, 
        price: body.price, 
        image: body.image,
        admin: {
          connect: { id: admin.id }, 
        },
        category: {
          connect: { id: category.id }
        }
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}


