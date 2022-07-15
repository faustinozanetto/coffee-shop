import { Grid, Text, VStack } from '@chakra-ui/react';
import { BUY_PRODUCTS } from '@lib/contants';
import BuyCard from '@modules/buy/components/buy-card';
import Section from '@modules/section/components/section';
import React from 'react';

interface IHomeBuyProps {}

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
          {BUY_PRODUCTS.map((product, index) => {
            return <BuyCard productData={product} key={index} />;
          })}
        </Grid>

        {/* <Button size="lg">See More</Button> */}
      </VStack>
    </Section>
  );
};

export default HomeBuy;
