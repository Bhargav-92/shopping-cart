import type { CartItemProps } from '@/type/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ShoppingCartStore = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (item: Omit<CartItemProps, 'quantity'>) => void;
  decreseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: () => number;
  cartItems: CartItemProps[];
  setCartItems: (items: CartItemProps[]) => void;
};

export const useCart = create<ShoppingCartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      setCartItems: (items: CartItemProps[]) => set({ cartItems: items }),

      getItemQuantity: (id) => {
        return get().cartItems.find((item) => item.id === id)?.quantity || 0;
      },

      increaseCartQuantity: (itemData) => {
        const items = get().cartItems;
        const existing = items.find((item) => item.id === itemData.id);

        if (existing) {
          set({
            cartItems: items.map((item) =>
              item.id === itemData.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cartItems: [...items, { ...itemData, quantity: 1 }],
          });
        }
      },

      cartQuantity: () => {
        return get().cartItems.reduce(
          (quantity, item) => item.quantity + quantity,
          0
        );
      },

      decreseCartQuantity: (id) => {
        const items = get().cartItems;
        const existing = items.find((item) => item.id === id);

        if (existing?.quantity === 1) {
          set({
            cartItems: items.filter((item) => item.id !== id),
          });
        } else {
          set({
            cartItems: items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ),
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id),
        });
      },
    }),
    {
      name: 'shoppingCart', // localStorage key
      partialize: (state) => ({
        cartItems: state.cartItems,
        setCartItems: state.setCartItems,
      }),
    }
  )
);
