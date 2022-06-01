import Link from 'next/link';
import React from 'react';

interface IFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<IFooterLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <span className="mr-4 cursor-pointer hover:underline md:mr-6">{children}</span>
    </Link>
  );
};

export default FooterLink;
