import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, Image, Button, Grid, GridItem } from '@chakra-ui/react';

interface IHomePlaceProps {}

const HomePlace: React.FC<IHomePlaceProps> = (props) => {
  const {} = props;

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
              Comforta's Corner
            </Text>
            <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero
              tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam, illo
              nostrum voluptas perspiciatis eligendi cumque.
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
          <Box height="full" width="full">
            <Image
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>

        {/* Right Top */}
        <GridItem>
          <Box height="full" width="full">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f5843852864027.591f18d2ba0f8.jpg"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>

        {/* Midle Right Bottom */}
        <GridItem rowSpan={1} colSpan={2}>
          <Box width="full" height="full">
            <Image
              src="https://i.pinimg.com/originals/27/2c/b4/272cb407fc2a28aa22a19b65b40bab24.jpg"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HomePlace;
