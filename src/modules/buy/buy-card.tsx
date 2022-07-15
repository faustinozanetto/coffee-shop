import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import type { ProductBuyType } from './buy-card.types';

interface IBuyCardProps {
  productData: ProductBuyType;
}

const BuyCard: React.FC<IBuyCardProps> = (props) => {
  const { productData } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Flex
        backgroundImage={productData.thumbnail}
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
        alignItems="flex-end"
        cursor="pointer"
        width="100%"
        height="100%"
      >
        <Text
          as="p"
          fontSize="3xl"
          fontWeight={900}
          lineHeight="1"
          padding={2}
          margin={2}
          backgroundColor="white"
          color="black"
        >
          {productData.price}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default BuyCard;
