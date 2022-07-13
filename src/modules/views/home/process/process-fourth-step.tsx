import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';

interface IProcessFourthStep {}

const ProcessFourthStep: React.FC<IProcessFourthStep> = ({}) => {
  return (
    <Box
      width="350px"
      backgroundColor="whiteAlpha.900"
      shadow="rgba(237, 137, 54, 0.25) 0px 8px 24px"
      margin={4}
      overflow="hidden"
    >
      {/* Image */}
      <Flex
        flexDir="column"
        backgroundImage="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        backgroundSize="cover"
        backgroundPosition="center"
        height="250px"
        width="100%"
        overflow="hidden"
      >
        <Box padding={2} marginTop="auto" marginRight="auto">
          <Text as="p" fontSize="3xl" fontWeight={900} lineHeight="1" padding={2} backgroundColor="black" color="white">
            STEP 4
          </Text>
        </Box>
      </Flex>

      {/* Text */}
      <Box padding={6}>
        <Text as="p" fontSize="lg" fontWeight={400} color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora
        </Text>
      </Box>
    </Box>
  );
};
export default ProcessFourthStep;
