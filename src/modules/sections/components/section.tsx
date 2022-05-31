import React from 'react';
import classNames from 'classnames';
import SectionDivider from './section-divider';

interface ISectionProps {
  /** Background color. */
  backgroundColor?: string;
  /** Wether section has a bottom divider or not. */
  hasDivider?: boolean;
  /** Background divider color */
  dividerColor?: string;
  children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = (props) => {
  const { backgroundColor = 'white', dividerColor = 'black', hasDivider = true, children } = props;

  return (
    <section className="flex flex-col items-center overflow-hidden relative">
      <div
        className="w-full h-full"
        style={{
          backgroundColor,
        }}
      >
        <div className="container max-w-8xl mx-auto p-10">
          {children}
          {hasDivider && <SectionDivider backgroundColor={dividerColor} />}
        </div>
      </div>
    </section>
  );
};

export default Section;
