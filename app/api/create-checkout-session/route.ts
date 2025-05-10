import Stripe from "stripe";
import prisma from "@/lib/prisma"; // Assurez-vous que Prisma est configuré correctement
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server"; // Importer l'authentification de Clerk

// Définir un type pour les produits
interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  quantity: number;
}

// Initialiser Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// Exporter une fonction nommée pour la méthode POST
export async function POST(req: Request) {
  try {
    // Récupérer l'utilisateur connecté
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Vérifier si l'utilisateur existe dans la base de données
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found in the database" },
        { status: 404 }
      );
    }

    const userId = user.id;

    // Lire le corps de la requête
    const body = await req.json();
    const {
      products,
      totalPrice,
    }: { products: Product[]; totalPrice: number } = body;

    // Validation des données
    if (
      !Array.isArray(products) ||
      products.length === 0 ||
      typeof totalPrice !== "number"
    ) {
      return NextResponse.json(
        { message: "Invalid request data" },
        { status: 400 }
      );
    }

    // Préparer les articles pour Stripe
    const lineItems = products.map((product: Product) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: parseFloat(product.price) * 100,
      },
      quantity: product.quantity,
    }));

    // Créer une session Checkout Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/checkout`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        userId: userId.toString(),
        products: JSON.stringify(products), // Transmettre les produits dans les métadonnées
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
