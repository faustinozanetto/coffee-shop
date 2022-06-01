import React from 'react';
import Section from '@modules/sections/components/section';
import useCarousel from '@hooks/carousel/use-carousel.hook';
import Image from 'next/image';
import Carousel from '@modules/carousel/carousel';

interface IHomeCustomers {}

const IMAGES = [
  'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1474899420076-a61e74989430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  'https://images.unsplash.com/photo-1562932054-d476e39c4c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1579869696034-ec145eb3987c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
];

const HomeCustomers: React.FC<IHomeCustomers> = (props) => {
  const {} = props;

  return (
    <Section hasDivider dividerColor="#DAD8D3" backgroundColor="#151412">
      <div className="flex flex-col py-10 items-center h-full w-full">
        {/* Top */}
        <h2 className="font-semibold text-5xl text-white text-center mb-6">The customers love us!</h2>
        {/* Right Content */}
        <Carousel interval={0}>
          {IMAGES.map((image, index) => (
            <Image key={index} src={image} alt="Image" height={700} width={700} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default HomeCustomers;
