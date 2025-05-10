"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart-context";
import { redirect, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";

export const CheckoutContain = () => {
  const { user } = useUser();
  const route = useRouter()
  const userId = user?.id;
  const { cart, clearCart } = useCart();

  const name = user?.username || "";
  const email = user?.emailAddresses[0].emailAddress || "";

  // Assurez-vous de remplacer ceci par votre clé publique Stripe
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );

  // Removed duplicate declaration of cart
  const handleClick = async () => {
    // Récupérer l'instance Stripe
    const stripe = await stripePromise;

    // Récupérer les images et calculer le prix total
    // const productImages = cart.map((product) => product.image);
    // const totalPrice = cart.reduce(
    //   (total, product) => total + parseFloat(product.price) * product.count,
    //   0
    // );

    // Appeler votre API pour créer une session Checkout
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cart.map((product) => ({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: product.count,
        })),
        totalPrice: cart.reduce(
          (total, product) => total + parseFloat(product.price) * product.count,
          0
        ),
      }),
    });

    const session = await response.json();

    // Rediriger vers Checkout
    if (!stripe) {
      console.error("Stripe failed to initialize.");
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

  if (result.error) {
    console.error(result.error);
  } else {
    // Si le paiement est réussi, vider le panier
    clearCart();
    route.push("/")
    
  }
  };

  const handleCheckout = async () => {
    if (!userId) {
      redirect("/sign-up");
    }

    try {
      const response = await fetch("/api/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, name, email }),
      });

      const data = await response.json();
      if (!data.success) {
        console.error("Failed to add user:", data.error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  

  return (
    <div>
      <div className="bg-[#F1F1F1]  container mx-auto px-20 py-12">
        {/* Back Button  */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          <span>Go Back</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8">
            <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>

            {/* Billing Details */}
            <div className="mb-8">
              <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="romels064@mail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+237 697730696"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mb-8">
              <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                Shipping Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label
                    htmlFor="address"
                    className="block text-sm font-medium mb-2"
                  >
                    Address
                  </Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="3 rue bastos"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="zip"
                    className="block text-sm font-medium mb-2"
                  >
                    ZIP Code
                  </Label>
                  <Input
                    type="text"
                    id="zip"
                    placeholder="10001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                  >
                    City
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Yaounde"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="country"
                    className="block text-sm font-medium mb-2"
                  >
                    Country
                  </Label>
                  <Input
                    type="text"
                    id="country"
                    placeholder="Cameroun"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                Payment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Payment Method</p>
                </div>
                <div className="space-y-4">
                  <Label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <Input
                      type="radio"
                      name="payment"
                      value="e-money"
                      defaultChecked
                      className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
                    />
                    <span className="ml-3 font-medium">e-Money</span>
                  </Label>
                  <Label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                    <Input
                      type="radio"
                      name="payment"
                      value="cash"
                      className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
                    />
                    <span className="ml-3 font-medium">Cash on Delivery</span>
                  </Label>
                </div>
                <div>
                  <Label
                    htmlFor="e-money-number"
                    className="block text-sm font-medium mb-2"
                  >
                    e-Money Number
                  </Label>
                  <Input
                    type="text"
                    id="e-money-number"
                    placeholder="238521993"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="e-money-pin"
                    className="block text-sm font-medium mb-2"
                  >
                    e-Money PIN
                  </Label>
                  <Input
                    type="password"
                    id="e-money-pin"
                    placeholder="6891"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
            <h2 className="text-lg font-bold uppercase mb-6">Summary</h2>

            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {cart.map((product) => (
                <div key={product.id} className="flex items-center">
                  <div className="bg-[#F1F1F1] rounded-lg h-16 w-16 flex items-center justify-center mr-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">{product.title}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                  <div className="text-gray-500">x{product.count}</div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <p className="text-gray-500 uppercase">Total</p>
                <p className="font-bold">
                  $
                  {cart
                    .reduce(
                      (total, product) =>
                        total + parseFloat(product.price) * product.count,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>

            {/* Continue Button */}
            {!userId && (
              <Button
                onClick={handleCheckout}
                className="w-full bg-[#D87D4A] text-white uppercase py-3 px-3 cursor-pointer hover:bg-[#e69667] transition-colors"
              >
                Continue & Pay
              </Button>
            )}
            {userId && (
              <Button
                onClick={handleClick}
                className="w-full bg-[#D87D4A] text-white uppercase py-3 px-3 cursor-pointer text-center block hover:bg-[#e69667] transition-colors"
              >
                Continue & Pay
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
