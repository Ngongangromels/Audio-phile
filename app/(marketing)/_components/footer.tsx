import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";


export const Footer = () => {
    return (
      <footer className="bg-black text-white py-12  mt-auto">
        <div className="container mx-auto px-20">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <Link href="/" className="text-xl font-bold">
                audiophile
              </Link>
              <p className="text-gray-400 max-w-md mt-6">
                Audiophile is an all in one stop to fulfill your audio needs. We
                are a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we are open 7 days a week.
              </p>
            </div>
            <nav className="mt-8 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 uppercase text-sm">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/headphones" className="hover:text-gray-300">
                Headphones
              </Link>
              <Link href="/speakers" className="hover:text-gray-300">
                Speakers
              </Link>
              <Link href="/earphones" className="hover:text-gray-300">
                Earphones
              </Link>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright 2025. All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <Link href="#" aria-label="Facebook">
                 <Facebook height={25} width={25} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter height={25} width={25}/>
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram height={25} width={25}/>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
}