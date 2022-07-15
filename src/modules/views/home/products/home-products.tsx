import React, { useMemo } from 'react';
import Section from '@modules/section/components/section';
import { Text, Box, Flex, VStack } from '@chakra-ui/react';
import ProductDetails from '@modules/product/components/details/product-details';
import ProductSelector from '@modules/product/components/selector/product-selector';
import { useSelector } from 'react-redux';
import { selectProductSelectorState } from '@state/slices/product-selector.slice';
import { AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '@lib/contants';

interface IHomeProductsProps {}

const HomeProducts: React.FC<IHomeProductsProps> = (props) => {
  const {} = props;
  const selectedProductID = useSelector(selectProductSelectorState);

  /* Returns the current selected product by the id in the redux state */
  const getSelectedProduct = useMemo(() => {
    return PRODUCTS.find((prod) => prod.id === selectedProductID);
  }, [selectedProductID]);

  /* Returns an array of tuples, containing the id and the name. Used in product selector component. */
  const getShopProducts: [number, string][] = useMemo(() => {
    return PRODUCTS.map((product) => [product.id, product.name]);
  }, []);

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
            We have a wide range of products to choose from.
          </Text>

          {/* Product Selector */}
          <ProductSelector products={getShopProducts} />
          <Box backgroundColor="orange.500" height="3px" width="100%" />
        </VStack>

        {/* Product */}
        <AnimatePresence>
          <ProductDetails product={getSelectedProduct} />
        </AnimatePresence>
      </Flex>
    </Section>
  );
};

export default HomeProducts;
