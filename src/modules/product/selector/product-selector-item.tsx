import { Text } from '@chakra-ui/react';
import React from 'react';

interface IProductSelectorItemProps {
  productId: number;
  name: string;
  onSelected: (id: number) => void;
}

const ProductSelectorItem: React.FC<IProductSelectorItemProps> = (props) => {
  const { productId, name, onSelected } = props;

  return (
    <Text
      fontSize="xl"
      fontWeight={600}
      color="white"
      cursor="pointer"
      textAlign="left"
      _hover={{ color: 'orange.500' }}
      onClick={() => onSelected(productId)}
    >
      {name}
    </Text>
  );
};

export default ProductSelectorItem;
