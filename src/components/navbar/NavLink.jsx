import React from 'react';
import { Link } from 'react-scroll';

const NavLink = (props) => {
  const { id, link, href } = props;
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-medium duration-300 transition-all"
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
