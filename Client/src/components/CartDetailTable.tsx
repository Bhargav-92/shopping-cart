import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import formatCurrency from '@/utils/formatCurrency';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/store/shoppingCart';
import type { CartItemComponentProps } from '@/type/product';
import { Textarea } from './ui/textarea';
const url = import.meta.env.VITE_PORT;

export function CartDetailsTable({ item }: CartItemComponentProps) {
  const cartItems = localStorage.getItem('shoppingCart');
  const { decreseCartQuantity, increaseCartQuantity } = useCart();
  const handleTotalBill = () => {
    let total = 0;
    item.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleCheckOut = async () => {
    console.log('shopping cart', cartItems);

    await fetch(`${url}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: item }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //forwarding user to the stripe
        }
      });
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {item.map((item) => (
            <TableRow key={item.id} className="w-full">
              <TableCell className="font-medium flex items-center">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded border"
                />
                <div className="p-4 flex item-center gap-4">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center space-x-2 justify-end">
                  <Button
                    className="bg-red-700 hover:bg-red-700"
                    onClick={() => decreseCartQuantity(item.id)}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <p className="text-gray-600">{item.quantity} in cart</p>
                  <Button
                    className="bg-green-600 hover:bg-green-600"
                    onClick={() =>
                      increaseCartQuantity({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        imgUrl: item.imgUrl,
                      })
                    }>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(item.price * item.quantity)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-8 flex gap-5">
        <div className="bg-gray-50 p-4 rounded-lg flex-1">
          <label
            htmlFor="notes"
            className="block text-md text-left font-semibold  mb-2">
            Other special instructions
          </label>
          <Textarea
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full border border-gray-300 rounded-md p-2 min-h-24"
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-xl font-bold">
                {formatCurrency(parseFloat(handleTotalBill()))}
              </span>
            </div>
            <div className="text-sm text-gray-500 italic">
              Taxes and shipping calculated at checkout
            </div>
            <Button
              className="w-full py-3 bg-black font-medium text-lg rounded-md"
              onClick={handleCheckOut}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
