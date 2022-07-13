import React from 'react';
import Section from '@modules/section/section';
import { Text, Image, Flex, VStack, HStack, Button } from '@chakra-ui/react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <Flex flexDir="column" align="center" justify="center">
        {/* Left */}
        <VStack spacing={4}>
          <Text as="h1" fontSize="4.5em" fontWeight={700} color="white" lineHeight={1}>
            Exceptional historical dining experience
          </Text>
          <Text as="h2" fontSize="2em" fontWeight={400} color="white">
            Boost your productiviy and build your mood with a short break in the most confortable place
          </Text>

          <HStack spacing={6}>
            <Button>Reserve now</Button>
            <Button variant="ghost">See our menu</Button>
          </HStack>
        </VStack>
        {/* Right */}
      </Flex>
    </Section>
  );
};

export default HomeHero;
