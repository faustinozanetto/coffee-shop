import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';

interface ISectionProps {
  /* Children */
  children: React.ReactNode;
  /** Wether the background is an image or not. */
  backgroundIsImage?: boolean;
  /** Background image url. */
  backgroundImage?: string;
  /** Background color. */
  backgroundColor?: string;
}

const Section: React.FC<ISectionProps> = (props) => {
  const {
    backgroundColor = 'white',
    backgroundIsImage = false,
    backgroundImage = 'https://www.petassure.com/petassure/file-streams/page/DKhmRtazcw1FPjHr00Myg4caring-for-pets-teaches-children-responsibility.jpg.jpg',
    children,
  } = props;

  return (
    <VStack height="auto" overflow="hidden" position="relative">
      <Box
        backgroundColor={backgroundColor}
        backgroundImage={backgroundIsImage ? `url(${backgroundImage})` : 'none'}
        backgroundPosition="center center"
        backgroundSize="cover"
        height="100%"
        width="100%"
      >
        <Box paddingX={{ base: 4, md: 8 }} paddingY="8rem">
          <Container maxWidth="8xl">{children}</Container>
        </Box>
      </Box>
    </VStack>
  );
};

export default Section;
