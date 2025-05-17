import MainLayout from "@/layouts/MainLayout";
import  About from "@/pages/about";
import ShoppingCartDetails from "@/pages/cart";
import Home from "@/pages/home";
import Store from "@/pages/store";

export const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/store',
        element: <Store/>,
      },
      {
        path: '/cart',
        element: <ShoppingCartDetails/>,
      },
    ]
  },
];
