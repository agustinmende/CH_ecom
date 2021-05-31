import { NavLink} from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const TopBar = () => {
  return (
  <div className="TopBar">
      <CartWidget/>
  </div>
  );
}

export default TopBar;