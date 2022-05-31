import React from 'react';
import Image from 'next/image';
import Section from '@modules/sections/components/section';
import ProductCard from './product-card';

interface IHomeProductsProps {}

const HomeProducts: React.FC<IHomeProductsProps> = (props) => {
  const {} = props;

  return (
    <Section hasDivider={false} centerContent backgroundColor="#DAD8D3">
      <div className="flex flex-col">
        {/* Top */}
        <div>
          <h2 className="font-semibold text-5xl text-gray-900 text-center mb-2">Our Products</h2>
          <p className="font-normal text-md text-gray-900 text-center">
            We offer over 20 different flavors of coffee, from our own beans to the best in the world.
          </p>
        </div>
        {/* Bottom */}
        <div className="grid grid-cols-3 py-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="flex flex-col items-center justify-center p-2" key={i}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HomeProducts;
