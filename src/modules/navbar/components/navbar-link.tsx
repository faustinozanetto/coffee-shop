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
      <Text as="span" cursor="pointer">
        {label}
      </Text>
    </NextLink>
  );
};

export default NavbarLink;
