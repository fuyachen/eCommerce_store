import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

const useCart = create(
  persist(
    (set, get) => ({
      itmes: [],
      addItem: (data) => {
        const currentItems = get().items;
        if (!currentItems) {
          set({ items: [data] });
          return toast.success("Product add to cart");
        }
        // 是否已经存在重复商品
        const existingItem = currentItems?.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.error("Product already in cart.");
        } else {
          set({ items: [...get().items, data] });
          toast.success("Product add to cart");
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Product removed from cart");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
