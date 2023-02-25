import React from 'react';
import { Link } from 'react-scroll';

const MobileNavLinks = (props) => {
  const { id, link, href, setToggle } = props;
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-medium duration-300 transition-all"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;
