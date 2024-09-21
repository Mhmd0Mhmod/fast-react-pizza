import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from './cartSlice';

function CartOverview() {
  const cart = useSelector(getCart);
  const numOfPizza = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  if (!cart.length) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{numOfPizza} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to={'/cart'}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
