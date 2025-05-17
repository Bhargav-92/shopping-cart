import { useCart } from '@/store/shoppingCart';
import CartItem from './details';

const ShoppingCartDetails = () => {
  const { cartItems } = useCart();
  console.log('cartItems', cartItems);
  return (
    <div className="mt-6">
      <CartItem item={cartItems} />
    </div>
  );
};

export default ShoppingCartDetails;
