import Image from 'next/image';
import React from 'react';

interface IProductCardProps {}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-cool transition-transform overflow-hidden shadow-xl hover:scale-110">
      {/* Image */}
      <Image
        src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="Coffee"
        width={300}
        height={300}
      />
    </div>
  );
};

export default ProductCard;
