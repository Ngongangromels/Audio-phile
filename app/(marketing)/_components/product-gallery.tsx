import Image from "next/image";
import { useRouter } from "next/navigation";

 interface ProductGalleryProps {
    id: number;
    title: string;
    image: string
 }

export const ProductGallery = ({id, title, image}: ProductGalleryProps) => {
   const router = useRouter()

  return (
    
      <div className="">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              onClick={() => router.push(`/details/${id}`)}
              width={445}
              height={280}
              className="object-cover w-full h-full"
            />
          </div>
      </div>
  );
};
