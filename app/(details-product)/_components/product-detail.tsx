"use client"
// import { ProductCard } from "@/app/(marketing)/_components/product-Card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GalleryProduct } from "./gallery-product";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./cart-context";
import { Skeleton } from "@/components/ui/skeleton";

 interface ProductDetailProps {
  id: number
  title: string;
  description: string;
  price: string;
  image: string;
}

export const ProductDetail = ({id, title, description, price, image}: ProductDetailProps) => {
 

   const { handleAddToCart } = useCart();
  const router = useRouter()
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount((index) => index + 1);
  }
  
  const handleDecrement = () => {
    setCount((index) => (index > 1 ? index - 1 : 1));
  };

  const addToCart = () => {
    handleAddToCart({ id, title, image, price, count });
    router.push("/checkout");
  };

    return (
      <main className="">
        <div className="container mx-auto px-20 py-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            <span>GO BACK</span>
          </Link>

          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center p-8">
              { image === undefined ? (
                <Skeleton className="h-[400px] w-[400px] rounded-lg" />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              )                             

              }
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">
                {title}
              </h1>
              <p className="text-gray-500 mb-6">{description}</p>
              <p className="text-xl font-bold mb-8">{price}</p>
              <div className="flex space-x-4">
                <div className="flex items-center bg-[#F1F1F1] h-12">
                  <Button onClick={handleDecrement} className="px-4 h-full flex items-center justify-center text-gray-500 hover:text-[#D87D4A]">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{count}</span>
                  <Button onClick={handleIncrement} className="px-4 h-full flex items-center justify-center text-gray-500 hover:text-[#D87D4A]">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button onClick={addToCart} className="bg-[#D87D4A] text-white uppercase h-full py-3 px-8 hover:bg-[#e69667] transition-colors">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Features and In The Box */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
              <p className="text-gray-500 mb-4">
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you are taking a business call or
                just in your personal space, the auto on/off and pause features
                ensure that you ll never miss a beat.
              </p>
              <p className="text-gray-500">
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5. 0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase mb-6">In the box</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="text-[#D87D4A] font-bold mr-6">1x</span>
                  <span className="text-gray-500">Headphone Unit</span>
                </li>
                <li className="flex">
                  <span className="text-[#D87D4A] font-bold mr-6">2x</span>
                  <span className="text-gray-500">Replacement Earcups</span>
                </li>
                <li className="flex">
                  <span className="text-[#D87D4A] font-bold mr-6">1x</span>
                  <span className="text-gray-500">User Manual</span>
                </li>
                <li className="flex">
                  <span className="text-[#D87D4A] font-bold mr-6">1x</span>
                  <span className="text-gray-500">3.5mm 5m Audio Cable</span>
                </li>
                <li className="flex">
                  <span className="text-[#D87D4A] font-bold mr-6">1x</span>
                  <span className="text-gray-500">Travel Bag</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery */}
          {/* <div className="grid grid-cols-2 gap-6 mb-24">
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/personneHead.jpg"
                  alt="Person wearing headphones"
                  width={445}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/headPhonesDetails.jpg"
                  alt="Headphones with phone"
                  width={445}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/HeadPhoneGallery.jpg"
                alt="Headphones side view"
                width={445}
                height={580}
                className="object-cover w-full h-full"
              />
            </div>
          </div> */}

          {/* You May Also Like */}
          <GalleryProduct />
          {/* <div className="mb-24">
            <h2 className="text-2xl font-bold uppercase text-center mb-10">
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] rounded-lg w-full flex items-center justify-center p-8 mb-6">
                  <Image
                    src="/HeadPhoneGallerys3.png"
                    alt="XX99 MARK I"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold uppercase mb-6">XX99 Mark I</h3>
                <Link
                  href="/headphones/xx99-mark-i"
                  className="bg-[#D87D4A] text-white uppercase py-3 px-6 hover:bg-[#e69667] transition-colors"
                >
                  See Product
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] rounded-lg w-full flex items-center justify-center p-8 mb-6">
                  <Image
                    src="/HeadPhoneGallery2.png"
                    alt="XX59"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold uppercase mb-6">XX59</h3>
                <Link
                  href="/headphones/xx59"
                  className="bg-[#D87D4A] text-white uppercase py-3 px-6 hover:bg-[#e69667] transition-colors"
                >
                  See Product
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#F1F1F1] rounded-lg w-full flex items-center justify-center p-8 mb-6">
                  <Image
                    src="/Speakers1.png"
                    alt="ZX9 SPEAKER"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold uppercase mb-6">ZX9 Speaker</h3>
                <Link
                  href="/speakers/zx9"
                  className="bg-[#D87D4A] text-white uppercase py-3 px-6 hover:bg-[#e69667] transition-colors"
                >
                  See Product
                </Link>
              </div>
            </div>
          </div> */}

          {/* Categories */}
          <div className="w-full mb-10">{/* <ProductCard/> */}</div>

          {/* About Section */}
          <section className="mb-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold uppercase">
                  Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
                  audio gear
                </h2>
                <p className="text-gray-400">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
}