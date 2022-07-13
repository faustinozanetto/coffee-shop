import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';

interface ICustomCardProps {
  name: string;
  comment: string;
}

const CustomerCard: React.FC<ICustomCardProps> = (props) => {
  const { name, comment } = props;

  return (
    <Box
      width="350px"
      backgroundColor="whiteAlpha.900"
      shadow="rgba(237, 137, 54, 0.25) 0px 8px 24px"
      padding={6}
      margin={4}
      overflow="hidden"
    >
      {/* Comment */}
      <Box paddingBottom={4}>
        <Text as="p" fontSize="lg" fontWeight={400} color="black">
          {comment}
        </Text>
      </Box>

      {/* Name */}
      <Flex justifyContent="flex-end">
        <Text as="span" fontSize="xl" fontWeight={500} color="black" lineHeight={1}>
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default CustomerCard;
