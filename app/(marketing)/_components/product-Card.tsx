import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
}

export const ProductCard = ({
  id,
  title,
  image
}: ProductCardProps) => {
  return (
          <div className="bg-[#F1F1F1] rounded-lg p-6 text-center relative pt-20">
            <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2">
              <Image
                src={image}
                alt={title}
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <h3 className="font-bold uppercase mb-4">{title}</h3>
            <Link
              href={`/details/${id}`}
              className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
            >
              <span>Shop</span>
              <ChevronRight className="h-4 w-4 mr-2" />
            </Link>
          </div>
  );
};
