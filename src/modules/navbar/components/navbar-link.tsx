import React from 'react';
import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';

interface INavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
  const { href, label } = props;

  return (
    <NextLink href={href} passHref>
      <Text
        as="span"
        cursor="pointer"
        padding={4}
        fontSize={18}
        fontWeight={500}
        color="white"
        transition="all 0.2s"
        _hover={{ color: 'orange.500' }}
      >
        {label}
      </Text>
    </NextLink>
  );
};

export default NavbarLink;
