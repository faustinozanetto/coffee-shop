import React from 'react';
import { Flex, Text, Image, Stack } from '@chakra-ui/react';
import type { ProductDetailsType } from './product-details.types';

export interface IProductDetailsProps {
  product: ProductDetailsType;
}

const ProductDetails: React.FC<IProductDetailsProps> = (props) => {
  const { product } = props;

  return (
    <Stack direction="row" padding={8} spacing={6}>
      {/* Left */}
      <Flex flexDir="column">
        {/* Image */}
        {product && <Image src={product.thumbnail} alt={product.name} />}
      </Flex>

      {/* Right */}
      <Flex flexDir="column" width="full" marginLeft="auto">
        {/* Name */}
        <Text fontSize="4xl" fontWeight={700} color="orange.500">
          {product && product.name}
        </Text>
        {/* Description */}
        <Text as="p" fontSize="xl" fontWeight={400} color="white">
          {product && product.description}
        </Text>
      </Flex>
    </Stack>
  );
};

export default ProductDetails;
