import { NavLink} from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const TopBar = () => {
  return (
  <div className="TopBar topbaractive">
    <a className="instagram" href="https://instagram.com/zzzzzzzzz" target="_blank"><img src="/images/top_nav_instagram.png" alt="" /></a>
    <CartWidget/>
  </div>
  );
}

export default TopBar;