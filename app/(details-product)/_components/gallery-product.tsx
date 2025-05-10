"use client"
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export const GalleryProduct = () => {
  interface Product {
    id: string;
    title: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([])
   
  useEffect(()=> {
       const fectProducts = async () => {
        try {
          const response = await fetch("/api/product/allProduct")

            if(!response.ok){
              throw new Error("Failed to fetch products")
            }

            const data = await response.json()
            setProducts(data)

          
        } catch (error) {
            console.error(error)
        }
       }

       fectProducts()
  }, [])

  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {products.length === 0 && (
          <div className="flex flex-row space-x-3">
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
            <Skeleton className="h-[350px] w-[450px] rounded-xl" />
          </div>
        )}

        {products.length > 0 &&
          products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#F1F1F1] rounded-lg w-full flex items-center justify-center p-8 mb-6">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold uppercase mb-6">
                        {product.title}
                      </h3>
                      <Link
                        href={`/details/${product.id}`}
                        className=" text-[#D87D4A] "
                      >
                        See Product
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
