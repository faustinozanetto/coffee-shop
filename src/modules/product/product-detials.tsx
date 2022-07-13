import React, { useEffect } from 'react';
import { Text, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ProductDetailsType } from './product-details.types';

export interface IProductDetailsProps {
  product: ProductDetailsType;
}

const ProductDetails: React.FC<IProductDetailsProps> = (props) => {
  const { product } = props;

  return (
    <motion.div
      initial="hidden"
      exit="hidden"
      animate="visible"
      whileInView="visible"
      transition={{
        type: 'spring',
        bounce: 0.25,
        duration: 1,
      }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 200 },
      }}
    >
      <Grid gap={4} margin={4} padding={4} gridTemplateColumns="1fr 1fr" gridTemplateRows="500px">
        {/* Left */}
        <GridItem>
          {product && <Image src={product.thumbnail} alt={product.name} width="100%" height="100%" objectFit="cover" />}
        </GridItem>

        {/* Right */}
        <GridItem>
          {/* Name */}
          <Text fontSize="4xl" fontWeight={700} color="orange.500">
            {product && product.name}
          </Text>
          {/* Description */}
          <Text as="p" fontSize="xl" fontWeight={400} color="white">
            {product && product.description}
          </Text>
        </GridItem>
      </Grid>
    </motion.div>
  );
};

export default ProductDetails;
