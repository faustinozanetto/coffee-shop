import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, VStack, HStack, Button, Image, Grid, Container, Heading } from '@chakra-ui/react';

interface IHomeHeroProps {}

const HomeHero: React.FC<IHomeHeroProps> = (props) => {
  const {} = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" width="100%" position="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <Box zIndex={1}>
        <Box paddingX={{ base: 4, md: 8 }} paddingY="8rem">
          <Container maxWidth="8xl">
            <Grid gap={6} gridTemplateColumns="1fr 1fr">
              {/* Left */}
              <VStack height="full" spacing={4} alignItems="flex-start">
                {/* Texts */}
                <Heading fontWeight={800} color="white" fontSize="7xl">
                  Experience the
                  <br />
                  <Text
                    as="span"
                    position="relative"
                    _after={{
                      content: "''",
                      width: 'full',
                      height: '30%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bg: 'orange.400',
                      zIndex: -1,
                    }}
                  >
                    True Taste
                  </Text>
                  <br />
                  <Text as="span">Of Coffee</Text>
                </Heading>
                <Text as="h2" fontSize="2em" fontWeight={400} color="white">
                  Our homebrew coffee is made with the best ingredients and the best brewing process in the city.
                </Text>

                {/* Buttons */}
                <HStack spacing={6} paddingTop={8}>
                  <Button size="lg">Reserve now</Button>
                  <Button variant="ghost" size="lg">
                    See our menu
                  </Button>
                </HStack>
              </VStack>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
