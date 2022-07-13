import React from 'react';
import { Text } from '@chakra-ui/react';

interface IShopLogoProps {}

const ShopLogo: React.FC<IShopLogoProps> = (props) => {
  return (
    <Text as="span" fontWeight={700} fontSize={30} color="white">
      CoffeeShop
    </Text>
  );
};

export default ShopLogo;
