import NavLink from './NavLink';
import { navLinks } from '../../Data';
import React, { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-20 w-full">
      <div>
        <div className="container py-4 mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-teal uppercase tracking-wide font-bold">
              Huda Course
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
            Sign Up
          </button>
          {toggle && (
            <div className="fixed w-4/6 h-full top-0 left-0 z-20 bg-teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8 sm:hidden">
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    setToggle={setToggle}
                    {...navLink}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
