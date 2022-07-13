import React from 'react';
import { VStack } from '@chakra-ui/react';
import { setSelectedProduct } from '@state/slices/product-selector.slice';
import { useDispatch } from 'react-redux';
import ProductSelectorItem from './product-selector-item';
import { AnimatePresence, motion } from 'framer-motion';

interface IProductSelectorProps {
  products: [number, string][];
}

const ProductSelector: React.FC<IProductSelectorProps> = (props) => {
  const { products } = props;
  const dispatch = useDispatch();

  /* Handles the product selected callback from the ProductSelectorItem. */
  const handleSelectedProduct = (id: number) => {
    dispatch(setSelectedProduct(id));
  };

  return (
    <VStack spacing={4} padding={4}>
      {products.map((product, id) => (
        <ProductSelectorItem key={id} productId={product[0]} name={product[1]} onSelected={handleSelectedProduct} />
      ))}
    </VStack>
  );
};

export default ProductSelector;
