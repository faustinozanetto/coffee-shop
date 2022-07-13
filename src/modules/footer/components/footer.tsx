import React from 'react';
import ShopLogo from '@modules/branding/components/shop-logo';
import { Box, Container, Text, SimpleGrid, Stack, Link, LinkBox } from '@chakra-ui/react';
import FooterLink from './footer-link';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const {} = props;

  return (
    <Box backgroundColor="black" color="white" padding={6}>
      <Container as={Stack} maxW="6xl" paddingTop={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <ShopLogo />
            </Box>
            <Text fontSize="sm">© 2022 Chakra Templates. All rights reserved</Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="lg" mb={2}>
              Product
            </Text>
            <FooterLink href="/">Overview</FooterLink>
            <FooterLink href="/">Features</FooterLink>
            <FooterLink href="/">Tutorials</FooterLink>
            <FooterLink href="/">Pricing</FooterLink>
            <FooterLink href="#">Releases</FooterLink>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="lg" mb={2}>
              Company
            </Text>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Partners</FooterLink>
          </Stack>

          {/* Location */}
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="lg" mb={2}>
              Location
            </Text>
            <address>
              <Text fontSize="sm">Conforta 1245, CABA, Argentina</Text>
              <Link href="mailto:confort@mail.com">confort@mail.com</Link>
            </address>
            <Link as="span" href="tel:+541144444444">
              +54 11 4444-4444
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
