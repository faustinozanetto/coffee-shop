import React, { useMemo, useState } from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, Image, Button, HStack } from '@chakra-ui/react';
import ProductDetails, { IProductDetailsProps } from '@modules/product/product-detials';
import { ProductDetailsType } from '@modules/product/product-details.types';
import ProductSelector from '@modules/product/product-selector';

interface IHomeProductsProps {}

const PRODUCTS: ProductDetailsType[] = [
  {
    id: 1,
    thumbnail:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Macchiato',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 2,
    thumbnail:
      'https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cappuccino',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    name: 'Espresso',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1562447457-579fc34967fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cold',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 5,
    thumbnail:
      'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Americano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 6,
    thumbnail:
      'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Latte',
    description: '',
  },
];

const HomeProducts: React.FC<IHomeProductsProps> = (props) => {
  const {} = props;
  const [selectedProductID, setSelectedProductID] = useState<number>(1);

  const getSelectedProduct = useMemo(() => {
    return PRODUCTS.find((prod) => prod.id === selectedProductID);
  }, [selectedProductID]);

  return (
    <Section backgroundColor="black">
      <Flex flexDir="column">
        {/* Top */}
        <VStack width="100%" spacing={4}>
          {/* Texts */}
          <Text as="h1" fontSize="3em" fontWeight={700} color="white" lineHeight={1}>
            Our Products
          </Text>
          <Text as="h2" fontSize="1.75em" fontWeight={400} color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </VStack>

        {/* Bottom */}
        <HStack spacing={4}>
          {/* Product Selector */}
          <ProductSelector />
          {/* Product */}
          <ProductDetails product={getSelectedProduct} />
        </HStack>
      </Flex>
    </Section>
  );
};

export default HomeProducts;
