import React from 'react';
import Section from '@modules/sections/components/section';
import ProcessFirstStep from './process-first-step';
import ProcessSecondStep from './process-second-step';
import ProcessThirdStep from './process-third-step';
import ProcessFourthStep from './process-fourth-step';

interface IHomeProcessProps {}

const HomeProcess: React.FC<IHomeProcessProps> = (props) => {
  const {} = props;

  return (
    <Section hasDivider dividerColor="#151412" centerContent backgroundColor="#DAD8D3">
      <div className="flex flex-col py-10 h-full w-full">
        {/* Title */}
        <div className="mb-6">
          <h2 className="font-semibold text-5xl text-gray-900 text-center mb-2">Our perfected method</h2>
        </div>
        <ProcessFirstStep />
        <ProcessSecondStep />
        <ProcessThirdStep />
        <ProcessFourthStep />
      </div>
    </Section>
  );
};

export default HomeProcess;
