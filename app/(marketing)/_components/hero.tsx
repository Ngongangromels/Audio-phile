import Image from "next/image";
import { NavBar } from "./nav-bar"
import Link from "next/link";


export const Hero = () => {
    return (
      <section className="bg-black text-white">
        <NavBar />
        <div className="max-w-7xl mx-auto px-6   flex flex-col md:flex-row items-center">
          <div className="flex-2">
            <p className="text-gray-600 tracking-widest uppercase mb-4">
              New Product
            </p>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-gray-400 mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/gallery" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md uppercase tracking-wider">
              See Product
            </Link>
          </div>
          <div className="flex-2 mt-0 md:mt-0 flex justify-center">
            <Image
              src="/HEARDPHONE4.png"
              width={800}
              height={500}
              alt="Headphones"
              className="border-none object-contain"
              object-cover
            />
          </div>
        </div>
      </section>
    );
}