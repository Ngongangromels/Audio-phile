import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export const ProductSection = () => {
    return (
      <div className="px-20">
        <section className="container mx-auto py-2">
          <div className="bg-[#D87D4A] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <Image
                  src="/Speakerss.png"
                  alt="ZX9 Speaker"
                  width={300}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase">
                  ZX9
                  <br />
                  Speaker
                </h2>
                <p className="text-white/75 max-w-md">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                
                  <Button>
                    <Link
                      href="/gallery"
                      className=" text-white uppercase py-3 px-6"
                    >
                      See Product
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ZX7 Speaker Feature */}
        <section className="container mx-auto  py-4">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center">
            <div className="absolute right-0 h-full w-full">
              <Image
                src="/tableSpeakerss.png"
                alt="ZX7 Speaker"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 p-12 md:p-16">
              <h2 className="text-3xl font-bold uppercase mb-6">ZX7 Speaker</h2>
              <Link
                href="/gallery"
                className="inline-block bg-transparent border border-black text-black uppercase py-3 px-6 hover:bg-black hover:text-white transition-colors"
              >
                See Product
              </Link>
            </div>
          </div>
        </section>

        {/* YX1 Earphones Feature */}
        <section className="container mx-auto  py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
              <Image
                src="/EarPhone2.jpg"
                alt="YX1 Earphones"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold uppercase mb-6">
                YX1 Earphones
              </h2>
              <Link
                href="/gallery"
                className="inline-block bg-transparent border border-black text-black uppercase py-3 px-6 hover:bg-black hover:text-white transition-colors w-fit"
              >
                See Product
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto  py-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase">
                Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
                audio gear
              </h2>
              <p className="text-gray-500">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/personneHead.jpg"
                alt="Person with headphones"
                width={700}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    );
}