import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, HStack, Button, Image, Grid } from '@chakra-ui/react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <Grid gap={6} gridTemplateColumns="1fr 1fr">
        {/* Left */}
        <VStack height="full" spacing={4} alignItems="flex-start">
          {/* Texts */}
          <Text as="h1" fontSize="4.5em" fontWeight={700} color="white" lineHeight={1}>
            Exceptional historical dining experience
          </Text>
          <Text as="h2" fontSize="2em" fontWeight={400} color="white">
            Boost your productiviy and build your mood with a short break in the most confortable place
          </Text>

          {/* Buttons */}
          <HStack spacing={6} paddingTop={8}>
            <Button size="lg">Reserve now</Button>
            <Button variant="ghost" size="lg">
              See our menu
            </Button>
          </HStack>
        </VStack>

        {/* Right */}
        <Box height="full">
          <Image src="https://www.losdoscristianos.com/uploads/5/7/5/8/57580401/los-dos-website-vertical-coffee-cup1_orig.jpg" />
        </Box>
      </Grid>
    </Section>
  );
};

export default HomeHero;
