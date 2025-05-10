"use client";

import { useEffect, useState } from "react";
import { ProductGallery } from "../_components/product-gallery";

import { Skeleton } from "@/components/ui/skeleton";
import { NavBarProduct } from "@/app/(details-product)/_components/nav-bar";
import { Footer } from "../_components/footer";

const GalleryPage = () => {
  interface Product {
    id: number;
    title: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/product/allProduct" );
        if (!response.ok) {
          throw new Error("an error occurred during data loading");
        }
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <NavBarProduct />
      <div className="container mx-auto px-20 py-8">
        {products.length === 0 && (
          <div className="flex flex-row space-x-3">
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
          </div>
        )}
        {products.length > 0 && (
          <div className="grid grid-cols-2 gap-6 mb-24">
            {products.map((product) => (
              <ProductGallery
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
