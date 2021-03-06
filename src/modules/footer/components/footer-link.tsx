import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface IFooterLinkProps {
  /* Link of the page */
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<IFooterLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <Text
        fontSize="md"
        fontWeight={500}
        color="black"
        cursor="pointer"
        textAlign="left"
        _hover={{ color: 'orange.600' }}
      >
        {children}
      </Text>
    </Link>
  );
};

export default FooterLink;
