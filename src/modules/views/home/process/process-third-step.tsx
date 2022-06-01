import React from 'react';

interface IProcessThirdStep {}

const ProcessThirdStep: React.FC<IProcessThirdStep> = ({}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 py-4 h-max w-full md:grid-cols-2 md:grid-rows-1 md:py-8 md:h-80">
      {/* Left Content */}
      <div className="mr-6">
        <div className="py-4">
          <h2 className="font-semibold text-5xl text-gray-900 mb-2">Step 3</h2>
          <span className="font-bold text-xl text-gray-900 text-left">Brew the coffee</span>
          <p className="font-normal text-xl text-gray-900 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia est vero eius consequuntur suscipit!
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex w-full">
        <div
          className="bg-cover bg-center w-full"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1621179917734-429dc196863a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)',
          }}
        />
      </div>
    </div>
  );
};
export default ProcessThirdStep;
