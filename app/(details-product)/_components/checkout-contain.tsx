import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export const CheckoutContain = () => {
    return (
      <div>
        <div className="bg-[#F1F1F1]  container mx-auto px-20 py-12">
          {/* Back Button  */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 mb-8 hover:text-[#D87D4A]"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            <span>Go Back</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-8">
              <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>

              {/* Billing Details */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                  Billing Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Alexei Ward"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="romels064@mail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+237 697730696"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-8">
                <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                  Shipping Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label
                      htmlFor="address"
                      className="block text-sm font-medium mb-2"
                    >
                      Address
                    </Label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="3 rue bastos"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="zip"
                      className="block text-sm font-medium mb-2"
                    >
                      ZIP Code
                    </Label>
                    <Input
                      type="text"
                      id="zip"
                      placeholder="10001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="city"
                      className="block text-sm font-medium mb-2"
                    >
                      City
                    </Label>
                    <Input
                      type="text"
                      id="city"
                      placeholder="Yaounde"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="country"
                      className="block text-sm font-medium mb-2"
                    >
                      Country
                    </Label>
                    <Input
                      type="text"
                      id="country"
                      placeholder="Cameroun"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-[#D87D4A] font-bold text-sm uppercase mb-4">
                  Payment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Payment Method</p>
                  </div>
                  <div className="space-y-4">
                    <Label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                      <Input
                        type="radio"
                        name="payment"
                        value="e-money"
                        defaultChecked
                        className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
                      />
                      <span className="ml-3 font-medium">e-Money</span>
                    </Label>
                    <Label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                      <Input
                        type="radio"
                        name="payment"
                        value="cash"
                        className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
                      />
                      <span className="ml-3 font-medium">Cash on Delivery</span>
                    </Label>
                  </div>
                  <div>
                    <Label
                      htmlFor="e-money-number"
                      className="block text-sm font-medium mb-2"
                    >
                      e-Money Number
                    </Label>
                    <Input
                      type="text"
                      id="e-money-number"
                      placeholder="238521993"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="e-money-pin"
                      className="block text-sm font-medium mb-2"
                    >
                      e-Money PIN
                    </Label>
                    <Input
                      type="password"
                      id="e-money-pin"
                      placeholder="6891"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
              <h2 className="text-lg font-bold uppercase mb-6">Summary</h2>

              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {/* Item 1 */}
                <div className="flex items-center">
                  <div className="bg-[#F1F1F1] rounded-lg h-16 w-16 flex items-center justify-center mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="XX99 MK II"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">XX99 MK II</p>
                    <p className="text-gray-500">$ 2,999</p>
                  </div>
                  <div className="text-gray-500">x1</div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center">
                  <div className="bg-[#F1F1F1] rounded-lg h-16 w-16 flex items-center justify-center mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="XX59"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">XX59</p>
                    <p className="text-gray-500">$ 899</p>
                  </div>
                  <div className="text-gray-500">x2</div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center">
                  <div className="bg-[#F1F1F1] rounded-lg h-16 w-16 flex items-center justify-center mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="YX1"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">YX1</p>
                    <p className="text-gray-500">$ 599</p>
                  </div>
                  <div className="text-gray-500">x1</div>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">Total</p>
                  <p className="font-bold">$ 5,396</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">Shipping</p>
                  <p className="font-bold">$ 50</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase">VAT (Included)</p>
                  <p className="font-bold">$ 1,079</p>
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t">
                  <p className="text-gray-500 uppercase">Grand Total</p>
                  <p className="font-bold text-[#D87D4A]">$ 5,446</p>
                </div>
              </div>

              {/* Continue Button */}
              <Button className="w-full bg-[#D87D4A] text-white uppercase py-3 hover:bg-[#e69667] transition-colors">
                Continue & Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}