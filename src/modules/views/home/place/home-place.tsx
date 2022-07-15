import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, VStack, Button, Grid, GridItem } from '@chakra-ui/react';
import PlaceImagePresentation from '@modules/place/place-image-presentation';
import { images } from '@lib/images';

interface IHomePlaceProps {}

const HomePlace: React.FC<IHomePlaceProps> = (props) => {
  const {} = props;

  /* Gets a random amount of images and returns an array of random images */
  const getRandomPictures = (): string[] => {
    // Random amount between 4 and images size.
    const randomAmount = Math.floor(Math.random() * (images.length - 4)) + 4;
    const randomImages = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < randomAmount; i++) {
      randomImages.push(images[Math.floor(Math.random() * images.length)]);
    }
    return randomImages;
  };

  return (
    <Section backgroundColor="white">
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="250px 350px" gap={6}>
        {/* Left */}
        <GridItem rowSpan={2}>
          <VStack spacing={4} alignItems="flex-start">
            <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
              THE PLACE
            </Text>
            {/* Texts */}
            <Text as="h1" fontSize="3em" fontWeight={700} color="black" lineHeight={1}>
              Klangs Corner
            </Text>
            <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
              Located in one of the prettiest roads of Palermo Soho, Klangs Coffe is a must
            </Text>

            <Box paddingTop={4} width="full">
              <Button variant="ghost" size="lg">
                See More
              </Button>
            </Box>
          </VStack>
        </GridItem>

        {/* Midle Top */}
        <GridItem>
          <PlaceImagePresentation
            id="presentation-1"
            presentation={{ images: getRandomPictures(), delay: 10000, loop: true }}
          />
        </GridItem>

        {/* Right Top */}
        <GridItem>
          <PlaceImagePresentation
            id="presentation-2"
            presentation={{ images: getRandomPictures(), delay: 12500, loop: true }}
          />
        </GridItem>

        {/* Midle Right Bottom */}
        <GridItem rowSpan={1} colSpan={2}>
          <PlaceImagePresentation
            id="presentation-3"
            presentation={{ images: getRandomPictures(), delay: 15000, loop: true }}
          />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HomePlace;
