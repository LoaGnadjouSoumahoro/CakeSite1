import { Link, NavLink } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { ShoppingCartSharp } from '@mui/icons-material';

const NavLinks = () => {
  return (
    <div className='nav'>
      <nav className='navLeft'>
        <li>
          <NavLink to='/' className='logo'>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to='/localPickup'>Local Pickup</NavLink>
        </li>
        <li>
          <NavLink to='/catering'>Catering</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Menu</NavLink>
        </li>

        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </nav>

      <nav className='navRight'>
        <li>
          <Link to='about'>Location</Link>
        </li>
        <li>
          <Link to='/about'>
            <ShoppingCartSharp />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <button>Oder Online</button>
          </Link>
        </li>
      </nav>
    </div>

    // <div className='nav'>
    //   <ul className='navLinks'>
    //     <li>
    //       <NavLink to='/' className='logo'>
    //         Order Online
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/localPickup'>Local Pickup</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/catering'>Catering</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/menu'>Menu</NavLink>
    //     </li>

    //     <li>
    //       <NavLink to='/about'>About</NavLink>
    //     </li>
    //     <li>
    //       <Link to='about'>Location</Link>
    //     </li>
    //     <li>
    //       <Link to='/about'>About</Link>
    //     </li>
    //     <li>
    //       <Link to='/about' className='linkRight'>
    //         <button>Oder Online</button>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default NavLinks;
