import prisma from "./prisma"


export const addUserToDatabase = async (clerkId: string, email: string, name: string,) => {
    try {
        const user = await prisma.user.upsert({
          where: { clerkId },
          update: {
            name,
            email,
          },
          create: {
            clerkId,
            name,
            email,
          },
        });

        return user;
        
    } catch (error) {
        console.error(error)
    }
}


import { headers } from "next/headers";

import {  stripe } from "./stripe";

export async function fetchClientSecret() {
  const origin = (await headers()).get("origin");

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, price_1234) of
        // the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret;
}