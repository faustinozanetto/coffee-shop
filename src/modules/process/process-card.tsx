import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface IProcessCardProps {
  step: number;
  description: string;
  thumbnail: string;
}

const ProcessCard: React.FC<IProcessCardProps> = (props) => {
  const { step, description, thumbnail } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        bounce: 0.35,
        duration: 0.5,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Flex flexDir="row" backgroundColor="white" shadow="rgba(237, 137, 54, 0.25) 0px 8px 24px" overflow="hidden">
        {/* Image */}
        <Flex
          flexDir="column"
          backgroundImage={thumbnail}
          backgroundSize="cover"
          backgroundPosition="center"
          width="250px"
          overflow="hidden"
        >
          <Box padding={2} marginTop="auto" marginRight="auto">
            <Text
              as="p"
              fontSize="3xl"
              fontWeight={900}
              lineHeight="1"
              padding={2}
              backgroundColor="black"
              color="white"
            >
              {step}
            </Text>
          </Box>
        </Flex>

        {/* Description */}
        <Flex marginLeft="auto" padding={4} flex={1}>
          <Text as="p" fontSize="lg" fontWeight={400} color="black">
            {description}
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default ProcessCard;
