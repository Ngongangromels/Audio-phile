import Stripe from "stripe";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
interface Product {
  id: number;
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", (error as Error).message);
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const products = JSON.parse(session.metadata?.products || "[]");

    if (userId && products.length > 0) {
      // Enregistrer les informations de paiement dans la base de données
      await prisma.$transaction(
        products.map((product: Product) =>
          prisma.payment.create({
            data: {
              userId: parseInt(userId), 
              productId: product.id, 
            },
          })
        )
      );

      console.log(`Paiement réussi pour l'utilisateur ${userId}`);
    }
  }

  return NextResponse.json({ received: true });
}
