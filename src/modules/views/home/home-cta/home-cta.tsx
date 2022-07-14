import { Box, Button, Text, Image, Grid, VStack, GridItem } from '@chakra-ui/react';
import Section from '@modules/section/section';
import React from 'react';

interface IHomeCTAProps {}

const HomeCTA: React.FC<IHomeCTAProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="white">
      <Grid gridTemplateColumns="repeat(2, 1fr)" gridTemplateRows="250px" gap={6}>
        {/* Left */}
        <GridItem>
          <VStack spacing={4} alignItems="flex-start">
            <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
              COME VISIT
            </Text>
            {/* Texts */}
            <Text as="h1" fontSize="3em" fontWeight={700} color="black" lineHeight={1}>
              What are you waiting for?
            </Text>
            <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero
              tempora.
            </Text>
          </VStack>
        </GridItem>

        {/* Right */}
        <GridItem>
          <Box width="full" height="full">
            <Image
              src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
              alt="CTAImage"
            />
          </Box>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HomeCTA;
