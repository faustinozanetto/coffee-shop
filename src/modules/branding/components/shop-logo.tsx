import React from 'react';
import { Text } from '@chakra-ui/react';

interface IShopLogoProps {}

const ShopLogo: React.FC<IShopLogoProps> = (props) => {
  const {} = props;
  return (
    <Text as="span" fontWeight={700} fontSize={30} color="orange.400">
      Klangs Coffee
    </Text>
  );
};

export default ShopLogo;
