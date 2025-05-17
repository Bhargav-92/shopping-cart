export type CartItemProps = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

export type CartItemComponentProps = {
  item: CartItemProps[];
};
