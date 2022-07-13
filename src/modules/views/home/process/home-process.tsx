import React from 'react';
import Section from '@modules/section/section';
import { Box, Button, Text, Image, Flex, Grid, GridItem, VStack } from '@chakra-ui/react';
import ProcessFirstStep from './process-first-step';
import ProcessSecondStep from './process-second-step';
import ProcessThirdStep from './process-third-step';
import ProcessFourthStep from './process-fourth-step';

interface IHomeProcessProps {}

const HomeProcess: React.FC<IHomeProcessProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <Grid gridTemplateColumns="repeat(2, 1fr)" gridTemplateRows="1fr" gap={6}>
        {/* Left */}
        <GridItem rowSpan={2}>
          <VStack spacing={4} alignItems="flex-start">
            <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
              THE PROCESS
            </Text>
            {/* Texts */}
            <Text as="h1" fontSize="3em" fontWeight={700} color="white" lineHeight={1}>
              Our Refined Method
            </Text>
            <Text as="p" fontSize="1.25em" fontWeight={400} color="white">
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

        {/* Right */}
        <GridItem>
          <VStack>
            <ProcessFirstStep />
            <ProcessSecondStep />
            <ProcessThirdStep />
            <ProcessFourthStep />
          </VStack>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default HomeProcess;
