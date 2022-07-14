import { Box, Button, Grid, Text, VStack } from '@chakra-ui/react';
import BuyCard from '@modules/buy/buy-card';
import type { ProductBuyType } from '@modules/buy/buy-card.types';
import Section from '@modules/section/section';
import React from 'react';

interface IHomeBuyProps {}

const PRODUCTS: ProductBuyType[] = [
  {
    id: 1,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1605711599412-775918dbe770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1611854778863-0c4d1bae5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvZmZlZSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1512585285324-1649f5fd2c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1623088188177-50d2c3a75002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1613410034014-18cc91dc1e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const HomeBuy: React.FC<IHomeBuyProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <VStack spacing={6}>
        {/* Top */}
        <VStack width="100%" spacing={4}>
          {/* Texts */}
          <Text as="h1" fontSize="3em" fontWeight={700} color="white" lineHeight={1}>
            Buy from us
          </Text>
          <Text as="h2" fontSize="1.75em" fontWeight={400} color="white">
            If you feel like supporting us, you can buy our products.
          </Text>
        </VStack>

        {/* Bottom */}
        <Grid gridTemplateColumns="repeat(3, 350px)" gridAutoRows="350px" margin={4} padding={6} gap={4}>
          {PRODUCTS.map((product, index) => {
            return <BuyCard productData={product} key={index} />;
          })}
        </Grid>

        {/* <Button size="lg">See More</Button> */}
      </VStack>
    </Section>
  );
};

export default HomeBuy;
