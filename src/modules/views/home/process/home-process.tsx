import React from 'react';
import Section from '@modules/section/section';
import { Box, Button, Text, Image, Flex, Grid, GridItem, VStack } from '@chakra-ui/react';
import ProcessCard from '@modules/process/process-card';

interface IHomeProcessProps {}

const HomeProcess: React.FC<IHomeProcessProps> = (props) => {
  const {} = props;

  return (
    <Section backgroundColor="black">
      <VStack>
        {/* Top */}
        <VStack spacing={4} alignItems="flex-start">
          <Text as="span" fontSize="md" color="orange.500" fontWeight={600} letterSpacing="widest">
            THE PROCESS
          </Text>
          {/* Texts */}
          <Text as="h1" fontSize="3em" fontWeight={700} color="white" lineHeight={1}>
            Our Refined Method
          </Text>
          <Text as="p" fontSize="1.25em" fontWeight={400} color="white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque optio fuga ipsa culpa nesciunt maxime
            quibusdam consequatur. Rem eaque adipisci ullam magni impedit animi nam esse amet veritatis perspiciatis
            repellat facere, doloremque, qui doloribus reiciendis debitis beatae itaque. Temporibus commodi nesciunt
            obcaecati blanditiis sapiente dolore sint atque maiores quos corrupti?
          </Text>

          <Box paddingTop={4} width="full">
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </Box>
        </VStack>

        {/* First Step */}
        <Grid gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr 1fr" gap={6}>
          <ProcessCard
            step={1}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam."
            thumbnail="https://images.unsplash.com/photo-1630595478874-eefd5083f210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <ProcessCard
            step={2}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam."
            thumbnail="https://images.unsplash.com/photo-1537130508299-46ab547b4be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
          <ProcessCard
            step={3}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam."
            thumbnail="https://images.unsplash.com/photo-1621179917734-429dc196863a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          />
          <ProcessCard
            step={4}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci modi similique, soluta vero tempora cupiditate necessitatibus possimus exercitationem voluptatem magni delectus ducimus magnam."
            thumbnail="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Grid>
      </VStack>
    </Section>
  );
};

export default HomeProcess;
