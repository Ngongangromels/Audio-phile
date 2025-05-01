import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";


export const NavBar = () => {
    return (
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-700">
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
        <div>
          <Link href="#">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    );
}