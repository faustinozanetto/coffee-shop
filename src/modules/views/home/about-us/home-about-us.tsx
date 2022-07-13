import React from 'react';
import Section from '@modules/section/section';
import { Text, Box, Flex, VStack, Image, Button } from '@chakra-ui/react';

interface IHomeAboutUsProps {}

const HomeAboutUs: React.FC<IHomeAboutUsProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="white">
      <Flex flexDir="row">
        {/* Left */}
        <Box width="50%" height="full" marginRight={10}>
          <Image src="https://i.pinimg.com/originals/27/2c/b4/272cb407fc2a28aa22a19b65b40bab24.jpg" />
        </Box>

        {/* Right */}
        <VStack width="50%" height="full" spacing={4} alignItems="flex-start">
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

          <Box paddingTop={10} width="full">
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Section>
  );
};

export default HomeAboutUs;
