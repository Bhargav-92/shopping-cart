import MainLayout from '@/layouts/MainLayout';
import About from '@/pages/about';
import CancelPage from '@/pages/cancel';
import ShoppingCartDetails from '@/pages/cart';
import Home from '@/pages/home';
import Store from '@/pages/store';
import SuccessPage from '@/pages/success';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/cart',
        element: <ShoppingCartDetails />,
      },
      {
        path: '/success',
        element: <SuccessPage />,
      },
      {
        path: '/cancel',
        element: <CancelPage />,
      },
    ],
  },
];
