import { Button } from '@/components/ui/button';
import { useCart } from '@/store/shoppingCart';
import type { CartItemProps } from '@/type/product';
import formatCurrency from '@/utils/formatCurrency';
import { Minus, Plus } from 'lucide-react';

const StoreItems = ({ id, name, price, imgUrl }: CartItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
        <img src={imgUrl} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{formatCurrency(price)}</p>
      </div>
      {quantity > 0 ? (
        <>
          <div className="flex items-center space-x-2 justify-center">
            <Button
              className="bg-red-700 hover:bg-red-700"
              onClick={() => decreseCartQuantity(id)}>
              <Minus className="w-4 h-4" />
            </Button>
            <p className="text-gray-600">{quantity} in cart</p>
            <Button
              className="bg-green-600 hover:bg-green-600"
              onClick={() => increaseCartQuantity({ id, name, price, imgUrl })}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={() => removeFromCart(id)}
            className="bg-red-700 hover:bg-red-700 mt-3">
            Remove
          </Button>
        </>
      ) : (
        <Button
          onClick={() => increaseCartQuantity({ id, name, price, imgUrl })}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default StoreItems;
