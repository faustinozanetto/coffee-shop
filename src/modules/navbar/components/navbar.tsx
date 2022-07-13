import { Box, Container, Flex } from '@chakra-ui/react';
import ShopLogo from '@modules/branding/components/shop-logo';
import React from 'react';
import NavbarLink from './navbar-link';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const {} = props;

  return (
    <Box as="header" width="full" position="absolute" top={0} zIndex={10}>
      <Container maxWidth="8xl" alignItems="center" justifyContent="center" padding={6}>
        {/* Content */}
        <Flex alignItems="center">
          {/* Logo */}
          <ShopLogo />

          {/* Links */}
          <Flex marginLeft="auto" alignItems="center" justifyContent="center" justify="flex-end">
            <NavbarLink href="/" label="About" />
            <NavbarLink href="/" label="Gallery" />
            <NavbarLink href="/" label="Contact" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
