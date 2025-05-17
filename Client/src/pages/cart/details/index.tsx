import { CartDetailsTable } from '@/components/CartDetailTable';
import type { CartItemComponentProps } from '@/type/product';

const CartItem = ({ item }: CartItemComponentProps) => {
  return (
    <>
      <CartDetailsTable item={item} />
    </>
  );
};

export default CartItem;
