"use client";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";

const ProductCard = ({ data: product }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };
  return (
    <div
      className="group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gary-100 relative">
        <Image
          src={product?.images?.[0].url}
          fill
          alt="image"
          className="object-cover rounded-md"
        />
        {/* hover 时才出现 */}
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-4 transition-opacity w-full px-6">
          <div className="flex justify-end gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-black" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-black" />}
            />
          </div>
        </div>
        {/* description */}
      </div>
      <div>
        <p className=" font-semibold text-lg">{product?.name}</p>
        <p className="text-gray-500 text-md">{product?.category?.name}</p>
      </div>
      {/* price */}
      <Currency value={product?.price} />
    </div>
  );
};

export default ProductCard;
