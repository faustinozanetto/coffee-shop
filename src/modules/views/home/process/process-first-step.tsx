import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface IProcessFirstStepProps {}

const ProcessFirstStep: React.FC<IProcessFirstStepProps> = ({}) => {
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
        backgroundImage="https://images.unsplash.com/photo-1630595478874-eefd5083f210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        backgroundSize="cover"
        backgroundPosition="center"
        height="250px"
        width="100%"
        overflow="hidden"
      >
        <Box padding={2} marginTop="auto" marginRight="auto">
          <Text as="p" fontSize="3xl" fontWeight={900} lineHeight="1" padding={2} backgroundColor="black" color="white">
            STEP 1
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
export default ProcessFirstStep;
