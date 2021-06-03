import { NavLink} from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const TopBar = () => {
  return (
  <div className="TopBar">
    <NavLink className="instagram" to="#"><img src="/images/top_nav_instagram.png" alt="" /></NavLink>
    <CartWidget/>
  </div>
  );
}

export default TopBar;