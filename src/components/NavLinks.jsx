import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <ul>
        <li>
          <NavLink to="/">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/localPickup">Local Pickup</NavLink>
        </li>
        <li>
          <NavLink to="catering">Catering</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
