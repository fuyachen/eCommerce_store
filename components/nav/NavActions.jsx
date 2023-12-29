"use client";

import { ShoppingBag } from "lucide-react";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const router = useRouter();
  const { items } = useCart();
  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items?.length || 0}
        </span>
      </Button>
    </div>
  );
};

export default NavActions;
