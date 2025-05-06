"use client"
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "./cart-context";

export const NavBarProduct = () => {
  const { cart } = useCart();
   const totalItems = cart.reduce((total, product) => total + product.count, 0);
  return (
    <nav  className=" max-w-full bg-black text-white mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-700">
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
      <h1 className="text-2xl font-bold">
        <Link href="/"> audiophile</Link>
      </h1>
      <ul className="hidden md:flex space-x-8 uppercase text-sm tracking-widest">
        <li>
          <Link href="#" className="hover:text-orange-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-orange-500">
            Headphones
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-orange-500">
            Speakers
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-orange-500">
            Earphones
          </Link>
        </li>
      </ul>
      <div className="relative">
        <Link href="/checkout" className="hover:text-orange-500">
          <ShoppingCart className="w-6 h-6" />
        </Link>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </nav>
  );
};
