import React from 'react';
import classNames from 'classnames';
import SectionDivider from './section-divider';

interface ISectionProps {
  /** Wether the background is an image or not. */ backgroundIsImage?: boolean;
  /** Background image url. */
  backgroundImage?: string;
  /** Background color. */
  backgroundColor?: string;
  /** Wether section has a bottom divider or not. */
  hasDivider?: boolean;
  /** Background divider color */
  dividerColor?: string;
  /** Wether to center content or not */
  centerContent?: boolean;
  /** Wether the section should span all the view height or not */
  fullHeight?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = (props) => {
  const {
    backgroundColor = 'white',
    dividerColor = 'black',
    hasDivider = false,
    backgroundIsImage = false,
    backgroundImage = '',
    centerContent = true,
    fullHeight = false,
    children,
  } = props;

  return (
    <section className={classNames(fullHeight ? 'flex relative w-full h-screen ' : 'flex relative w-full')}>
      {/* Background */}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-10 overflow-hidden bg-center bg-cover"
        style={{
          backgroundColor,
          backgroundImage: backgroundIsImage ? `url(${backgroundImage})` : '',
        }}
      />
      {/* Content */}
      <div
        className={classNames(
          centerContent
            ? 'flex z-20 container mx-auto max-w-7xl w-full h-full p-12 items-center justify-center'
            : 'flex z-20 container mx-auto max-w-7xl w-full h-full p-12'
        )}
      >
        {children}
        {hasDivider && <SectionDivider backgroundColor={dividerColor} />}
      </div>
    </section>
  );
};

export default Section;
