import React from 'react';
import ShopLogo from '@modules/branding/components/shop-logo';
import FooterLink from './footer-link';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  const {} = props;

  return (
    <footer
      className="p-4 shadow md:px-6 md:py-8"
      style={{
        backgroundColor: '#151412',
      }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
          <ShopLogo size="large" />
        </a>
        <ul className="flex flex-wrap items-center mb-4 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <FooterLink href="/about">About</FooterLink>
          </li>
          <li>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </li>
          <li>
            <FooterLink href="/contact">Contact</FooterLink>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
      <span className="block text-sm text-brand sm:text-center">
        © 2022{' '}
        <a href="https://conkisstudios.com" className="hover:underline">
          Conkis Studios
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
