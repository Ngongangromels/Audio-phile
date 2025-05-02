import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const product = await prisma.product.findUnique({
        where: { id: Number(id) },
        });
    
        if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
        );
        }
    
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
        );
    }
}