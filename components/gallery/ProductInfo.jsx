import { cn, formatter } from "@/lib//utils";
import Button from "@/components//ui/Button";
import { ShoppingBagIcon, ShoppingCart } from "lucide-react";

const ProductInfo = ({ data: { name, price, color } }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">{name}</h2>
      <p className="text-xl">{formatter.format(price)}</p>
      <p>
        Long-sleeved wool and kid mohair jumper
        <br />
        Fancy openwork knit Round
        <br />
        neckline closed by a shoulder placket Crochet buttons
        <br />
        Length from shoulder 56 cm / 22 in (for a S)
      </p>
      <div className="w-8 h-8 border border-gray-300 rounded-full p-[2px]">
        <div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: color.value }}
        ></div>
      </div>
      <Button className="flex gap-4 px-8 w-fit mt-4">
        <span>Add to cart</span>
        <ShoppingCart size={20} color="white" />
      </Button>
    </div>
  );
};

export default ProductInfo;
