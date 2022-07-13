import { Box, Container, Flex } from '@chakra-ui/react';
import ShopLogo from '@modules/branding/components/shop-logo';
import React from 'react';
import NavbarLink from './navbar-link';

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  const {} = props;

  return (
    <Box as="header" zIndex={40}>
      <Container maxWidth="6xl" padding={4}>
        {/* Content */}
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <ShopLogo />

          {/* Links */}
          <Flex align="center" justify="flex-end">
            <NavbarLink href="/" label="about" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
