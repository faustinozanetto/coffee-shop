import React from 'react';
import Section from '@modules/section/components/section';
import { Text, Box, VStack, Image, Button, Grid, GridItem } from '@chakra-ui/react';

interface IHomeTeamProps {}

const HomeTeam: React.FC<IHomeTeamProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="white">
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="250px 350px" gap={6}>
        {/* Left Top */}
        <GridItem rowSpan={1} colSpan={2}>
          <Box height="full" width="full">
            <Image
              src="https://fitsmallbusiness.com/wp-content/uploads/2020/02/How-to-Start-a-Coffee-Shop-in-13-Steps-The-Ultimate-Guide.png"
              alt="Team Image"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box height="full" width="full">
            <Image
              src="https://cdn7.dissolve.com/p/D430_46_331/D430_46_331_1200.jpg"
              alt="Team Image"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>

        {/* Midle Right Bottom */}
        <GridItem rowSpan={1} colSpan={0}>
          <Box width="full" height="full">
            <Image
              src="https://ak.picdn.net/shutterstock/videos/9703382/thumb/10.jpg"
              alt="Team Image"
              objectFit="cover"
              objectPosition="center"
              width="100%"
              height="100%"
            />
          </Box>
        </GridItem>

        {/* Right */}
        <GridItem rowSpan={1} colSpan={2}>
          <VStack spacing={4} alignItems="flex-start">
            <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
              THE TEAM
            </Text>
            {/* Texts */}
            <Text as="h1" fontSize="3em" fontWeight={700} color="black" lineHeight={1}>
              Our Talented Team
            </Text>
            <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero
              tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam, illo
              nostrum voluptas perspiciatis eligendi cumque.
            </Text>

            <Box paddingTop={4} width="full">
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HomeTeam;
