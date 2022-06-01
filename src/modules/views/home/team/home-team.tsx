import React from 'react';
import Section from '@modules/sections/components/section';

interface IHomeTeamProps {}

const HomeTeam: React.FC<IHomeTeamProps> = (props) => {
  const {} = props;

  return (
    <Section hasDivider dividerColor="#DAD8D3" backgroundColor="#151412">
      <div className="grid grid-cols-1 grid-rows-2 py-4 items-center h-full w-full md:grid-cols-2 md:grid-rows-1">
        {/* Left Content */}
        <div className="flex pr-8 mr-auto">
          <div className="flex flex-col justify-center">
            <div className="py-4">
              <h2 className="font-semibold text-5xl text-white mb-2">The Team</h2>
              <p className="font-normal text-xl text-white text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt blanditiis reiciendis culpa
                architecto doloribus nihil. Aut, est. Sint, temporibus inventore?
              </p>
            </div>
            <div className="py-4">
              <h2 className="font-semibold text-5xl text-white mb-2">The Team</h2>
              <p className="font-normal text-xl text-white text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt blanditiis reiciendis culpa
                architecto doloribus nihil. Aut, est. Sint, temporibus inventore?
              </p>
            </div>
            <div className="py-4">
              <h2 className="font-semibold text-5xl text-white mb-2">The Team</h2>
              <p className="font-normal text-xl text-white text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt blanditiis reiciendis culpa
                architecto doloribus nihil. Aut, est. Sint, temporibus inventore?
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex h-full w-full">
          <div
            className="bg-cover bg-center h-full w-full"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1515860734122-e0d771b36d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)',
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default HomeTeam;
