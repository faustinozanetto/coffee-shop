import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IProductSelectorItemProps {
  /* Product ID */
  productId: number;
  /* Product name */
  name: string;
  /* Callback when the product is selected */
  onSelected: (id: number) => void;
}

const ProductSelectorItem: React.FC<IProductSelectorItemProps> = (props) => {
  const { productId, name, onSelected } = props;

  return (
    <motion.text
      whileHover="animate"
      transition={{
        type: 'spring',
        bounce: 0.25,
        duration: 0.5,
      }}
      variants={{
        animate: { translateY: 5 },
      }}
    >
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
    </motion.text>
  );
};

export default ProductSelectorItem;
