import React from 'react';
import type { ProductData } from './home-products.types';

interface IProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const {
    product = {
      thumbnail:
        'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      name: 'Latte',
      nameColor: 'white',
    },
  } = props;

  return (
    <div
      className="flex bg-center bg-cover m-4 w-80 h-80 transition-transform drop-shadow-2xl hover:scale-110"
      style={{ backgroundImage: `url(${product.thumbnail})` }}
    >
      <div className="flex flex-col">
        {/* Name */}
        <div
          className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl  font-semibold"
          style={{
            color: product.nameColor,
          }}
        >
          {product.name}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
