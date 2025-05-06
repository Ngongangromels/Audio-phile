import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const speakers = await prisma.product.findFirst({
      where: {
        category: {
          name: "spearkers",
        },
      },
      include: {
        category: true,
      },
    });
    if (!speakers) {
      return NextResponse.json(
        { error: "No product found for the specified category" },
        { status: 404 }
      );
    }

    return NextResponse.json(speakers, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
