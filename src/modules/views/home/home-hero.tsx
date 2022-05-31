import Section from '@modules/sections/components/section';
import React from 'react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section
      hasDivider={false}
      fullHeight
      backgroundIsImage
      backgroundImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    >
      <div className="flex flex-col items-center">
        {/* Main title */}
        <div className="py-8 text-center">
          <h1 className="font-black text-9xl text-white">Coffe Shop</h1>
          <h3 className="text-2xl text-white">A different approach to Coffee</h3>
        </div>
        <button
          className="px-14 py-3 text-base rounded-none font-medium text-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
        >
          Learn More
        </button>
      </div>
    </Section>
  );
};

export default HomeHero;
