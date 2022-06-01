import React from 'react';
import Section from '@modules/sections/components/section';
import ProductCard from './product-card';
import type { ProductData } from './home-products.types';

interface IHomeProductsProps {}

const PRODUCTS: Partial<ProductData>[] = [
  {
    thumbnail:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Macchiato',
    nameColor: 'black',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cappuccino',
    nameColor: 'white',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    name: 'Espresso',
    nameColor: 'white',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1562447457-579fc34967fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cold',
    nameColor: 'black',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Americano',
    nameColor: 'white',
  },
  {
    thumbnail:
      'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Latte',
    nameColor: 'black',
  },
];

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
          {PRODUCTS.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HomeProducts;
