import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, Image, Button, Grid } from '@chakra-ui/react';

interface IHomeAboutUsProps {}

const HomeAboutUs: React.FC<IHomeAboutUsProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="white">
      <Grid gap={6} gridTemplateColumns="1fr 1fr">
        {/* Left */}
        <Box height="full">
          <Image
            src="https://i.pinimg.com/originals/27/2c/b4/272cb407fc2a28aa22a19b65b40bab24.jpg"
            alt="AboutUsImage"
          />
        </Box>

        {/* Right */}
        <VStack height="full" spacing={4} alignItems="flex-start">
          <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
            ABOUT US
          </Text>
          {/* Texts */}
          <Text as="h1" fontSize="3em" fontWeight={700} color="black" lineHeight={1}>
            From Nothing To Something
          </Text>
          <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora
            cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam, illo nostrum
            voluptas perspiciatis eligendi cumque.
          </Text>
          <Text as="p" fontSize="1.25em" fontWeight={400} color="black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempora, voluptas error totam animi iusto.
            Ea fugiat eveniet temporibus cumque?
          </Text>

          <Box paddingTop={4} width="full">
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </Box>
        </VStack>
      </Grid>
    </Section>
  );
};

export default HomeAboutUs;
