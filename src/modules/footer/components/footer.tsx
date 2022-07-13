import React from 'react';
import ShopLogo from '@modules/branding/components/shop-logo';
import FooterLink from './footer-link';
import { Box, Container, Text, Link, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const {} = props;

  return (
    <Box backgroundColor="black" color="white">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <ShopLogo />
            </Box>
            <Text fontSize="sm">© 2022 Chakra Templates. All rights reserved</Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Product
            </Text>
            <Link href="#">Overview</Link>
            <Link href="#">Features</Link>
            <Link href="#">Tutorials</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Releases</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Company
            </Text>
            <Link href="#">About</Link>
            <Link href="#">Press</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Partners</Link>
          </Stack>

          {/* Location */}
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Location
            </Text>
            <Text>Conforta 1245, CABA, Argentina</Text>
            <Text>+54 11 4444 8888</Text>
            <Text>info@conforta.com</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
