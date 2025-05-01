import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = () => {
    return (
      <section className="bg-white py-40">
        <div className="container mx-auto  px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Headphones Category */}
            <div className="bg-[#F1F1F1] rounded-lg p-6 text-center relative pt-20">
              <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
                <Image
                  src="/headphonecard1.png"
                  alt="Headphones"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold uppercase mb-4">Headphones</h3>
              <Link
                href="details"
                className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
              >
                <span>Shop</span>
                <ChevronRight className="h-4 w-4 mr-2" />
              </Link>
            </div>

            {/* Speakers Category */}
            <div className="bg-[#F1F1F1] rounded-lg p-6 text-center relative pt-20">
              <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2">
                <Image
                  src="/Speakers1.png"
                  alt="Speakers"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold uppercase mb-4">Speakers</h3>
              <Link
                href="details"
                className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
              >
                <span>Shop</span>
                <ChevronRight className="h-4 w-4 mr-2" />
              </Link>
            </div>

            {/* Earphones Category */}
            <div className="bg-[#F1F1F1] rounded-lg p-6 text-center relative pt-20">
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
                <Image
                  src="/EarPhones1.png"
                  alt="Earphones"
                  width={150}
                  height={250}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold uppercase mb-4">Earphones</h3>
              <Link
                href="details"
                className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
              >
                <span>Shop</span>
                <ChevronRight className="h-4 w-4 mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}