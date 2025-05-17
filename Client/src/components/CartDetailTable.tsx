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

export function CartDetailsTable({ item }: CartItemComponentProps) {
  const { decreseCartQuantity, increaseCartQuantity } = useCart();

  const handleTotalBill = () => {
    let total = 0;
    item.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
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
                className="w-20 h-20 object-cover  rounded border"
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
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{handleTotalBill()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
