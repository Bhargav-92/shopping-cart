
import { useCart } from '@/store/shoppingCart'
import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router'

const Appbar = () => {
  const navigate = useNavigate();
const {cartQuantity} = useCart();

const menuItem = [
  {'name': 'Home', 'url': '/'},
  {'name': 'Store', 'url': '/store'},
  {'name': 'About', 'url': '/about'},
]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">ShopEasy</div>

          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {menuItem.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-blue-600">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative" onClick={()=> navigate('/cart')}>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">{cartQuantity()}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Appbar
