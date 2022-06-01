import React from 'react';
import Image from 'next/image';
import Section from '@modules/sections/components/section';

interface IHomePlaceProps {}

const HomePlace: React.FC<IHomePlaceProps> = (props) => {
  const {} = props;

  return (
    <Section hasDivider={false} backgroundColor="#151412">
      <div className="grid grid-cols-1 grid-rows-2 py-4 items-center h-full w-full md:grid-cols-2 md:grid-rows-1">
        {/* Left Content */}
        <div className="flex pr-8 mr-auto">
          <div className="flex flex-col justify-center">
            <div className="py-4">
              <h2 className="font-semibold text-5xl text-white mb-2">Addres</h2>
              <h3 className="font-normal text-xl text-white text-left">
                681 Punggol Drive, Oasis Terraces #01 - 06 S820681
              </h3>
            </div>
            <div className="py-4">
              <h2 className="font-semibold text-5xl text-white mb-2">Opening Hours</h2>
              <span className="font-normal text-xl text-white text-left">Mondays - Friday: 10am - 9pm</span>
              <span className="font-normal text-xl text-white text-left">
                Saturdays, Sundays & Public Holidays: 9am- 9pm
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex h-full w-full">
          <div
            className="bg-cover bg-center h-full w-full"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)',
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default HomePlace;
