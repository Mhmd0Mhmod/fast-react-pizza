import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className='border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 flex justify-between items-center'>
      <Link to='/' className='tracking-widest'>
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
