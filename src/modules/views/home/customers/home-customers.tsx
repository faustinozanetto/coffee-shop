import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, Image, Button, Grid, GridItem, Divider } from '@chakra-ui/react';
import CustomerCard from '@modules/customers/customer-card';

interface IHomeCustomersProps {}

const HomeCustomers: React.FC<IHomeCustomersProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <Flex flexDir="column">
        {/* Top */}
        <VStack width="100%" spacing={4}>
          {/* Texts */}
          <Text as="h1" fontSize="3em" fontWeight={700} color="white" lineHeight={1}>
            What Our Customers Says
          </Text>
          <Text as="h2" fontSize="1.75em" fontWeight={400} color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </VStack>

        {/* Botton */}
        <Flex padding={4} justify="center">
          <CustomerCard
            name="Matias"
            comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.  Lorem ipsum dolor sit amet consectetur adipisicing elit."'
          />
          <CustomerCard
            name="Matias"
            comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.  Lorem ipsum dolor sit amet consectetur adipisicing elit."'
          />
          <CustomerCard
            name="Matias"
            comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.  Lorem ipsum dolor sit amet consectetur adipisicing elit."'
          />
        </Flex>

        {/* Detail */}
        <Box backgroundColor="orange.500" height="3px" />
      </Flex>
    </Section>
  );
};

export default HomeCustomers;
