import React from 'react';
import { logos } from '../../Data';
import hero from '../../assets/hero.png';

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-teal mb-4">
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 max-w-sm text-gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor id
            nisi voluptatibus, esse reprehenderit vitae.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-teal text-sm rounded-lg text-white font-bold mr-4 border transition-all duration-300 border-solid border-teal hover:bg-transparent hover:text-gray">
              Get Started
            </button>
            <button className="px-6 py-3 border border-solid border-gray transition-all duration-300 text-sm rounded-lg font-bold mr-4 hover:bg-teal hover:text-white hover:border-teal">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center sm:text-xl text-lg">
          We collaborate with{' '}
          <span className="text-teal">
            100+ leading universities and companies
          </span>
        </p>
        <div className="flex flex-wrap justify-center items-center md:gap-8 gap-2">
          {logos.map((logo, index) => (
            <div key={index} className="w-28">
              <img src={logo} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
