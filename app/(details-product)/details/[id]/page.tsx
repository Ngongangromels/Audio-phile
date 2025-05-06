"use client";

import { NavBarProduct } from "../../_components/nav-bar";
import { ProductDetail } from "../../_components/product-detail";
import { Footer } from "@/app/(marketing)/_components/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const DetailsProduct = () => {
  interface ProductId {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
  }

  const { id } = useParams()
//   const router = useRouter();

  const [productId, setProductId] = useState<ProductId | undefined>();

  useEffect(() => {
     if (!id) return;
    const fetchProductId = async () => {
      const response = await fetch(`/api/product/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      setProductId(data);
    };

    fetchProductId();
  }, [id]);
  return (
    <div>
      <NavBarProduct />
      {productId && (
        <ProductDetail
          id={productId.id}
          title={productId.title}
          description={productId.description}
          price={productId.price}
          image={productId.image}
        />
      )}
      <Footer />
    </div>
  );
};

export default DetailsProduct;
