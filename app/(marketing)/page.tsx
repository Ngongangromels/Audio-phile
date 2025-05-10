"use client"

import { useEffect, useState } from "react"
import { Footer } from "./_components/footer"
import { Hero } from "./_components/hero"
import { ProductCard } from "./_components/product-Card"
import { ProductSection } from "./_components/product-section"

import { Skeleton } from "@/components/ui/skeleton";


const MarketingPage = () => {
  interface Product {
    id: string;
    title: string;
    image: string;
  }

  const [headPhone, setHeadPhone] = useState<Product>()
  const [speakers, setSpeakers] = useState<Product>()
  const [earPhones, setEarPhones] = useState<Product>()

 useEffect(() => {
    const fetchHeadPhone = async () => {
        try {
            const response = await fetch('/api/product/head-phone')
            if(!response.ok) {
                throw new Error("an error occurred during data loading");
            }
            const data = await response.json()
            setHeadPhone(data)
            
        } catch (error) {
            console.error("Error fetching headphone data:", error)
        }
    }

   fetchHeadPhone()
 }, [])

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch("/api/product/speaker");
        if (!response.ok) {
          throw new Error("an error occurred during data loading");
        }
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error("Error fetching speakers data:", error);
      }
    };

    fetchSpeakers();
  }, []);

  useEffect(() => {
    const fetchEarPhone = async () => {
      try {
        const response = await fetch("/api/product/eard-phone");
        if (!response.ok) {
          throw new Error("an error occurred during data loading");
        }
        const data = await response.json();
        setEarPhones(data);
      } catch (error) {
        console.error("Error fetching earphone data:", error);
      }
    };

    fetchEarPhone();
  }, []);

  if (headPhone === undefined && speakers === undefined && earPhones === undefined) {
     setTimeout(() => {
      return (
        <div className="flex flex-row space-x-3">
          <Skeleton className="h-[350px] w-[450px] rounded-xl" />
          <Skeleton className="h-[350px] w-[450px] rounded-xl" />
          <Skeleton className="h-[350px] w-[450px] rounded-xl" />
        </div>
      )

     }, 5000)
  }

    return (
      <div className="min-h-full flex flex-col">
        <Hero />
        <section className="bg-white  py-40">
          <div className="container w-full mx-auto  px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {headPhone && (
                <ProductCard
                  id={parseInt(headPhone.id)}
                  title={headPhone.title}
                  image={headPhone.image || "/default-image.jpg"}
                />
              )}
              {speakers && (
                <ProductCard
                  id={parseInt(speakers.id)}
                  title={speakers.title}
                  image={speakers.image || "/default-image.jpg"}
                />
              )}
              {earPhones && (
                <ProductCard
                  id={parseInt(earPhones.id)}
                  title={earPhones.title}
                  image={earPhones.image || "/default-image.jpg"}
                />
              )}
            </div>
          </div>
        </section>

        <ProductSection />
        <Footer />
      </div>
    );
}

export default MarketingPage